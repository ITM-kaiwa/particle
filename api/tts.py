from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import asyncio
import edge_tts

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        query = parse_qs(urlparse(self.path).query)
        text = query.get('text', [''])[0]
        voice = query.get('voice', ['ja-JP-NanamiNeural'])[0]

        if not text:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'Missing text parameter')
            return

        async def _synthesize():
            communicate = edge_tts.Communicate(text, voice)
            audio_data = b""
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    audio_data += chunk["data"]
            return audio_data

        try:
            audio_data = asyncio.run(_synthesize())
            self.send_response(200)
            self.send_header('Content-Type', 'audio/mpeg')
            self.send_header('Cache-Control', 'public, max-age=31536000')
            self.end_headers()
            self.wfile.write(audio_data)
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode('utf-8'))
