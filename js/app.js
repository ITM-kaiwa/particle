
const app = {
    mode: null,
    currentUnit: null,
    currentSet: null,
    questions: [],
    currentQIndex: 0,
    score: 0,
    timer: 0,
    timerInterval: null,
    
    // Screens
    screens: {
        home: document.getElementById('home-screen'),
        normalMenu: document.getElementById('normal-menu-screen'),
        practice: document.getElementById('practice-screen'),
        result: document.getElementById('result-screen')
    },
    
    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
        this.screens[screenName].classList.add('active');
    },
    
    showHome() {
        this.showScreen('home');
    },

    shuffleAllQuestions() {
        // 全問題をランダムにシャッフルする
        particleData.sort(() => 0.5 - Math.random());
        alert("問題をシャッフルしました！\nĐã trộn câu hỏi!");
        // 通常練習モードのメニューを再描画する場合は必要に応じて
    },

    
    // 通常練習モード
    showNormalModeMenu() {
        this.mode = 'normal';
        const unitButtons = document.getElementById('unit-buttons');
        unitButtons.innerHTML = '';
        
        // 2 Units * 4 Sets
        for (let unit = 1; unit <= 2; unit++) {
            for (let set = 1; set <= 4; set++) {
                const btn = document.createElement('button');
                btn.innerHTML = `単位 ${unit} - セット ${set} <br><small>Đơn vị ${unit} - Bài ${set}</small>`;
                btn.onclick = () => this.startNormalPractice(unit, set);
                unitButtons.appendChild(btn);
            }
        }
        this.showScreen('normalMenu');
    },
    
    startNormalPractice(unit, set) {
        this.currentUnit = unit;
        this.currentSet = set;
        
        // data.jsから問題を抽出 (25問)
        const startIndex = ((unit - 1) * 100) + ((set - 1) * 25);
        this.questions = particleData.slice(startIndex, startIndex + 25);
        
        this.currentQIndex = 0;
        this.score = 0;
        document.getElementById('timer-text').classList.add('hidden');
        
        this.showScreen('practice');
        this.loadQuestion();
    },
    
    // タイムアタックモード
    startTimeAttack() {
        this.mode = 'timeattack';
        
        // ランダムに10問選ぶ
        const shuffled = [...particleData].sort(() => 0.5 - Math.random());
        this.questions = shuffled.slice(0, 10);
        
        this.currentQIndex = 0;
        this.score = 0;
        this.timer = 30;
        
        document.getElementById('timer-text').classList.remove('hidden');
        this.updateTimerText();
        
        this.showScreen('practice');
        this.loadQuestion();
        
        this.startTimer();
    },
    
    startTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.timer--;
            this.updateTimerText();
            if (this.timer <= 0) {
                clearInterval(this.timerInterval);
                this.endPractice(); // タイムオーバー
            }
        }, 1000);
    },
    
    updateTimerText() {
        document.getElementById('timer-text').innerText = `残り: ${this.timer}秒`;
    },
    
    loadQuestion() {
        if(this.questions.length === 0) return;
        const q = this.questions[this.currentQIndex];
        
        // ヘッダー更新
        document.getElementById('progress-text').innerText = `問題 ${this.currentQIndex + 1} / ${this.questions.length}`;
        
        // 問題文とマーク初期化
        document.getElementById('question-text').innerHTML = q.sentence_html;
        document.getElementById('question-text-vi').innerText = q.sentence_vi;
        const markArea = document.getElementById('mark-area');
        markArea.innerText = '';
        markArea.className = 'mark-area';
        markArea.innerHTML = '';
        
        // 選択肢生成
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => this.checkAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });
        
        // 解説非表示
        document.getElementById('explanation-area').classList.add('hidden');
        
        // 次の問題ボタンを非表示 (通常モード用)
        document.getElementById('next-btn').classList.add('hidden');
    },
    
    checkAnswer(selectedOpt, btnElement) {
        // 全ボタンを無効化
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);
        
        const q = this.questions[this.currentQIndex];
        const markArea = document.getElementById('mark-area');
        
        if (selectedOpt === q.answer) {
            // 正解
            this.score++;
            btnElement.classList.add('correct');
            // 丸の中にレの印
            markArea.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%; color:#4CAF50;"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>';
            markArea.classList.add('correct');
        } else {
            // 不正解
            btnElement.classList.add('wrong');
            markArea.innerText = '✖';
            markArea.style.color = '#F44336';
            markArea.classList.add('wrong');
            
            buttons.forEach(b => {
                if(b.innerText === q.answer) {
                    b.style.border = '2px solid #4CAF50';
                }
            });
        }
        
        // 解説表示
        document.getElementById('exp-ja').innerText = q.explanation_ja;
        document.getElementById('exp-vi').innerText = q.explanation_vi;
        document.getElementById('explanation-area').classList.remove('hidden');
        
        if (this.mode === 'timeattack') {
            // タイムアタックの場合、解説を読ませずにさっさと次へ行かせる(0.5秒後)
            setTimeout(() => {
                this.nextQuestion();
            }, 500);
        } else {
            // 通常モードは「次へ」ボタンを表示
            document.getElementById('next-btn').classList.remove('hidden');
        }
    },
    
    nextQuestion() {
        this.currentQIndex++;
        if (this.currentQIndex < this.questions.length) {
            this.loadQuestion();
        } else {
            this.endPractice();
        }
    },
    
    endPractice() {
        clearInterval(this.timerInterval);
        
        let resultText = `正解数: ${this.score} / ${this.questions.length}`;
        if (this.mode === 'timeattack' && this.timer <= 0) {
            resultText = `タイムオーバー！<br>` + resultText;
        }
        
        document.getElementById('result-score').innerHTML = resultText;
        this.showScreen('result');
    }
};



// TTS Logic
app.playTTS = async function() {
    if(this.questions.length === 0) return;
    const q = this.questions[this.currentQIndex];
    
    const btn = document.getElementById('tts-btn');
    if (!btn) return;
    
    // Disable button during playback to prevent overlapping
    btn.disabled = true;
    const originalBg = btn.style.backgroundColor;
    
    // Clean HTML for TTS
    let cleanText = q.sentence_html.replace(/<rt>.*?<\/rt>/g, '');
    cleanText = cleanText.replace(/<[^>]+>/g, '');
    cleanText = cleanText.replace(/（\s*）/g, ' ほにゃらら '); 
    
    try {
        btn.style.backgroundColor = '#007bff'; // EdgeTTS color (Blue)
        
        // Use Python API route for EdgeTTS
        const audioUrl = `/api/tts?text=${encodeURIComponent(cleanText)}`;
        const audio = new Audio(audioUrl);
        
        await new Promise((resolve, reject) => {
            audio.onended = resolve;
            audio.onerror = reject;
            audio.play().catch(reject);
        });
        
    } catch (e) {
        console.warn("Python EdgeTTS API failed, falling back to standard Web Speech API", e);
        // Fallback to standard TTS
        btn.style.backgroundColor = '#6c757d'; // Fallback color (Gray)
        
        if ('speechSynthesis' in window) {
            return new Promise((resolve) => {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(cleanText);
                utterance.lang = 'ja-JP';
                utterance.onend = resolve;
                utterance.onerror = resolve;
                window.speechSynthesis.speak(utterance);
            }).then(() => {
                btn.style.backgroundColor = originalBg;
                btn.disabled = false;
            });
        }
    }
    
    btn.style.backgroundColor = originalBg;
    btn.disabled = false;
};
