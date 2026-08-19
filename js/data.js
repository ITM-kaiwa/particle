const particleData = [
  {
    "id": 199,
    "sentence_html": "<ruby>難<rt>むずか</rt></ruby>しいです（　）。",
    "sentence_vi": "Khó nhỉ.",
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
    "id": 78,
    "sentence_html": "<ruby>学校<rt>がっこう</rt></ruby>は8<ruby>時半<rt>じはん</rt></ruby>（　）<ruby>始<rt>はじ</rt></ruby>まります。",
    "sentence_vi": "Trường học bắt đầu từ 8 giờ rưỡi.",
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
    "id": 105,
    "sentence_html": "<ruby>佐藤<rt>さとう</rt></ruby>さん（　）チョコレートをあげます。",
    "sentence_vi": "Tôi tặng socola cho anh Sato.",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 187,
    "sentence_html": "<ruby>春<rt>はる</rt></ruby>（　）なりました。",
    "sentence_vi": "Đã sang xuân.",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "に",
    "explanation_ja": "「に」は変化の結果を表します。",
    "explanation_vi": "「に」 biểu thị kết quả của sự thay đổi (trở thành)."
  },
  {
    "id": 98,
    "sentence_html": "<ruby>箸<rt>はし</rt></ruby>（　）ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。",
    "sentence_vi": "Tôi ăn cơm bằng đũa.",
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
    "id": 24,
    "sentence_html": "<ruby>彼<rt>かれ</rt></ruby>（　）<ruby>知<rt>し</rt></ruby>りません。",
    "sentence_vi": "Anh ấy cũng không biết.",
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
    "id": 196,
    "sentence_html": "すごい（　）！",
    "sentence_vi": "Tuyệt vời nhỉ!",
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
    "id": 31,
    "sentence_html": "<ruby>写真<rt>しゃしん</rt></ruby>（　）<ruby>撮<rt>と</rt></ruby>ります。",
    "sentence_vi": "Tôi chụp ảnh.",
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
    "id": 86,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>（　）<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>学生<rt>がくせい</rt></ruby>です。",
    "sentence_vi": "Tôi và anh Yamada là học sinh.",
    "options": [
      "も",
      "と",
      "や"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 114,
    "sentence_html": "<ruby>会社<rt>かいしゃ</rt></ruby>（　）<ruby>時計<rt>とけい</rt></ruby>をもらいました。",
    "sentence_vi": "Tôi đã nhận đồng hồ từ công ty.",
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
    "id": 159,
    "sentence_html": "<ruby>廊下<rt>ろうか</rt></ruby>（　）<ruby>走<rt>はし</rt></ruby>ります。",
    "sentence_vi": "Tôi chạy trên hành lang.",
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
    "id": 127,
    "sentence_html": "<ruby>地下鉄<rt>ちかてつ</rt></ruby>はバス（　）<ruby>便利<rt>べんり</rt></ruby>です。",
    "sentence_vi": "Tàu điện ngầm tiện lợi hơn xe buýt.",
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
    "id": 124,
    "sentence_html": "<ruby>肉<rt>にく</rt></ruby>は<ruby>魚<rt>さかな</rt></ruby>（　）<ruby>高<rt>たか</rt></ruby>いです。",
    "sentence_vi": "Thịt đắt hơn cá.",
    "options": [
      "より",
      "で",
      "から"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 139,
    "sentence_html": "<ruby>彼<rt>かれ</rt></ruby>はスポーツ（　）<ruby>嫌<rt>きら</rt></ruby>いです。",
    "sentence_vi": "Anh ấy ghét thể thao.",
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
    "id": 43,
    "sentence_html": "<ruby>部屋<rt>へや</rt></ruby>（　）テレビを<ruby>見<rt>み</rt></ruby>ます。",
    "sentence_vi": "Tôi xem tivi ở trong phòng.",
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
    "id": 148,
    "sentence_html": "お<ruby>金<rt>かね</rt></ruby>（　）ほしいです。",
    "sentence_vi": "Tôi muốn có tiền.",
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
    "id": 131,
    "sentence_html": "スポーツ（　）サッカーが<ruby>一番<rt>いちばん</rt></ruby>おもしろいです。",
    "sentence_vi": "Trong các môn thể thao, bóng đá là thú vị nhất.",
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
    "id": 93,
    "sentence_html": "<ruby>彼女<rt>かのじょ</rt></ruby>（　）<ruby>話<rt>はな</rt></ruby>します。",
    "sentence_vi": "Tôi nói chuyện với cô ấy.",
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
    "id": 12,
    "sentence_html": "<ruby>日本<rt>にほん</rt></ruby>（　）<ruby>車<rt>くるま</rt></ruby>です。",
    "sentence_vi": "Là ô tô của Nhật Bản.",
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
    "id": 129,
    "sentence_html": "<ruby>日本料理<rt>にほんりょうり</rt></ruby>（　）<ruby>天<rt>てん</rt></ruby>ぷらが<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きです。",
    "sentence_vi": "Trong các món ăn Nhật Bản, tôi thích tempura nhất.",
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
    "id": 176,
    "sentence_html": "<ruby>一人<rt>ひとり</rt></ruby>（　）で<ruby>来<rt>き</rt></ruby>ました。",
    "sentence_vi": "Tôi đã đến chỉ một mình.",
    "options": [
      "だけ",
      "から",
      "しか"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 19,
    "sentence_html": "<ruby>昨日<rt>きのう</rt></ruby>（　）<ruby>雨<rt>あめ</rt></ruby>でした。",
    "sentence_vi": "Hôm qua cũng đã mưa.",
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
    "id": 55,
    "sentence_html": "かばんの<ruby>中<rt>なか</rt></ruby>（　）<ruby>何<rt>なに</rt></ruby>がありますか。",
    "sentence_vi": "Trong cặp có cái gì vậy?",
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
    "id": 95,
    "sentence_html": "<ruby>先生<rt>せんせい</rt></ruby>（　）<ruby>相談<rt>そうだん</rt></ruby>します。",
    "sentence_vi": "Tôi thảo luận với giáo viên.",
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
    "id": 53,
    "sentence_html": "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>（　）りんごがあります。",
    "sentence_vi": "Trong tủ lạnh có quả táo.",
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
    "id": 104,
    "sentence_html": "はさみ（　）<ruby>紙<rt>かみ</rt></ruby>を<ruby>切<rt>き</rt></ruby>ります。",
    "sentence_vi": "Tôi cắt giấy bằng kéo.",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 80,
    "sentence_html": "<ruby>昼休<rt>ひるやす</rt></ruby>みは12<ruby>時<rt>じ</rt></ruby>（　）です。",
    "sentence_vi": "Giờ nghỉ trưa bắt đầu từ 12 giờ.",
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
    "id": 189,
    "sentence_html": "<ruby>元気<rt>げんき</rt></ruby>（　）なりました。",
    "sentence_vi": "Đã trở nên khỏe mạnh.",
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
    "id": 186,
    "sentence_html": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>医者<rt>いしゃ</rt></ruby>（　）なりたいです。",
    "sentence_vi": "Tương lai, tôi muốn trở thành bác sĩ.",
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
    "id": 62,
    "sentence_html": "お<ruby>金<rt>かね</rt></ruby>（　）ありますか。",
    "sentence_vi": "Bạn có tiền không?",
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
    "id": 146,
    "sentence_html": "<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>（　）<ruby>一番<rt>いちばん</rt></ruby>ほしいですか。",
    "sentence_vi": "Bây giờ bạn muốn cái gì nhất?",
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
    "id": 76,
    "sentence_html": "<ruby>月曜日<rt>げつようび</rt></ruby>（　）<ruby>金曜日<rt>きんようび</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。",
    "sentence_vi": "Tôi làm việc từ thứ Hai đến thứ Sáu.",
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
    "id": 69,
    "sentence_html": "7<ruby>月<rt>がつ</rt></ruby>（　）<ruby>帰<rt>かえ</rt></ruby>ります。",
    "sentence_vi": "Tôi sẽ về vào tháng 7.",
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
    "id": 118,
    "sentence_html": "<ruby>国<rt>くに</rt></ruby>（　）<ruby>手紙<rt>てがみ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
    "sentence_vi": "Thư đã đến từ quê nhà.",
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
    "id": 96,
    "sentence_html": "<ruby>山田<rt>やまだ</rt></ruby>さん（　）テニスをします。",
    "sentence_vi": "Tôi chơi tennis với anh Yamada.",
    "options": [
      "に",
      "と",
      "へ"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 20,
    "sentence_html": "<ruby>鈴木<rt>すずき</rt></ruby>さん（　）<ruby>来<rt>き</rt></ruby>ますか。",
    "sentence_vi": "Anh Suzuki cũng sẽ đến chứ?",
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
    "id": 16,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>（　）<ruby>家<rt>いえ</rt></ruby>は<ruby>遠<rt>とお</rt></ruby>いです。",
    "sentence_vi": "Nhà của tôi thì xa.",
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
    "id": 35,
    "sentence_html": "<ruby>家<rt>いえ</rt></ruby>（　）<ruby>帰<rt>かえ</rt></ruby>ります。",
    "sentence_vi": "Tôi về nhà.",
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
    "id": 57,
    "sentence_html": "あそこにコンビニ（　）あります。",
    "sentence_vi": "Ở đằng kia có cửa hàng tiện lợi.",
    "options": [
      "で",
      "を",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 79,
    "sentence_html": "<ruby>家<rt>いえ</rt></ruby>（　）<ruby>会社<rt>かいしゃ</rt></ruby>まで30<ruby>分<rt>ぷん</rt></ruby>です。",
    "sentence_vi": "Từ nhà đến công ty mất 30 phút.",
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
    "id": 175,
    "sentence_html": "5<ruby>分<rt>ふん</rt></ruby>（　）<ruby>待<rt>ま</rt></ruby>ってください。",
    "sentence_vi": "Hãy đợi tôi chỉ 5 phút.",
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
    "id": 10,
    "sentence_html": "IMC（　）<ruby>社員<rt>しゃいん</rt></ruby>です。",
    "sentence_vi": "Là nhân viên của công ty IMC.",
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
    "id": 140,
    "sentence_html": "マリアさんはダンス（　）<ruby>上手<rt>じょうず</rt></ruby>です。",
    "sentence_vi": "Chị Maria nhảy giỏi.",
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
    "id": 3,
    "sentence_html": "これ（　）<ruby>本<rt>ほん</rt></ruby>です。",
    "sentence_vi": "Đây là quyển sách.",
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
    "id": 174,
    "sentence_html": "これ（　）ください。",
    "sentence_vi": "Cho tôi chỉ cái này.",
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
    "id": 173,
    "sentence_html": "<ruby>少<rt>すこ</rt></ruby>し（　）<ruby>食<rt>た</rt></ruby>べます。",
    "sentence_vi": "Tôi chỉ ăn một chút.",
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
    "id": 71,
    "sentence_html": "<ruby>夜<rt>よる</rt></ruby>10<ruby>時<rt>じ</rt></ruby>（　）<ruby>帰<rt>かえ</rt></ruby>りました。",
    "sentence_vi": "Tôi đã về nhà lúc 10 giờ tối.",
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
    "id": 119,
    "sentence_html": "<ruby>父<rt>ちち</rt></ruby>（　）<ruby>車<rt>くるま</rt></ruby>をもらいました。",
    "sentence_vi": "Tôi đã nhận ô tô từ bố.",
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
    "id": 85,
    "sentence_html": "スーパーで<ruby>肉<rt>にく</rt></ruby>（　）<ruby>野菜<rt>やさい</rt></ruby>を<ruby>買<rt>か</rt></ruby>います。",
    "sentence_vi": "Tôi mua thịt và rau ở siêu thị.",
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
    "id": 47,
    "sentence_html": "<ruby>図書館<rt>としょかん</rt></ruby>（　）<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。",
    "sentence_vi": "Tôi đọc sách ở thư viện.",
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
    "id": 113,
    "sentence_html": "カリナさん（　）チョコレートをもらいました。",
    "sentence_vi": "Tôi đã nhận socola từ chị Karina.",
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
    "id": 72,
    "sentence_html": "2020<ruby>年<rt>ねん</rt></ruby>（　）<ruby>結婚<rt>けっこん</rt></ruby>しました。",
    "sentence_vi": "Tôi đã kết hôn vào năm 2020.",
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
    "id": 21,
    "sentence_html": "これ（　）<ruby>私<rt>わたし</rt></ruby>のです。",
    "sentence_vi": "Cái này cũng là của tôi.",
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
    "id": 7,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>の<ruby>父<rt>ちち</rt></ruby>（　）<ruby>医者<rt>いしゃ</rt></ruby>です。",
    "sentence_vi": "Bố tôi là bác sĩ.",
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
    "id": 101,
    "sentence_html": "<ruby>何<rt>なん</rt></ruby>（　）<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。",
    "sentence_vi": "Bạn đi Tokyo bằng gì?",
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
    "id": 192,
    "sentence_html": "<ruby>午後<rt>ごご</rt></ruby>から<ruby>雨<rt>あめ</rt></ruby>（　）なりました。",
    "sentence_vi": "Từ chiều trời đã chuyển mưa.",
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
    "id": 56,
    "sentence_html": "<ruby>庭<rt>にわ</rt></ruby>（　）<ruby>花<rt>はな</rt></ruby>があります。",
    "sentence_vi": "Trong vườn có hoa.",
    "options": [
      "に",
      "へ",
      "で"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や人が存在する場所を表します。",
    "explanation_vi": "「に」 biểu thị nơi tồn tại của người hoặc vật."
  },
  {
    "id": 102,
    "sentence_html": "スプーン（　）スープを<ruby>飲<rt>の</rt></ruby>みます。",
    "sentence_vi": "Tôi uống súp bằng thìa.",
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
    "id": 58,
    "sentence_html": "<ruby>部屋<rt>へや</rt></ruby>に<ruby>誰<rt>だれ</rt></ruby>（　）いますか。",
    "sentence_vi": "Trong phòng có ai vậy?",
    "options": [
      "で",
      "を",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 120,
    "sentence_html": "<ruby>大学<rt>だいがく</rt></ruby>（　）<ruby>資料<rt>しりょう</rt></ruby>をもらいます。",
    "sentence_vi": "Tôi nhận tài liệu từ trường đại học.",
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
    "id": 59,
    "sentence_html": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>（　）あります。",
    "sentence_vi": "Trên bàn có sách.",
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
    "id": 168,
    "sentence_html": "<ruby>車<rt>くるま</rt></ruby>（　）<ruby>降<rt>お</rt></ruby>ります。",
    "sentence_vi": "Tôi xuống xe ô tô.",
    "options": [
      "から",
      "で",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 143,
    "sentence_html": "<ruby>日本語<rt>にほんご</rt></ruby>（　）<ruby>少<rt>すこ</rt></ruby>しわかります。",
    "sentence_vi": "Tôi hiểu một chút tiếng Nhật.",
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
    "id": 40,
    "sentence_html": "<ruby>国<rt>くに</rt></ruby>（　）<ruby>帰<rt>かえ</rt></ruby>ります。",
    "sentence_vi": "Tôi về nước.",
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
    "id": 70,
    "sentence_html": "クリスマス（　）パーティーをします。",
    "sentence_vi": "Tôi sẽ tổ chức tiệc vào dịp Giáng sinh.",
    "options": [
      "に",
      "で",
      "から"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 178,
    "sentence_html": "お<ruby>茶<rt>ちゃ</rt></ruby>（　）いかがですか。",
    "sentence_vi": "Trà hay gì đó thì sao?",
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
    "id": 198,
    "sentence_html": "きれいな<ruby>花<rt>はな</rt></ruby>です（　）。",
    "sentence_vi": "Hoa đẹp nhỉ.",
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
    "id": 97,
    "sentence_html": "タクシー（　）うちへ<ruby>帰<rt>かえ</rt></ruby>ります。",
    "sentence_vi": "Tôi về nhà bằng taxi.",
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
    "id": 126,
    "sentence_html": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>（　）<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。",
    "sentence_vi": "Anh ấy cao hơn tôi.",
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
    "id": 5,
    "sentence_html": "<ruby>山田<rt>やまだ</rt></ruby>さん（　）<ruby>先生<rt>せんせい</rt></ruby>です。",
    "sentence_vi": "Anh Yamada là giáo viên.",
    "options": [
      "を",
      "が",
      "は"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 22,
    "sentence_html": "<ruby>母<rt>はは</rt></ruby>（　）<ruby>元気<rt>げんき</rt></ruby>です。",
    "sentence_vi": "Mẹ tôi cũng khỏe.",
    "options": [
      "へ",
      "が",
      "も"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 94,
    "sentence_html": "<ruby>同僚<rt>どうりょう</rt></ruby>（　）ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。",
    "sentence_vi": "Tôi ăn cơm cùng đồng nghiệp.",
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
    "id": 11,
    "sentence_html": "コンピューター（　）<ruby>本<rt>ほん</rt></ruby>です。",
    "sentence_vi": "Là sách về máy tính.",
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
    "id": 167,
    "sentence_html": "<ruby>学校<rt>がっこう</rt></ruby>（　）<ruby>卒業<rt>そつぎょう</rt></ruby>します。",
    "sentence_vi": "Tôi tốt nghiệp trường học.",
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
    "id": 109,
    "sentence_html": "<ruby>彼女<rt>かのじょ</rt></ruby>（　）<ruby>花<rt>はな</rt></ruby>をプレゼントします。",
    "sentence_vi": "Tôi tặng hoa cho cô ấy.",
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
    "id": 164,
    "sentence_html": "バス（　）<ruby>降<rt>お</rt></ruby>ります。",
    "sentence_vi": "Tôi xuống xe buýt.",
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
    "sentence_html": "<ruby>日曜日<rt>にちようび</rt></ruby>（　）<ruby>働<rt>はたら</rt></ruby>きます。",
    "sentence_vi": "Chủ nhật cũng làm việc.",
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
    "id": 194,
    "sentence_html": "<ruby>大変<rt>たいへん</rt></ruby>です（　）。",
    "sentence_vi": "Vất vả nhỉ.",
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
    "id": 154,
    "sentence_html": "<ruby>道<rt>みち</rt></ruby>（　）<ruby>渡<rt>わた</rt></ruby>ります。",
    "sentence_vi": "Tôi băng qua đường.",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 73,
    "sentence_html": "9<ruby>時<rt>じ</rt></ruby>（　）3<ruby>時<rt>じ</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>します。",
    "sentence_vi": "Tôi học từ 9 giờ đến 3 giờ.",
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
    "id": 185,
    "sentence_html": "テレーザちゃんは10<ruby>歳<rt>さい</rt></ruby>（　）なりました。",
    "sentence_vi": "Bé Teresa đã lên 10 tuổi.",
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
    "id": 103,
    "sentence_html": "<ruby>英語<rt>えいご</rt></ruby>（　）<ruby>話<rt>はな</rt></ruby>します。",
    "sentence_vi": "Tôi nói chuyện bằng tiếng Anh.",
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
    "id": 49,
    "sentence_html": "<ruby>部屋<rt>へや</rt></ruby>（　）<ruby>机<rt>つくえ</rt></ruby>があります。",
    "sentence_vi": "Trong phòng có cái bàn.",
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
    "id": 34,
    "sentence_html": "<ruby>日本<rt>にほん</rt></ruby>（　）<ruby>来<rt>き</rt></ruby>ました。",
    "sentence_vi": "Tôi đã đến Nhật Bản.",
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
    "id": 74,
    "sentence_html": "<ruby>大阪<rt>おおさか</rt></ruby>（　）<ruby>東京<rt>とうきょう</rt></ruby>まで<ruby>新幹線<rt>しんかんせん</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。",
    "sentence_vi": "Tôi đi từ Osaka đến Tokyo bằng tàu Shinkansen.",
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
    "id": 60,
    "sentence_html": "<ruby>犬<rt>いぬ</rt></ruby>（　）います。",
    "sentence_vi": "Có con chó.",
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
    "id": 160,
    "sentence_html": "<ruby>川<rt>かわ</rt></ruby>（　）<ruby>泳<rt>およ</rt></ruby>ぎます。",
    "sentence_vi": "Tôi bơi ở sông.",
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
    "id": 64,
    "sentence_html": "<ruby>用事<rt>ようじ</rt></ruby>（　）あります。",
    "sentence_vi": "Tôi có việc bận.",
    "options": [
      "で",
      "を",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 50,
    "sentence_html": "あそこ（　）<ruby>佐藤<rt>さとう</rt></ruby>さんがいます。",
    "sentence_vi": "Ở đằng kia có anh Sato.",
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
    "id": 25,
    "sentence_html": "ご<ruby>飯<rt>はん</rt></ruby>（　）<ruby>食<rt>た</rt></ruby>べます。",
    "sentence_vi": "Tôi ăn cơm.",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 169,
    "sentence_html": "スペイン<ruby>語<rt>ご</rt></ruby>を3か<ruby>月<rt>げつ</rt></ruby>（　）<ruby>勉強<rt>べんきょう</rt></ruby>しました。",
    "sentence_vi": "Tôi chỉ học tiếng Tây Ban Nha trong 3 tháng.",
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
    "id": 63,
    "sentence_html": "<ruby>約束<rt>やくそく</rt></ruby>（　）あります。",
    "sentence_vi": "Tôi có cuộc hẹn.",
    "options": [
      "で",
      "を",
      "が"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 37,
    "sentence_html": "<ruby>京都<rt>きょうと</rt></ruby>（　）<ruby>旅行<rt>りょこう</rt></ruby>します。",
    "sentence_vi": "Tôi đi du lịch đến Kyoto.",
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
    "id": 107,
    "sentence_html": "<ruby>先生<rt>せんせい</rt></ruby>（　）<ruby>教<rt>おし</rt></ruby>えます。",
    "sentence_vi": "Tôi dạy cho giáo viên (nhầm, giáo viên dạy tôi: 先生に教えられます hoặc 先生が教えます, ở đây là 'nói cho giáo viên biết').",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 106,
    "sentence_html": "<ruby>友達<rt>ともだち</rt></ruby>（　）<ruby>本<rt>ほん</rt></ruby>を<ruby>貸<rt>か</rt></ruby>します。",
    "sentence_vi": "Tôi cho bạn mượn sách.",
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
    "id": 195,
    "sentence_html": "おいしいです（　）。",
    "sentence_vi": "Ngon nhỉ.",
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
    "id": 137,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>はイタリア<ruby>料理<rt>りょうり</rt></ruby>（　）<ruby>好<rt>す</rt></ruby>きです。",
    "sentence_vi": "Tôi thích món ăn Ý.",
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
    "id": 151,
    "sentence_html": "カメラ（　）ほしいです。",
    "sentence_vi": "Tôi muốn có máy ảnh.",
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
    "id": 15,
    "sentence_html": "<ruby>佐藤<rt>さとう</rt></ruby>さん（　）カメラです。",
    "sentence_vi": "Là máy ảnh của anh Sato.",
    "options": [
      "に",
      "の",
      "を"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 157,
    "sentence_html": "<ruby>空<rt>そら</rt></ruby>（　）<ruby>飛<rt>と</rt></ruby>びます。",
    "sentence_vi": "Chim bay trên trời.",
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
    "id": 153,
    "sentence_html": "<ruby>公園<rt>こうえん</rt></ruby>（　）<ruby>散歩<rt>さんぽ</rt></ruby>します。",
    "sentence_vi": "Tôi đi dạo trong công viên.",
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
    "id": 172,
    "sentence_html": "100<ruby>円<rt>えん</rt></ruby>（　）あります。",
    "sentence_vi": "Tôi chỉ có 100 yên.",
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
    "id": 92,
    "sentence_html": "<ruby>誰<rt>だれ</rt></ruby>（　）<ruby>行<rt>い</rt></ruby>きますか。",
    "sentence_vi": "Bạn đi với ai?",
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
    "id": 163,
    "sentence_html": "うち（　）<ruby>出<rt>で</rt></ruby>ます。",
    "sentence_vi": "Tôi ra khỏi nhà.",
    "options": [
      "から",
      "で",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 30,
    "sentence_html": "<ruby>音楽<rt>おんがく</rt></ruby>（　）<ruby>聞<rt>き</rt></ruby>きます。",
    "sentence_vi": "Tôi nghe nhạc.",
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
    "id": 179,
    "sentence_html": "コーヒー（　）<ruby>飲<rt>の</rt></ruby>みましょう。",
    "sentence_vi": "Chúng ta uống cà phê hay gì đó nhé.",
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
    "id": 39,
    "sentence_html": "あした、<ruby>東京<rt>とうきょう</rt></ruby>（　）<ruby>行<rt>い</rt></ruby>きます。",
    "sentence_vi": "Ngày mai, tôi sẽ đi Tokyo.",
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
    "id": 61,
    "sentence_html": "<ruby>時間<rt>じかん</rt></ruby>（　）ありません。",
    "sentence_vi": "Không có thời gian.",
    "options": [
      "で",
      "が",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は存在の主体を表します。",
    "explanation_vi": "「が」 biểu thị chủ thể của sự tồn tại."
  },
  {
    "id": 46,
    "sentence_html": "どこ（　）<ruby>買<rt>か</rt></ruby>いましたか。",
    "sentence_vi": "Bạn đã mua ở đâu?",
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
    "id": 158,
    "sentence_html": "<ruby>角<rt>かど</rt></ruby>（　）<ruby>曲<rt>ま</rt></ruby>がってください。",
    "sentence_vi": "Hãy rẽ ở góc đường.",
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
    "id": 29,
    "sentence_html": "<ruby>手紙<rt>てがみ</rt></ruby>（　）<ruby>書<rt>か</rt></ruby>きます。",
    "sentence_vi": "Tôi viết thư.",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は動作の目的語を表します。",
    "explanation_vi": "「を」 biểu thị đối tượng của hành động."
  },
  {
    "id": 121,
    "sentence_html": "<ruby>北海道<rt>ほっかいどう</rt></ruby>は<ruby>九州<rt>きゅうしゅう</rt></ruby>（　）<ruby>大<rt>おお</rt></ruby>きいです。",
    "sentence_vi": "Hokkaido lớn hơn Kyushu.",
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
    "id": 141,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>は<ruby>歌<rt>うた</rt></ruby>（　）<ruby>下手<rt>へた</rt></ruby>です。",
    "sentence_vi": "Tôi hát kém.",
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
    "id": 180,
    "sentence_html": "<ruby>映画<rt>えいが</rt></ruby>（　）<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>きませんか。",
    "sentence_vi": "Đi xem phim hay gì đó không?",
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
    "id": 115,
    "sentence_html": "<ruby>銀行<rt>ぎんこう</rt></ruby>（　）お<ruby>金<rt>かね</rt></ruby>を<ruby>借<rt>か</rt></ruby>ります。",
    "sentence_vi": "Tôi mượn tiền từ ngân hàng.",
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
    "id": 41,
    "sentence_html": "<ruby>駅<rt>えき</rt></ruby>（　）<ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>買<rt>か</rt></ruby>います。",
    "sentence_vi": "Tôi mua báo ở nhà ga.",
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
    "id": 171,
    "sentence_html": "<ruby>休<rt>やす</rt></ruby>みは<ruby>日曜日<rt>にちようび</rt></ruby>（　）です。",
    "sentence_vi": "Ngày nghỉ chỉ có Chủ nhật.",
    "options": [
      "だけ",
      "から",
      "しか"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 82,
    "sentence_html": "パン（　）<ruby>卵<rt>たまご</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。",
    "sentence_vi": "Tôi ăn bánh mì và trứng.",
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
    "id": 200,
    "sentence_html": "おもしろいです（　）。",
    "sentence_vi": "Thú vị nhỉ.",
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
    "id": 52,
    "sentence_html": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>（　）<ruby>猫<rt>ねこ</rt></ruby>がいます。",
    "sentence_vi": "Dưới gầm bàn có con mèo.",
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
    "id": 125,
    "sentence_html": "<ruby>英語<rt>えいご</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>（　）<ruby>簡単<rt>かんたん</rt></ruby>ですか。",
    "sentence_vi": "Tiếng Anh có dễ hơn tiếng Nhật không?",
    "options": [
      "より",
      "で",
      "から"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 18,
    "sentence_html": "あの<ruby>人<rt>ひと</rt></ruby>（　）<ruby>日本人<rt>にほんじん</rt></ruby>ですか。",
    "sentence_vi": "Người kia cũng là người Nhật à?",
    "options": [
      "へ",
      "が",
      "も"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 117,
    "sentence_html": "<ruby>誰<rt>だれ</rt></ruby>（　）その<ruby>話<rt>はな</rt></ruby>を<ruby>聞<rt>き</rt></ruby>ましたか。",
    "sentence_vi": "Bạn đã nghe chuyện đó từ ai?",
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
    "id": 188,
    "sentence_html": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>（　）なりました。",
    "sentence_vi": "Tiếng Nhật đã trở nên giỏi hơn.",
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
    "id": 133,
    "sentence_html": "1<ruby>年<rt>ねん</rt></ruby>（　）いつが<ruby>一番<rt>いちばん</rt></ruby><ruby>暑<rt>あつ</rt></ruby>いですか。",
    "sentence_vi": "Trong một năm, khi nào nóng nhất?",
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
    "id": 181,
    "sentence_html": "お<ruby>菓子<rt>かし</rt></ruby>（　）<ruby>食<rt>た</rt></ruby>べましょうか。",
    "sentence_vi": "Chúng ta ăn bánh kẹo hay gì đó nhé?",
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
    "id": 190,
    "sentence_html": "きれい（　）なりましたね。",
    "sentence_vi": "Bạn đã trở nên xinh đẹp nhỉ.",
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
    "id": 66,
    "sentence_html": "<ruby>日曜日<rt>にちようび</rt></ruby>（　）<ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
    "sentence_vi": "Tôi đã đến Nhật Bản vào Chủ nhật.",
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
    "id": 183,
    "sentence_html": "<ruby>散歩<rt>さんぽ</rt></ruby>（　）しませんか。",
    "sentence_vi": "Đi dạo hay gì đó không?",
    "options": [
      "でも",
      "や",
      "と"
    ],
    "answer": "でも",
    "explanation_ja": "「でも」は例示（～などを提案する）を表します。",
    "explanation_vi": "「でも」 dùng để đưa ra ví dụ (chẳng hạn như)."
  },
  {
    "id": 108,
    "sentence_html": "<ruby>家族<rt>かぞく</rt></ruby>（　）<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ります。",
    "sentence_vi": "Tôi gửi thư cho gia đình.",
    "options": [
      "に",
      "で",
      "を"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 8,
    "sentence_html": "<ruby>明日<rt>あした</rt></ruby>（　）<ruby>月曜日<rt>げつようび</rt></ruby>です。",
    "sentence_vi": "Ngày mai là thứ Hai.",
    "options": [
      "が",
      "は",
      "を"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 130,
    "sentence_html": "<ruby>果物<rt>くだもの</rt></ruby>（　）<ruby>何<rt>なに</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きですか。",
    "sentence_vi": "Trong các loại hoa quả, bạn thích quả nào nhất?",
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
    "id": 166,
    "sentence_html": "<ruby>部屋<rt>へや</rt></ruby>（　）<ruby>出<rt>で</rt></ruby>てください。",
    "sentence_vi": "Xin hãy ra khỏi phòng.",
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
    "id": 100,
    "sentence_html": "<ruby>自転車<rt>じてんしゃ</rt></ruby>（　）<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",
    "sentence_vi": "Tôi đi học bằng xe đạp.",
    "options": [
      "に",
      "を",
      "で"
    ],
    "answer": "で",
    "explanation_ja": "「で」は手段、道具、方法を表します。",
    "explanation_vi": "「で」 biểu thị phương tiện, công cụ, cách thức (bằng)."
  },
  {
    "id": 27,
    "sentence_html": "<ruby>本<rt>ほん</rt></ruby>（　）<ruby>読<rt>よ</rt></ruby>みます。",
    "sentence_vi": "Tôi đọc sách.",
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
    "id": 89,
    "sentence_html": "<ruby>家族<rt>かぞく</rt></ruby>（　）<ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
    "sentence_vi": "Tôi đã đến Nhật Bản cùng gia đình.",
    "options": [
      "に",
      "と",
      "へ"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 51,
    "sentence_html": "ロビー（　）<ruby>犬<rt>いぬ</rt></ruby>がいます。",
    "sentence_vi": "Ở sảnh có con chó.",
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
    "id": 84,
    "sentence_html": "<ruby>銀行<rt>ぎんこう</rt></ruby>（　）<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>はあそこです。",
    "sentence_vi": "Ngân hàng và bưu điện ở đằng kia.",
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
    "id": 123,
    "sentence_html": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>（　）<ruby>暑<rt>あつ</rt></ruby>いです。",
    "sentence_vi": "Hôm nay nóng hơn hôm qua.",
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
    "id": 142,
    "sentence_html": "<ruby>漢字<rt>かんじ</rt></ruby>（　）わかりますか。",
    "sentence_vi": "Bạn có hiểu chữ Hán không?",
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
    "id": 170,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>（　）<ruby>行<rt>い</rt></ruby>きます。",
    "sentence_vi": "Chỉ có tôi đi.",
    "options": [
      "から",
      "しか",
      "だけ"
    ],
    "answer": "だけ",
    "explanation_ja": "「だけ」は「それ以外にはない」（限定）を表します。",
    "explanation_vi": "「だけ」 biểu thị sự giới hạn (chỉ)."
  },
  {
    "id": 42,
    "sentence_html": "レストラン（　）<ruby>食事<rt>しょくじ</rt></ruby>します。",
    "sentence_vi": "Tôi dùng bữa ở nhà hàng.",
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
    "id": 48,
    "sentence_html": "うち（　）<ruby>宿題<rt>しゅくだい</rt></ruby>をします。",
    "sentence_vi": "Tôi làm bài tập về nhà ở nhà.",
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
    "id": 149,
    "sentence_html": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>靴<rt>くつ</rt></ruby>（　）ほしいです。",
    "sentence_vi": "Tôi muốn có đôi giày mới.",
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
    "id": 132,
    "sentence_html": "<ruby>世界<rt>せかい</rt></ruby>（　）どこが<ruby>一番<rt>いちばん</rt></ruby>きれいですか。",
    "sentence_vi": "Trên thế giới, nơi nào đẹp nhất?",
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
    "id": 116,
    "sentence_html": "<ruby>先生<rt>せんせい</rt></ruby>（　）<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>習<rt>なら</rt></ruby>います。",
    "sentence_vi": "Tôi học tiếng Nhật từ giáo viên.",
    "options": [
      "まで",
      "へ",
      "から"
    ],
    "answer": "から",
    "explanation_ja": "「から」（または「に」）は物の出どころ（誰からもらうか）を表します。",
    "explanation_vi": "「から」 biểu thị xuất xứ của đồ vật (nhận từ ai)."
  },
  {
    "id": 111,
    "sentence_html": "<ruby>母<rt>はは</rt></ruby>（　）<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ります。",
    "sentence_vi": "Tôi gửi bưu kiện cho mẹ.",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "に",
    "explanation_ja": "「に」は物や動作の受け手（相手）を表します。",
    "explanation_vi": "「に」 biểu thị đối tượng nhận hành động hoặc đồ vật (cho ai)."
  },
  {
    "id": 182,
    "sentence_html": "<ruby>週末<rt>しゅうまつ</rt></ruby>、どこか（　）<ruby>行<rt>い</rt></ruby>きませんか。",
    "sentence_vi": "Cuối tuần, đi đâu đó không?",
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
    "id": 144,
    "sentence_html": "どんな<ruby>映画<rt>えいが</rt></ruby>（　）<ruby>好<rt>す</rt></ruby>きですか。",
    "sentence_vi": "Bạn thích loại phim nào?",
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
    "id": 2,
    "sentence_html": "ミラーさん（　）<ruby>会社員<rt>かいしゃいん</rt></ruby>です。",
    "sentence_vi": "Anh Miller là nhân viên công ty.",
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
    "id": 81,
    "sentence_html": "<ruby>休<rt>やす</rt></ruby>みは<ruby>土曜日<rt>どようび</rt></ruby>（　）<ruby>日曜日<rt>にちようび</rt></ruby>です。",
    "sentence_vi": "Ngày nghỉ là thứ Bảy và Chủ nhật.",
    "options": [
      "も",
      "と",
      "や"
    ],
    "answer": "と",
    "explanation_ja": "「と」は名詞を並列してつなぎます。",
    "explanation_vi": "「と」 dùng để nối các danh từ (và)."
  },
  {
    "id": 45,
    "sentence_html": "<ruby>学校<rt>がっこう</rt></ruby>（　）<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。",
    "sentence_vi": "Tôi học tiếng Nhật ở trường.",
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
    "id": 138,
    "sentence_html": "<ruby>妻<rt>つま</rt></ruby>は<ruby>花<rt>はな</rt></ruby>（　）<ruby>好<rt>す</rt></ruby>きです。",
    "sentence_vi": "Vợ tôi thích hoa.",
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
    "id": 184,
    "sentence_html": "ジュース（　）どうですか。",
    "sentence_vi": "Nước hoa quả hay gì đó thì thế nào?",
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
    "id": 88,
    "sentence_html": "ビール（　）ワインを<ruby>飲<rt>の</rt></ruby>みます。",
    "sentence_vi": "Tôi uống bia và rượu vang.",
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
    "id": 134,
    "sentence_html": "<ruby>家族<rt>かぞく</rt></ruby>（　）<ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>歌<rt>うた</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですか。",
    "sentence_vi": "Trong gia đình, ai hát hay nhất?",
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
    "id": 6,
    "sentence_html": "あの<ruby>人<rt>ひと</rt></ruby>（　）<ruby>誰<rt>だれ</rt></ruby>ですか。",
    "sentence_vi": "Người kia là ai?",
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
    "id": 90,
    "sentence_html": "<ruby>友達<rt>ともだち</rt></ruby>（　）<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。",
    "sentence_vi": "Tôi xem phim cùng bạn bè.",
    "options": [
      "に",
      "と",
      "へ"
    ],
    "answer": "と",
    "explanation_ja": "「と」は行為を共にする相手を表します。",
    "explanation_vi": "「と」 biểu thị đối tượng cùng làm hành động (với)."
  },
  {
    "id": 150,
    "sentence_html": "<ruby>時間<rt>じかん</rt></ruby>（　）ほしいです。",
    "sentence_vi": "Tôi muốn có thời gian.",
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
    "id": 28,
    "sentence_html": "<ruby>映画<rt>えいが</rt></ruby>（　）<ruby>見<rt>み</rt></ruby>ます。",
    "sentence_vi": "Tôi xem phim.",
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
    "id": 32,
    "sentence_html": "<ruby>日本語<rt>にほんご</rt></ruby>（　）<ruby>勉強<rt>べんきょう</rt></ruby>します。",
    "sentence_vi": "Tôi học tiếng Nhật.",
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
    "id": 38,
    "sentence_html": "どこ（　）も<ruby>行<rt>い</rt></ruby>きません。",
    "sentence_vi": "Tôi không đi đâu cả.",
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
    "id": 1,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>（　）<ruby>学生<rt>がくせい</rt></ruby>です。",
    "sentence_vi": "Tôi là học sinh.",
    "options": [
      "を",
      "が",
      "は"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 83,
    "sentence_html": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>（　）ペンがあります。",
    "sentence_vi": "Trên bàn có sách và bút.",
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
    "id": 75,
    "sentence_html": "<ruby>会議<rt>かいぎ</rt></ruby>は10<ruby>時<rt>じ</rt></ruby>（　）です。",
    "sentence_vi": "Cuộc họp bắt đầu từ 10 giờ.",
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
    "id": 17,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>（　）<ruby>学生<rt>がくせい</rt></ruby>です。",
    "sentence_vi": "Tôi cũng là học sinh.",
    "options": [
      "が",
      "も",
      "へ"
    ],
    "answer": "も",
    "explanation_ja": "「も」は並立（～もまた）を表します。",
    "explanation_vi": "「も」 biểu thị sự tương tự (cũng)."
  },
  {
    "id": 14,
    "sentence_html": "<ruby>大学<rt>だいがく</rt></ruby>（　）<ruby>先生<rt>せんせい</rt></ruby>です。",
    "sentence_vi": "Là giáo viên của trường đại học.",
    "options": [
      "に",
      "の",
      "を"
    ],
    "answer": "の",
    "explanation_ja": "「の」は所属や所有を表します。",
    "explanation_vi": "「の」 biểu thị sự sở hữu hoặc thuộc về (của)."
  },
  {
    "id": 68,
    "sentence_html": "<ruby>何時<rt>なんじ</rt></ruby>（　）<ruby>終<rt>お</rt></ruby>わりますか。",
    "sentence_vi": "Mấy giờ thì kết thúc?",
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
    "id": 91,
    "sentence_html": "<ruby>彼<rt>かれ</rt></ruby>（　）<ruby>結婚<rt>けっこん</rt></ruby>します。",
    "sentence_vi": "Tôi sẽ kết hôn với anh ấy.",
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
    "id": 26,
    "sentence_html": "<ruby>水<rt>みず</rt></ruby>（　）<ruby>飲<rt>の</rt></ruby>みます。",
    "sentence_vi": "Tôi uống nước.",
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
    "id": 87,
    "sentence_html": "<ruby>犬<rt>いぬ</rt></ruby>（　）<ruby>猫<rt>ねこ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。",
    "sentence_vi": "Tôi thích chó và mèo.",
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
    "id": 122,
    "sentence_html": "<ruby>車<rt>くるま</rt></ruby>は<ruby>自転車<rt>じてんしゃ</rt></ruby>（　）<ruby>速<rt>はや</rt></ruby>いです。",
    "sentence_vi": "Ô tô nhanh hơn xe đạp.",
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
    "id": 99,
    "sentence_html": "<ruby>日本語<rt>にほんご</rt></ruby>（　）<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きます。",
    "sentence_vi": "Tôi viết thư bằng tiếng Nhật.",
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
    "id": 161,
    "sentence_html": "<ruby>大学<rt>だいがく</rt></ruby>（　）<ruby>出<rt>で</rt></ruby>ます。",
    "sentence_vi": "Tôi ra khỏi trường đại học.",
    "options": [
      "から",
      "を",
      "で"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 4,
    "sentence_html": "<ruby>今日<rt>きょう</rt></ruby>（　）<ruby>休<rt>やす</rt></ruby>みです。",
    "sentence_vi": "Hôm nay là ngày nghỉ.",
    "options": [
      "が",
      "は",
      "を"
    ],
    "answer": "は",
    "explanation_ja": "「は」は主題を表します。",
    "explanation_vi": "「は」 biểu thị chủ đề của câu."
  },
  {
    "id": 36,
    "sentence_html": "スーパー（　）<ruby>行<rt>い</rt></ruby>きますか。",
    "sentence_vi": "Bạn có đi siêu thị không?",
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
    "id": 135,
    "sentence_html": "クラス（　）<ruby>山田<rt>やまだ</rt></ruby>さんが<ruby>一番<rt>いちばん</rt></ruby><ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。",
    "sentence_vi": "Trong lớp, anh Yamada cao nhất.",
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
    "id": 110,
    "sentence_html": "<ruby>誰<rt>だれ</rt></ruby>（　）<ruby>電話<rt>でんわ</rt></ruby>をかけますか。",
    "sentence_vi": "Bạn gọi điện thoại cho ai?",
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
    "id": 112,
    "sentence_html": "<ruby>弟<rt>おとうと</rt></ruby>（　）お<ruby>金<rt>かね</rt></ruby>を<ruby>貸<rt>か</rt></ruby>します。",
    "sentence_vi": "Tôi cho em trai mượn tiền.",
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
    "id": 77,
    "sentence_html": "ここ（　）<ruby>駅<rt>えき</rt></ruby>まで<ruby>遠<rt>とお</rt></ruby>いです。",
    "sentence_vi": "Từ đây đến nhà ga rất xa.",
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
    "id": 147,
    "sentence_html": "<ruby>車<rt>くるま</rt></ruby>（　）ほしいです。",
    "sentence_vi": "Tôi muốn có ô tô.",
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
    "id": 13,
    "sentence_html": "あなた（　）<ruby>鞄<rt>かばん</rt></ruby>はどれですか。",
    "sentence_vi": "Cặp của bạn là cái nào?",
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
    "id": 162,
    "sentence_html": "<ruby>電車<rt>でんしゃ</rt></ruby>（　）<ruby>降<rt>お</rt></ruby>ります。",
    "sentence_vi": "Tôi xuống tàu điện.",
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
    "id": 44,
    "sentence_html": "<ruby>公園<rt>こうえん</rt></ruby>（　）サッカーをします。",
    "sentence_vi": "Tôi chơi bóng đá ở công viên.",
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
    "id": 197,
    "sentence_html": "<ruby>寒<rt>さむ</rt></ruby>いです（　）。",
    "sentence_vi": "Lạnh nhỉ.",
    "options": [
      "ね",
      "よ",
      "か"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 33,
    "sentence_html": "<ruby>学校<rt>がっこう</rt></ruby>（　）<ruby>行<rt>い</rt></ruby>きます。",
    "sentence_vi": "Tôi đi đến trường.",
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
    "id": 65,
    "sentence_html": "<ruby>毎朝<rt>まいあさ</rt></ruby>6<ruby>時<rt>じ</rt></ruby>（　）<ruby>起<rt>お</rt></ruby>きます。",
    "sentence_vi": "Mỗi sáng tôi thức dậy lúc 6 giờ.",
    "options": [
      "に",
      "で",
      "から"
    ],
    "answer": "に",
    "explanation_ja": "「に」は動作が行われる時間を表します。",
    "explanation_vi": "「に」 biểu thị thời điểm xảy ra hành động."
  },
  {
    "id": 177,
    "sentence_html": "ちょっとビール（　）<ruby>飲<rt>の</rt></ruby>みませんか。",
    "sentence_vi": "Uống bia hay gì đó một chút không?",
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
    "id": 152,
    "sentence_html": "<ruby>友達<rt>ともだち</rt></ruby>（　）ほしいです。",
    "sentence_vi": "Tôi muốn có bạn bè.",
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
    "id": 67,
    "sentence_html": "11<ruby>時半<rt>じはん</rt></ruby>（　）<ruby>寝<rt>ね</rt></ruby>ます。",
    "sentence_vi": "Tôi đi ngủ lúc 11 giờ rưỡi.",
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
    "id": 128,
    "sentence_html": "<ruby>新幹線<rt>しんかんせん</rt></ruby>は<ruby>飛行機<rt>ひこうき</rt></ruby>（　）<ruby>安<rt>やす</rt></ruby>いです。",
    "sentence_vi": "Tàu Shinkansen rẻ hơn máy bay.",
    "options": [
      "より",
      "で",
      "から"
    ],
    "answer": "より",
    "explanation_ja": "「より」は比較の基準を表します。",
    "explanation_vi": "「より」 dùng trong câu so sánh (hơn)."
  },
  {
    "id": 136,
    "sentence_html": "<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>（　）コーヒーが<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きです。",
    "sentence_vi": "Trong các loại đồ uống, tôi thích cà phê nhất.",
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
    "id": 191,
    "sentence_html": "<ruby>部長<rt>ぶちょう</rt></ruby>（　）なりました。",
    "sentence_vi": "Đã trở thành trưởng phòng.",
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
    "id": 9,
    "sentence_html": "これ（　）<ruby>私<rt>わたし</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>です。",
    "sentence_vi": "Của này là ô của tôi.",
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
    "id": 165,
    "sentence_html": "<ruby>会社<rt>かいしゃ</rt></ruby>（　）<ruby>辞<rt>や</rt></ruby>めます。",
    "sentence_vi": "Tôi nghỉ việc ở công ty.",
    "options": [
      "から",
      "で",
      "を"
    ],
    "answer": "を",
    "explanation_ja": "「を」は離れる場所（出発点）を表します。",
    "explanation_vi": "「を」 biểu thị nơi rời khỏi."
  },
  {
    "id": 193,
    "sentence_html": "<ruby>今日<rt>きょう</rt></ruby>はいい<ruby>天気<rt>てんき</rt></ruby>ですね。……ええ、そうですね。",
    "sentence_vi": "Hôm nay thời tiết đẹp nhỉ. ...Vâng, đúng vậy.",
    "options": [
      "ね",
      "よ",
      "か"
    ],
    "answer": "ね",
    "explanation_ja": "「ね」は相手に同意を求めたり、共感を表したりします。",
    "explanation_vi": "「ね」 dùng để tìm kiếm sự đồng tình hoặc thể hiện sự đồng cảm (nhỉ)."
  },
  {
    "id": 155,
    "sentence_html": "<ruby>橋<rt>はし</rt></ruby>（　）<ruby>渡<rt>わた</rt></ruby>ります。",
    "sentence_vi": "Tôi đi qua cầu.",
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
    "id": 54,
    "sentence_html": "<ruby>公園<rt>こうえん</rt></ruby>（　）<ruby>木<rt>き</rt></ruby>があります。",
    "sentence_vi": "Ở công viên có cây.",
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
    "id": 156,
    "sentence_html": "<ruby>交差点<rt>こうさてん</rt></ruby>（　）<ruby>右<rt>みぎ</rt></ruby>へ<ruby>曲<rt>ま</rt></ruby>がります。",
    "sentence_vi": "Tôi rẽ phải ở ngã tư.",
    "options": [
      "で",
      "を",
      "に"
    ],
    "answer": "を",
    "explanation_ja": "「を」は移動する場所（通過点）を表します。",
    "explanation_vi": "「を」 biểu thị địa điểm đi qua."
  },
  {
    "id": 145,
    "sentence_html": "<ruby>私<rt>わたし</rt></ruby>はパソコン（　）ほしいです。",
    "sentence_vi": "Tôi muốn có máy tính cá nhân.",
    "options": [
      "で",
      "が",
      "を"
    ],
    "answer": "が",
    "explanation_ja": "「が」は願望の対象（～がほしい）を表します。",
    "explanation_vi": "「が」 biểu thị đối tượng của sự mong muốn (muốn cái gì)."
  }
];