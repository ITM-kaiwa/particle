const particleData = [
  {
    "id": 186,
    "sentence_html": "将来<ruby>しょうらい<rt>しょうらい</rt></ruby>、医者<ruby>いしゃ<rt>いしゃ</rt></ruby>（　）なりたいです。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 167,
    "sentence_html": "学校<ruby>がっこう<rt>がっこう</rt></ruby>（　）卒業<ruby>そつぎょう<rt>そつぎょう</rt></ruby>します。",
    "options": [
      "を",
      "で",
      "から"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 177,
    "sentence_html": "ちょっとビール（　）飲<ruby>の<rt>の</rt></ruby>みませんか。",
    "options": [
      "や",
      "でも",
      "と"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 77,
    "sentence_html": "ここ（　）駅<ruby>えき<rt>えき</rt></ruby>まで遠<ruby>とお<rt>とお</rt></ruby>いです。",
    "options": [
      "から",
      "に",
      "まで"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 198,
    "sentence_html": "きれいな花<ruby>はな<rt>はな</rt></ruby>です（　）。",
    "options": [
      "よ",
      "ね",
      "か"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 70,
    "sentence_html": "クリスマス（　）パーティーをします。",
    "options": [
      "で",
      "に",
      "から"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 41,
    "sentence_html": "駅<ruby>えき<rt>えき</rt></ruby>（　）新聞<ruby>しんぶん<rt>しんぶん</rt></ruby>を買<ruby>か<rt>か</rt></ruby>います。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 195,
    "sentence_html": "おいしいです（　）。",
    "options": [
      "よ",
      "ね",
      "か"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 15,
    "sentence_html": "佐藤<ruby>さとう<rt>さとう</rt></ruby>さん（　）カメラです。",
    "options": [
      "に",
      "を",
      "の"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 2,
    "sentence_html": "ミラーさん（　）会社員<ruby>かいしゃいん<rt>かいしゃいん</rt></ruby>です。",
    "options": [
      "が",
      "を",
      "は"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 156,
    "sentence_html": "交差点<ruby>こうさてん<rt>こうさてん</rt></ruby>（　）右<ruby>みぎ<rt>みぎ</rt></ruby>へ曲<ruby>ま<rt>ま</rt></ruby>がります。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 64,
    "sentence_html": "用事<ruby>ようじ<rt>ようじ</rt></ruby>（　）あります。",
    "options": [
      "を",
      "で",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 42,
    "sentence_html": "レストラン（　）食事<ruby>しょくじ<rt>しょくじ</rt></ruby>します。",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 148,
    "sentence_html": "お金<ruby>かね<rt>かね</rt></ruby>（　）ほしいです。",
    "options": [
      "を",
      "が",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 155,
    "sentence_html": "橋<ruby>はし<rt>はし</rt></ruby>（　）渡<ruby>わた<rt>わた</rt></ruby>ります。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 1,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>（　）学生<ruby>がくせい<rt>がくせい</rt></ruby>です。",
    "options": [
      "を",
      "は",
      "が"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 58,
    "sentence_html": "部屋<ruby>へや<rt>へや</rt></ruby>に誰<ruby>だれ<rt>だれ</rt></ruby>（　）いますか。",
    "options": [
      "が",
      "を",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 119,
    "sentence_html": "父<ruby>ちち<rt>ちち</rt></ruby>（　）車<ruby>くるま<rt>くるま</rt></ruby>をもらいました。",
    "options": [
      "から",
      "まで",
      "へ"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 180,
    "sentence_html": "映画<ruby>えいが<rt>えいが</rt></ruby>（　）見<ruby>み<rt>み</rt></ruby>に行<ruby>い<rt>い</rt></ruby>きませんか。",
    "options": [
      "や",
      "と",
      "でも"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 181,
    "sentence_html": "お菓子<ruby>かし<rt>かし</rt></ruby>（　）食<ruby>た<rt>た</rt></ruby>べましょうか。",
    "options": [
      "と",
      "や",
      "でも"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 60,
    "sentence_html": "犬<ruby>いぬ<rt>いぬ</rt></ruby>（　）います。",
    "options": [
      "が",
      "を",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 5,
    "sentence_html": "山田<ruby>やまだ<rt>やまだ</rt></ruby>さん（　）先生<ruby>せんせい<rt>せんせい</rt></ruby>です。",
    "options": [
      "は",
      "を",
      "が"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 29,
    "sentence_html": "手紙<ruby>てがみ<rt>てがみ</rt></ruby>（　）書<ruby>か<rt>か</rt></ruby>きます。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 114,
    "sentence_html": "会社<ruby>かいしゃ<rt>かいしゃ</rt></ruby>（　）時計<ruby>とけい<rt>とけい</rt></ruby>をもらいました。",
    "options": [
      "から",
      "へ",
      "まで"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 129,
    "sentence_html": "日本料理<ruby>にほんりょうり<rt>にほんりょうり</rt></ruby>（　）天<ruby>てん<rt>てん</rt></ruby>ぷらが一番<ruby>いちばん<rt>いちばん</rt></ruby>好<ruby>す<rt>す</rt></ruby>きです。",
    "options": [
      "で",
      "に",
      "から"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 62,
    "sentence_html": "お金<ruby>かね<rt>かね</rt></ruby>（　）ありますか。",
    "options": [
      "が",
      "を",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 84,
    "sentence_html": "銀行<ruby>ぎんこう<rt>ぎんこう</rt></ruby>（　）郵便局<ruby>ゆうびんきょく<rt>ゆうびんきょく</rt></ruby>はあそこです。",
    "options": [
      "と",
      "や",
      "も"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 6,
    "sentence_html": "あの人<ruby>ひと<rt>ひと</rt></ruby>（　）誰<ruby>だれ<rt>だれ</rt></ruby>ですか。",
    "options": [
      "は",
      "を",
      "が"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 3,
    "sentence_html": "これ（　）本<ruby>ほん<rt>ほん</rt></ruby>です。",
    "options": [
      "は",
      "を",
      "が"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 52,
    "sentence_html": "机<ruby>つくえ<rt>つくえ</rt></ruby>の下<ruby>した<rt>した</rt></ruby>（　）猫<ruby>ねこ<rt>ねこ</rt></ruby>がいます。",
    "options": [
      "で",
      "へ",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 85,
    "sentence_html": "スーパーで肉<ruby>にく<rt>にく</rt></ruby>（　）野菜<ruby>やさい<rt>やさい</rt></ruby>を買<ruby>か<rt>か</rt></ruby>います。",
    "options": [
      "も",
      "や",
      "と"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 93,
    "sentence_html": "彼女<ruby>かのじょ<rt>かのじょ</rt></ruby>（　）話<ruby>はな<rt>はな</rt></ruby>します。",
    "options": [
      "へ",
      "と",
      "に"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 134,
    "sentence_html": "家族<ruby>かぞく<rt>かぞく</rt></ruby>（　）誰<ruby>だれ<rt>だれ</rt></ruby>が一番<ruby>いちばん<rt>いちばん</rt></ruby>歌<ruby>うた<rt>うた</rt></ruby>が上手<ruby>じょうず<rt>じょうず</rt></ruby>ですか。",
    "options": [
      "から",
      "で",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 19,
    "sentence_html": "昨日<ruby>きのう<rt>きのう</rt></ruby>（　）雨<ruby>あめ<rt>あめ</rt></ruby>でした。",
    "options": [
      "が",
      "へ",
      "も"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 61,
    "sentence_html": "時間<ruby>じかん<rt>じかん</rt></ruby>（　）ありません。",
    "options": [
      "を",
      "で",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 173,
    "sentence_html": "少<ruby>すこ<rt>すこ</rt></ruby>し（　）食<ruby>た<rt>た</rt></ruby>べます。",
    "options": [
      "から",
      "だけ",
      "しか"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 65,
    "sentence_html": "毎朝<ruby>まいあさ<rt>まいあさ</rt></ruby>6時<ruby>じ<rt>じ</rt></ruby>（　）起<ruby>お<rt>お</rt></ruby>きます。",
    "options": [
      "に",
      "から",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 192,
    "sentence_html": "午後<ruby>ごご<rt>ごご</rt></ruby>から雨<ruby>あめ<rt>あめ</rt></ruby>（　）なりました。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 161,
    "sentence_html": "大学<ruby>だいがく<rt>だいがく</rt></ruby>（　）出<ruby>で<rt>で</rt></ruby>ます。",
    "options": [
      "で",
      "を",
      "から"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 22,
    "sentence_html": "母<ruby>はは<rt>はは</rt></ruby>（　）元気<ruby>げんき<rt>げんき</rt></ruby>です。",
    "options": [
      "へ",
      "も",
      "が"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 116,
    "sentence_html": "先生<ruby>せんせい<rt>せんせい</rt></ruby>（　）日本語<ruby>にほんご<rt>にほんご</rt></ruby>を習<ruby>なら<rt>なら</rt></ruby>います。",
    "options": [
      "へ",
      "まで",
      "から"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 47,
    "sentence_html": "図書館<ruby>としょかん<rt>としょかん</rt></ruby>（　）本<ruby>ほん<rt>ほん</rt></ruby>を読<ruby>よ<rt>よ</rt></ruby>みます。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 152,
    "sentence_html": "友達<ruby>ともだち<rt>ともだち</rt></ruby>（　）ほしいです。",
    "options": [
      "が",
      "を",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 158,
    "sentence_html": "角<ruby>かど<rt>かど</rt></ruby>（　）曲<ruby>ま<rt>ま</rt></ruby>がってください。",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 98,
    "sentence_html": "箸<ruby>はし<rt>はし</rt></ruby>（　）ご飯<ruby>はん<rt>はん</rt></ruby>を食<ruby>た<rt>た</rt></ruby>べます。",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 107,
    "sentence_html": "先生<ruby>せんせい<rt>せんせい</rt></ruby>（　）教<ruby>おし<rt>おし</rt></ruby>えます。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 86,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>（　）山田<ruby>やまだ<rt>やまだ</rt></ruby>さんは学生<ruby>がくせい<rt>がくせい</rt></ruby>です。",
    "options": [
      "や",
      "と",
      "も"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 127,
    "sentence_html": "地下鉄<ruby>ちかてつ<rt>ちかてつ</rt></ruby>はバス（　）便利<ruby>べんり<rt>べんり</rt></ruby>です。",
    "options": [
      "より",
      "から",
      "で"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 185,
    "sentence_html": "テレーザちゃんは10歳<ruby>さい<rt>さい</rt></ruby>（　）なりました。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 147,
    "sentence_html": "車<ruby>くるま<rt>くるま</rt></ruby>（　）ほしいです。",
    "options": [
      "が",
      "で",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 190,
    "sentence_html": "きれい（　）なりましたね。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 92,
    "sentence_html": "誰<ruby>だれ<rt>だれ</rt></ruby>（　）行<ruby>い<rt>い</rt></ruby>きますか。",
    "options": [
      "へ",
      "に",
      "と"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 97,
    "sentence_html": "タクシー（　）うちへ帰<ruby>かえ<rt>かえ</rt></ruby>ります。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 34,
    "sentence_html": "日本<ruby>にほん<rt>にほん</rt></ruby>（　）来<ruby>き<rt>き</rt></ruby>ました。",
    "options": [
      "が",
      "へ",
      "を"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 138,
    "sentence_html": "妻<ruby>つま<rt>つま</rt></ruby>は花<ruby>はな<rt>はな</rt></ruby>（　）好<ruby>す<rt>す</rt></ruby>きです。",
    "options": [
      "を",
      "が",
      "に"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 200,
    "sentence_html": "おもしろいです（　）。",
    "options": [
      "ね",
      "か",
      "よ"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 21,
    "sentence_html": "これ（　）私<ruby>わたし<rt>わたし</rt></ruby>のです。",
    "options": [
      "も",
      "へ",
      "が"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 137,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>はイタリア料理<ruby>りょうり<rt>りょうり</rt></ruby>（　）好<ruby>す<rt>す</rt></ruby>きです。",
    "options": [
      "に",
      "を",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 132,
    "sentence_html": "世界<ruby>せかい<rt>せかい</rt></ruby>（　）どこが一番<ruby>いちばん<rt>いちばん</rt></ruby>きれいですか。",
    "options": [
      "で",
      "から",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 11,
    "sentence_html": "コンピューター（　）本<ruby>ほん<rt>ほん</rt></ruby>です。",
    "options": [
      "を",
      "に",
      "の"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 196,
    "sentence_html": "すごい（　）！",
    "options": [
      "よ",
      "か",
      "ね"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 46,
    "sentence_html": "どこ（　）買<ruby>か<rt>か</rt></ruby>いましたか。",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 17,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>（　）学生<ruby>がくせい<rt>がくせい</rt></ruby>です。",
    "options": [
      "が",
      "へ",
      "も"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 166,
    "sentence_html": "部屋<ruby>へや<rt>へや</rt></ruby>（　）出<ruby>で<rt>で</rt></ruby>てください。",
    "options": [
      "で",
      "から",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 149,
    "sentence_html": "新<ruby>あたら<rt>あたら</rt></ruby>しい靴<ruby>くつ<rt>くつ</rt></ruby>（　）ほしいです。",
    "options": [
      "を",
      "で",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 33,
    "sentence_html": "学校<ruby>がっこう<rt>がっこう</rt></ruby>（　）行<ruby>い<rt>い</rt></ruby>きます。",
    "options": [
      "へ",
      "が",
      "を"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 51,
    "sentence_html": "ロビー（　）犬<ruby>いぬ<rt>いぬ</rt></ruby>がいます。",
    "options": [
      "で",
      "へ",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 128,
    "sentence_html": "新幹線<ruby>しんかんせん<rt>しんかんせん</rt></ruby>は飛行機<ruby>ひこうき<rt>ひこうき</rt></ruby>（　）安<ruby>やす<rt>やす</rt></ruby>いです。",
    "options": [
      "より",
      "から",
      "で"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 162,
    "sentence_html": "電車<ruby>でんしゃ<rt>でんしゃ</rt></ruby>（　）降<ruby>お<rt>お</rt></ruby>ります。",
    "options": [
      "を",
      "で",
      "から"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 73,
    "sentence_html": "9時<ruby>じ<rt>じ</rt></ruby>（　）3時<ruby>じ<rt>じ</rt></ruby>まで勉強<ruby>べんきょう<rt>べんきょう</rt></ruby>します。",
    "options": [
      "まで",
      "から",
      "に"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 154,
    "sentence_html": "道<ruby>みち<rt>みち</rt></ruby>（　）渡<ruby>わた<rt>わた</rt></ruby>ります。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 18,
    "sentence_html": "あの人<ruby>ひと<rt>ひと</rt></ruby>（　）日本人<ruby>にほんじん<rt>にほんじん</rt></ruby>ですか。",
    "options": [
      "も",
      "へ",
      "が"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 193,
    "sentence_html": "今日<ruby>きょう<rt>きょう</rt></ruby>はいい天気<ruby>てんき<rt>てんき</rt></ruby>ですね。……ええ、そうですね。",
    "options": [
      "よ",
      "ね",
      "か"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 110,
    "sentence_html": "誰<ruby>だれ<rt>だれ</rt></ruby>（　）電話<ruby>でんわ<rt>でんわ</rt></ruby>をかけますか。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 145,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>はパソコン（　）ほしいです。",
    "options": [
      "で",
      "を",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 74,
    "sentence_html": "大阪<ruby>おおさか<rt>おおさか</rt></ruby>（　）東京<ruby>とうきょう<rt>とうきょう</rt></ruby>まで新幹線<ruby>しんかんせん<rt>しんかんせん</rt></ruby>で行<ruby>い<rt>い</rt></ruby>きます。",
    "options": [
      "から",
      "に",
      "まで"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 113,
    "sentence_html": "カリナさん（　）チョコレートをもらいました。",
    "options": [
      "へ",
      "まで",
      "から"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 163,
    "sentence_html": "うち（　）出<ruby>で<rt>で</rt></ruby>ます。",
    "options": [
      "を",
      "から",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 90,
    "sentence_html": "友達<ruby>ともだち<rt>ともだち</rt></ruby>（　）映画<ruby>えいが<rt>えいが</rt></ruby>を見<ruby>み<rt>み</rt></ruby>ます。",
    "options": [
      "と",
      "へ",
      "に"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 105,
    "sentence_html": "佐藤<ruby>さとう<rt>さとう</rt></ruby>さん（　）チョコレートをあげます。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 66,
    "sentence_html": "日曜日<ruby>にちようび<rt>にちようび</rt></ruby>（　）日本<ruby>にほん<rt>にほん</rt></ruby>へ来<ruby>き<rt>き</rt></ruby>ました。",
    "options": [
      "で",
      "から",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 20,
    "sentence_html": "鈴木<ruby>すずき<rt>すずき</rt></ruby>さん（　）来<ruby>き<rt>き</rt></ruby>ますか。",
    "options": [
      "が",
      "へ",
      "も"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 118,
    "sentence_html": "国<ruby>くに<rt>くに</rt></ruby>（　）手紙<ruby>てがみ<rt>てがみ</rt></ruby>が来<ruby>き<rt>き</rt></ruby>ました。",
    "options": [
      "へ",
      "まで",
      "から"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 16,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>（　）家<ruby>いえ<rt>いえ</rt></ruby>は遠<ruby>とお<rt>とお</rt></ruby>いです。",
    "options": [
      "を",
      "に",
      "の"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 78,
    "sentence_html": "学校<ruby>がっこう<rt>がっこう</rt></ruby>は8時<ruby>じ<rt>じ</rt></ruby>半<ruby>はん<rt>はん</rt></ruby>（　）始<ruby>はじ<rt>はじ</rt></ruby>まります。",
    "options": [
      "に",
      "まで",
      "から"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 131,
    "sentence_html": "スポーツ（　）サッカーが一番<ruby>いちばん<rt>いちばん</rt></ruby>おもしろいです。",
    "options": [
      "で",
      "に",
      "から"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 189,
    "sentence_html": "元気<ruby>げんき<rt>げんき</rt></ruby>（　）なりました。",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 44,
    "sentence_html": "公園<ruby>こうえん<rt>こうえん</rt></ruby>（　）サッカーをします。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 111,
    "sentence_html": "母<ruby>はは<rt>はは</rt></ruby>（　）荷物<ruby>にもつ<rt>にもつ</rt></ruby>を送<ruby>おく<rt>おく</rt></ruby>ります。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 36,
    "sentence_html": "スーパー（　）行<ruby>い<rt>い</rt></ruby>きますか。",
    "options": [
      "が",
      "を",
      "へ"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 124,
    "sentence_html": "肉<ruby>にく<rt>にく</rt></ruby>は魚<ruby>さかな<rt>さかな</rt></ruby>（　）高<ruby>たか<rt>たか</rt></ruby>いです。",
    "options": [
      "で",
      "より",
      "から"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 71,
    "sentence_html": "夜<ruby>よる<rt>よる</rt></ruby>10時<ruby>じ<rt>じ</rt></ruby>（　）帰<ruby>かえ<rt>かえ</rt></ruby>りました。",
    "options": [
      "から",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 24,
    "sentence_html": "彼<ruby>かれ<rt>かれ</rt></ruby>（　）知<ruby>し<rt>し</rt></ruby>りません。",
    "options": [
      "も",
      "へ",
      "が"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 69,
    "sentence_html": "7月<ruby>しちがつ<rt>しちがつ</rt></ruby>（　）帰<ruby>かえ<rt>かえ</rt></ruby>ります。",
    "options": [
      "で",
      "から",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 83,
    "sentence_html": "机<ruby>つくえ<rt>つくえ</rt></ruby>の上<ruby>うえ<rt>うえ</rt></ruby>に本<ruby>ほん<rt>ほん</rt></ruby>（　）ペンがあります。",
    "options": [
      "と",
      "も",
      "や"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 168,
    "sentence_html": "車<ruby>くるま<rt>くるま</rt></ruby>（　）降<ruby>お<rt>お</rt></ruby>ります。",
    "options": [
      "で",
      "から",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 81,
    "sentence_html": "休<ruby>やす<rt>やす</rt></ruby>みは土曜日<ruby>どようび<rt>どようび</rt></ruby>（　）日曜日<ruby>にちようび<rt>にちようび</rt></ruby>です。",
    "options": [
      "や",
      "も",
      "と"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 141,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>は歌<ruby>うた<rt>うた</rt></ruby>（　）下手<ruby>へた<rt>へた</rt></ruby>です。",
    "options": [
      "に",
      "が",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 82,
    "sentence_html": "パン（　）卵<ruby>たまご<rt>たまご</rt></ruby>を食<ruby>た<rt>た</rt></ruby>べます。",
    "options": [
      "と",
      "や",
      "も"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 139,
    "sentence_html": "彼<ruby>かれ<rt>かれ</rt></ruby>はスポーツ（　）嫌<ruby>きら<rt>きら</rt></ruby>いです。",
    "options": [
      "を",
      "に",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 199,
    "sentence_html": "難<ruby>むずか<rt>むずか</rt></ruby>しいです（　）。",
    "options": [
      "ね",
      "か",
      "よ"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 8,
    "sentence_html": "明日<ruby>あした<rt>あした</rt></ruby>（　）月曜日<ruby>げつようび<rt>げつようび</rt></ruby>です。",
    "options": [
      "は",
      "が",
      "を"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 153,
    "sentence_html": "公園<ruby>こうえん<rt>こうえん</rt></ruby>（　）散歩<ruby>さんぽ<rt>さんぽ</rt></ruby>します。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 43,
    "sentence_html": "部屋<ruby>へや<rt>へや</rt></ruby>（　）テレビを見<ruby>み<rt>み</rt></ruby>ます。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 125,
    "sentence_html": "英語<ruby>えいご<rt>えいご</rt></ruby>は日本語<ruby>にほんご<rt>にほんご</rt></ruby>（　）簡単<ruby>かんたん<rt>かんたん</rt></ruby>ですか。",
    "options": [
      "より",
      "から",
      "で"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 136,
    "sentence_html": "飲<ruby>の<rt>の</rt></ruby>み物<ruby>もの<rt>もの</rt></ruby>（　）コーヒーが一番<ruby>いちばん<rt>いちばん</rt></ruby>好<ruby>す<rt>す</rt></ruby>きです。",
    "options": [
      "に",
      "から",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 143,
    "sentence_html": "日本語<ruby>にほんご<rt>にほんご</rt></ruby>（　）少<ruby>すこ<rt>すこ</rt></ruby>しわかります。",
    "options": [
      "が",
      "に",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 100,
    "sentence_html": "自転車<ruby>じてんしゃ<rt>じてんしゃ</rt></ruby>（　）学校<ruby>がっこう<rt>がっこう</rt></ruby>へ行<ruby>い<rt>い</rt></ruby>きます。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 96,
    "sentence_html": "山田<ruby>やまだ<rt>やまだ</rt></ruby>さん（　）テニスをします。",
    "options": [
      "に",
      "へ",
      "と"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 38,
    "sentence_html": "どこ（　）も行<ruby>い<rt>い</rt></ruby>きません。",
    "options": [
      "が",
      "へ",
      "を"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 102,
    "sentence_html": "スプーン（　）スープを飲<ruby>の<rt>の</rt></ruby>みます。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 159,
    "sentence_html": "廊下<ruby>ろうか<rt>ろうか</rt></ruby>（　）走<ruby>はし<rt>はし</rt></ruby>ります。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 172,
    "sentence_html": "100円<ruby>えん<rt>えん</rt></ruby>（　）あります。",
    "options": [
      "だけ",
      "しか",
      "から"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 13,
    "sentence_html": "あなた（　）鞄<ruby>かばん<rt>かばん</rt></ruby>はどれですか。",
    "options": [
      "の",
      "に",
      "を"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 40,
    "sentence_html": "国<ruby>くに<rt>くに</rt></ruby>（　）帰<ruby>かえ<rt>かえ</rt></ruby>ります。",
    "options": [
      "を",
      "へ",
      "が"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 157,
    "sentence_html": "空<ruby>そら<rt>そら</rt></ruby>（　）飛<ruby>と<rt>と</rt></ruby>びます。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 59,
    "sentence_html": "机<ruby>つくえ<rt>つくえ</rt></ruby>の上<ruby>うえ<rt>うえ</rt></ruby>に本<ruby>ほん<rt>ほん</rt></ruby>（　）あります。",
    "options": [
      "を",
      "で",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 187,
    "sentence_html": "春<ruby>はる<rt>はる</rt></ruby>（　）なりました。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 169,
    "sentence_html": "スペイン語<ruby>ご<rt>ご</rt></ruby>を3か月<ruby>げつ<rt>げつ</rt></ruby>（　）勉強<ruby>べんきょう<rt>べんきょう</rt></ruby>しました。",
    "options": [
      "だけ",
      "しか",
      "から"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 103,
    "sentence_html": "英語<ruby>えいご<rt>えいご</rt></ruby>（　）話<ruby>はな<rt>はな</rt></ruby>します。",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 133,
    "sentence_html": "1年<ruby>ねん<rt>ねん</rt></ruby>（　）いつが一番<ruby>いちばん<rt>いちばん</rt></ruby>暑<ruby>あつ<rt>あつ</rt></ruby>いですか。",
    "options": [
      "で",
      "から",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 165,
    "sentence_html": "会社<ruby>かいしゃ<rt>かいしゃ</rt></ruby>（　）辞<ruby>や<rt>や</rt></ruby>めます。",
    "options": [
      "を",
      "から",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 23,
    "sentence_html": "日曜日<ruby>にちようび<rt>にちようび</rt></ruby>（　）働<ruby>はたら<rt>はたら</rt></ruby>きます。",
    "options": [
      "へ",
      "も",
      "が"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 160,
    "sentence_html": "川<ruby>かわ<rt>かわ</rt></ruby>（　）泳<ruby>およ<rt>およ</rt></ruby>ぎます。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 9,
    "sentence_html": "これ（　）私<ruby>わたし<rt>わたし</rt></ruby>の傘<ruby>かさ<rt>かさ</rt></ruby>です。",
    "options": [
      "を",
      "に",
      "の"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 140,
    "sentence_html": "マリアさんはダンス（　）上手<ruby>じょうず<rt>じょうず</rt></ruby>です。",
    "options": [
      "が",
      "に",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 57,
    "sentence_html": "あそこにコンビニ（　）あります。",
    "options": [
      "を",
      "が",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 7,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>の父<ruby>ちち<rt>ちち</rt></ruby>（　）医者<ruby>いしゃ<rt>いしゃ</rt></ruby>です。",
    "options": [
      "が",
      "を",
      "は"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 164,
    "sentence_html": "バス（　）降<ruby>お<rt>お</rt></ruby>ります。",
    "options": [
      "を",
      "で",
      "から"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 63,
    "sentence_html": "約束<ruby>やくそく<rt>やくそく</rt></ruby>（　）あります。",
    "options": [
      "を",
      "で",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 80,
    "sentence_html": "昼休<ruby>ひるやす<rt>ひるやす</rt></ruby>みは12時<ruby>じ<rt>じ</rt></ruby>（　）です。",
    "options": [
      "まで",
      "から",
      "に"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 171,
    "sentence_html": "休<ruby>やす<rt>やす</rt></ruby>みは日曜日<ruby>にちようび<rt>にちようび</rt></ruby>（　）です。",
    "options": [
      "しか",
      "だけ",
      "から"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 55,
    "sentence_html": "かばんの中<ruby>なか<rt>なか</rt></ruby>（　）何<ruby>なに<rt>なに</rt></ruby>がありますか。",
    "options": [
      "へ",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 45,
    "sentence_html": "学校<ruby>がっこう<rt>がっこう</rt></ruby>（　）日本語<ruby>にほんご<rt>にほんご</rt></ruby>を勉強<ruby>べんきょう<rt>べんきょう</rt></ruby>します。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 130,
    "sentence_html": "果物<ruby>くだもの<rt>くだもの</rt></ruby>（　）何<ruby>なに<rt>なに</rt></ruby>が一番<ruby>いちばん<rt>いちばん</rt></ruby>好<ruby>す<rt>す</rt></ruby>きですか。",
    "options": [
      "に",
      "で",
      "から"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 184,
    "sentence_html": "ジュース（　）どうですか。",
    "options": [
      "でも",
      "と",
      "や"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 4,
    "sentence_html": "今日<ruby>きょう<rt>きょう</rt></ruby>（　）休<ruby>やす<rt>やす</rt></ruby>みです。",
    "options": [
      "は",
      "を",
      "が"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 50,
    "sentence_html": "あそこ（　）佐藤<ruby>さとう<rt>さとう</rt></ruby>さんがいます。",
    "options": [
      "で",
      "へ",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 146,
    "sentence_html": "今<ruby>いま<rt>いま</rt></ruby>、何<ruby>なに<rt>なに</rt></ruby>（　）一番<ruby>いちばん<rt>いちばん</rt></ruby>ほしいですか。",
    "options": [
      "を",
      "が",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 27,
    "sentence_html": "本<ruby>ほん<rt>ほん</rt></ruby>（　）読<ruby>よ<rt>よ</rt></ruby>みます。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 126,
    "sentence_html": "彼<ruby>かれ<rt>かれ</rt></ruby>は私<ruby>わたし<rt>わたし</rt></ruby>（　）背<ruby>せ<rt>せ</rt></ruby>が高<ruby>たか<rt>たか</rt></ruby>いです。",
    "options": [
      "から",
      "で",
      "より"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 32,
    "sentence_html": "日本語<ruby>にほんご<rt>にほんご</rt></ruby>（　）勉強<ruby>べんきょう<rt>べんきょう</rt></ruby>します。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 48,
    "sentence_html": "うち（　）宿題<ruby>しゅくだい<rt>しゅくだい</rt></ruby>をします。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は動作を行う場所を表します。",
    "explanation_vi": "「で」 biểu thị địa điểm xảy ra hành động."
  },
  {
    "id": 191,
    "sentence_html": "部長<ruby>ぶちょう<rt>ぶちょう</rt></ruby>（　）なりました。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 122,
    "sentence_html": "車<ruby>くるま<rt>くるま</rt></ruby>は自転車<ruby>じてんしゃ<rt>じてんしゃ</rt></ruby>（　）速<ruby>はや<rt>はや</rt></ruby>いです。",
    "options": [
      "で",
      "から",
      "より"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 170,
    "sentence_html": "私<ruby>わたし<rt>わたし</rt></ruby>（　）行<ruby>い<rt>い</rt></ruby>きます。",
    "options": [
      "しか",
      "から",
      "だけ"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 115,
    "sentence_html": "銀行<ruby>ぎんこう<rt>ぎんこう</rt></ruby>（　）お金<ruby>かね<rt>かね</rt></ruby>を借<ruby>か<rt>か</rt></ruby>ります。",
    "options": [
      "へ",
      "から",
      "まで"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 53,
    "sentence_html": "冷蔵庫<ruby>れいぞうこ<rt>れいぞうこ</rt></ruby>の中<ruby>なか<rt>なか</rt></ruby>（　）りんごがあります。",
    "options": [
      "へ",
      "に",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 49,
    "sentence_html": "部屋<ruby>へや<rt>へや</rt></ruby>（　）机<ruby>つくえ<rt>つくえ</rt></ruby>があります。",
    "options": [
      "へ",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 112,
    "sentence_html": "弟<ruby>おとうと<rt>おとうと</rt></ruby>（　）お金<ruby>かね<rt>かね</rt></ruby>を貸<ruby>か<rt>か</rt></ruby>します。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 194,
    "sentence_html": "大変<ruby>たいへん<rt>たいへん</rt></ruby>です（　）。",
    "options": [
      "か",
      "よ",
      "ね"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 178,
    "sentence_html": "お茶<ruby>ちゃ<rt>ちゃ</rt></ruby>（　）いかがですか。",
    "options": [
      "と",
      "でも",
      "や"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 91,
    "sentence_html": "彼<ruby>かれ<rt>かれ</rt></ruby>（　）結婚<ruby>けっこん<rt>けっこん</rt></ruby>します。",
    "options": [
      "へ",
      "と",
      "に"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 123,
    "sentence_html": "今日<ruby>きょう<rt>きょう</rt></ruby>は昨日<ruby>きのう<rt>きのう</rt></ruby>（　）暑<ruby>あつ<rt>あつ</rt></ruby>いです。",
    "options": [
      "から",
      "より",
      "で"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 72,
    "sentence_html": "2020年<ruby>ねん<rt>ねん</rt></ruby>（　）結婚<ruby>けっこん<rt>けっこん</rt></ruby>しました。",
    "options": [
      "で",
      "から",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 31,
    "sentence_html": "写真<ruby>しゃしん<rt>しゃしん</rt></ruby>（　）撮<ruby>と<rt>と</rt></ruby>ります。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 75,
    "sentence_html": "会議<ruby>かいぎ<rt>かいぎ</rt></ruby>は10時<ruby>じ<rt>じ</rt></ruby>（　）です。",
    "options": [
      "に",
      "まで",
      "から"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 88,
    "sentence_html": "ビール（　）ワインを飲<ruby>の<rt>の</rt></ruby>みます。",
    "options": [
      "や",
      "と",
      "も"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 39,
    "sentence_html": "あした、東京<ruby>とうきょう<rt>とうきょう</rt></ruby>（　）行<ruby>い<rt>い</rt></ruby>きます。",
    "options": [
      "を",
      "へ",
      "が"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 101,
    "sentence_html": "何<ruby>なん<rt>なん</rt></ruby>（　）東京<ruby>とうきょう<rt>とうきょう</rt></ruby>へ行<ruby>い<rt>い</rt></ruby>きますか。",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 95,
    "sentence_html": "先生<ruby>せんせい<rt>せんせい</rt></ruby>（　）相談<ruby>そうだん<rt>そうだん</rt></ruby>します。",
    "options": [
      "へ",
      "に",
      "と"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 104,
    "sentence_html": "はさみ（　）紙<ruby>かみ<rt>かみ</rt></ruby>を切<ruby>き<rt>き</rt></ruby>ります。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 99,
    "sentence_html": "日本語<ruby>にほんご<rt>にほんご</rt></ruby>（　）手紙<ruby>てがみ<rt>てがみ</rt></ruby>を書<ruby>か<rt>か</rt></ruby>きます。",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 179,
    "sentence_html": "コーヒー（　）飲<ruby>の<rt>の</rt></ruby>みましょう。",
    "options": [
      "と",
      "でも",
      "や"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 12,
    "sentence_html": "日本<ruby>にほん<rt>にほん</rt></ruby>（　）車<ruby>くるま<rt>くるま</rt></ruby>です。",
    "options": [
      "を",
      "の",
      "に"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 89,
    "sentence_html": "家族<ruby>かぞく<rt>かぞく</rt></ruby>（　）日本<ruby>にほん<rt>にほん</rt></ruby>へ来<ruby>き<rt>き</rt></ruby>ました。",
    "options": [
      "と",
      "へ",
      "に"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 10,
    "sentence_html": "IMC（　）社員<ruby>しゃいん<rt>しゃいん</rt></ruby>です。",
    "options": [
      "を",
      "に",
      "の"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 135,
    "sentence_html": "クラス（　）山田<ruby>やまだ<rt>やまだ</rt></ruby>さんが一番<ruby>いちばん<rt>いちばん</rt></ruby>背<ruby>せ<rt>せ</rt></ruby>が高<ruby>たか<rt>たか</rt></ruby>いです。",
    "options": [
      "から",
      "で",
      "に"
    ],
    "answer": "で",
    "explanation_ja": "「で」は範囲（～の中で）を表します。",
    "explanation_vi": "「で」 biểu thị phạm vi (trong số, trong nhóm)."
  },
  {
    "id": 87,
    "sentence_html": "犬<ruby>いぬ<rt>いぬ</rt></ruby>（　）猫<ruby>ねこ<rt>ねこ</rt></ruby>が好<ruby>す<rt>す</rt></ruby>きです。",
    "options": [
      "も",
      "や",
      "と"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 142,
    "sentence_html": "漢字<ruby>かんじ<rt>かんじ</rt></ruby>（　）わかりますか。",
    "options": [
      "が",
      "を",
      "に"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 35,
    "sentence_html": "家<ruby>いえ<rt>いえ</rt></ruby>（　）帰<ruby>かえ<rt>かえ</rt></ruby>ります。",
    "options": [
      "が",
      "へ",
      "を"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 14,
    "sentence_html": "大学<ruby>だいがく<rt>だいがく</rt></ruby>（　）先生<ruby>せんせい<rt>せんせい</rt></ruby>です。",
    "options": [
      "を",
      "に",
      "の"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 121,
    "sentence_html": "北海道<ruby>ほっかいどう<rt>ほっかいどう</rt></ruby>は九州<ruby>きゅうしゅう<rt>きゅうしゅう</rt></ruby>（　）大<ruby>おお<rt>おお</rt></ruby>きいです。",
    "options": [
      "より",
      "から",
      "で"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 54,
    "sentence_html": "公園<ruby>こうえん<rt>こうえん</rt></ruby>（　）木<ruby>き<rt>き</rt></ruby>があります。",
    "options": [
      "に",
      "で",
      "へ"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 176,
    "sentence_html": "一人<ruby>ひとり<rt>ひとり</rt></ruby>（　）で来<ruby>き<rt>き</rt></ruby>ました。",
    "options": [
      "だけ",
      "しか",
      "から"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 150,
    "sentence_html": "時間<ruby>じかん<rt>じかん</rt></ruby>（　）ほしいです。",
    "options": [
      "を",
      "が",
      "で"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 37,
    "sentence_html": "京都<ruby>きょうと<rt>きょうと</rt></ruby>（　）旅行<ruby>りょこう<rt>りょこう</rt></ruby>します。",
    "options": [
      "を",
      "が",
      "へ"
    ],
    "answer": "へ",
    "explanation_ja": "「へ」は移動の方向を表します。",
    "explanation_vi": "「へ」 biểu thị hướng di chuyển (đi đến)."
  },
  {
    "id": 26,
    "sentence_html": "水<ruby>みず<rt>みず</rt></ruby>（　）飲<ruby>の<rt>の</rt></ruby>みます。",
    "options": [
      "を",
      "に",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 94,
    "sentence_html": "同僚<ruby>どうりょう<rt>どうりょう</rt></ruby>（　）ご飯<ruby>はん<rt>はん</rt></ruby>を食<ruby>た<rt>た</rt></ruby>べます。",
    "options": [
      "と",
      "に",
      "へ"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 188,
    "sentence_html": "日本語<ruby>にほんご<rt>にほんご</rt></ruby>が上手<ruby>じょうず<rt>じょうず</rt></ruby>（　）なりました。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 182,
    "sentence_html": "週末<ruby>しゅうまつ<rt>しゅうまつ</rt></ruby>、どこか（　）行<ruby>い<rt>い</rt></ruby>きませんか。",
    "options": [
      "と",
      "や",
      "でも"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 28,
    "sentence_html": "映画<ruby>えいが<rt>えいが</rt></ruby>（　）見<ruby>み<rt>み</rt></ruby>ます。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 30,
    "sentence_html": "音楽<ruby>おんがく<rt>おんがく</rt></ruby>（　）聞<ruby>き<rt>き</rt></ruby>きます。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 183,
    "sentence_html": "散歩<ruby>さんぽ<rt>さんぽ</rt></ruby>（　）しませんか。",
    "options": [
      "でも",
      "と",
      "や"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 174,
    "sentence_html": "これ（　）ください。",
    "options": [
      "しか",
      "だけ",
      "から"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 79,
    "sentence_html": "家<ruby>いえ<rt>いえ</rt></ruby>（　）会社<ruby>かいしゃ<rt>かいしゃ</rt></ruby>まで30分<ruby>ぷん<rt>ぷん</rt></ruby>です。",
    "options": [
      "に",
      "から",
      "まで"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 144,
    "sentence_html": "どんな映画<ruby>えいが<rt>えいが</rt></ruby>（　）好<ruby>す<rt>す</rt></ruby>きですか。",
    "options": [
      "を",
      "が",
      "に"
    ],
    "answer": "が",
    "explanation_ja": "「が」は能力や好みの対象を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sở thích, năng lực."
  },
  {
    "id": 25,
    "sentence_html": "ご飯<ruby>はん<rt>はん</rt></ruby>（　）食<ruby>た<rt>た</rt></ruby>べます。",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 120,
    "sentence_html": "大学<ruby>だいがく<rt>だいがく</rt></ruby>（　）資料<ruby>しりょう<rt>しりょう</rt></ruby>をもらいます。",
    "options": [
      "まで",
      "から",
      "へ"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 76,
    "sentence_html": "月曜日<ruby>げつようび<rt>げつようび</rt></ruby>（　）金曜日<ruby>きんようび<rt>きんようび</rt></ruby>まで働<ruby>はたら<rt>はたら</rt></ruby>きます。",
    "options": [
      "から",
      "まで",
      "に"
    ],
    "answer": "から",
    "explanation_ja": "「から」は時間や場所の始まりを表します。",
    "explanation_vi": "「から」 biểu thị điểm bắt đầu (từ)."
  },
  {
    "id": 151,
    "sentence_html": "カメラ（　）ほしいです。",
    "options": [
      "で",
      "が",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  },
  {
    "id": 108,
    "sentence_html": "家族<ruby>かぞく<rt>かぞく</rt></ruby>（　）手紙<ruby>てがみ<rt>てがみ</rt></ruby>を送<ruby>おく<rt>おく</rt></ruby>ります。",
    "options": [
      "で",
      "に",
      "を"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 106,
    "sentence_html": "友達<ruby>ともだち<rt>ともだち</rt></ruby>（　）本<ruby>ほん<rt>ほん</rt></ruby>を貸<ruby>か<rt>か</rt></ruby>します。",
    "options": [
      "を",
      "で",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 67,
    "sentence_html": "11時<ruby>じ<rt>じ</rt></ruby>半<ruby>はん<rt>はん</rt></ruby>（　）寝<ruby>ね<rt>ね</rt></ruby>ます。",
    "options": [
      "から",
      "に",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 175,
    "sentence_html": "5分<ruby>ふん<rt>ふん</rt></ruby>（　）待<ruby>ま<rt>ま</rt></ruby>ってください。",
    "options": [
      "だけ",
      "しか",
      "から"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 56,
    "sentence_html": "庭<ruby>にわ<rt>にわ</rt></ruby>（　）花<ruby>はな<rt>はな</rt></ruby>があります。",
    "options": [
      "で",
      "に",
      "へ"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 109,
    "sentence_html": "彼女<ruby>かのじょ<rt>かのじょ</rt></ruby>（　）花<ruby>はな<rt>はな</rt></ruby>をプレゼントします。",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 117,
    "sentence_html": "誰<ruby>だれ<rt>だれ</rt></ruby>（　）その話<ruby>はな<rt>はな</rt></ruby>を聞<ruby>き<rt>き</rt></ruby>ましたか。",
    "options": [
      "へ",
      "から",
      "まで"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 68,
    "sentence_html": "何時<ruby>なんじ<rt>なんじ</rt></ruby>（　）終<ruby>お<rt>お</rt></ruby>わりますか。",
    "options": [
      "に",
      "から",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 197,
    "sentence_html": "寒<ruby>さむ<rt>さむ</rt></ruby>いです（　）。",
    "options": [
      "よ",
      "ね",
      "か"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  }
];