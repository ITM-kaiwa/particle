const app = {
    mode: null,
    currentUnit: null,
    currentSet: null,
    questions: [],
    currentQIndex: 0,
    score: 0,
    timer: 0,
    timerInterval: null,
    
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
        particleData.sort(() => 0.5 - Math.random());
        alert("問題をシャッフルしました！\nĐã trộn câu hỏi!");
    },
    
    showNormalModeMenu() {
        this.mode = 'normal';
        const unitButtons = document.getElementById('unit-buttons');
        unitButtons.innerHTML = '';
        
        for (let unit = 1; unit <= 2; unit++) {
            for (let set = 1; set <= 4; set++) {
                const btn = document.createElement('button');
                btn.className = 'menu-btn';
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
        
        const startIndex = ((unit - 1) * 100) + ((set - 1) * 25);
        this.questions = particleData.slice(startIndex, startIndex + 25);
        
        this.currentQIndex = 0;
        this.score = 0;
        document.getElementById('timer-text').classList.add('hidden');
        
        this.showScreen('practice');
        this.loadQuestion();
    },
    
    startTimeAttack() {
        this.mode = 'timeattack';
        
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
                this.endPractice();
            }
        }, 1000);
    },
    
    updateTimerText() {
        document.getElementById('timer-text').innerText = `残り: ${this.timer}秒`;
    },
    
    loadQuestion() {
        if(this.questions.length === 0) return;
        const q = this.questions[this.currentQIndex];
        
        document.getElementById('progress-text').innerText = `問題 ${this.currentQIndex + 1} / ${this.questions.length}`;
        
        const progressContainer = document.getElementById('jp-progress');
        progressContainer.innerHTML = '';
        this.questions.forEach((_, i) => {
            const dot = document.createElement("div");
            dot.className = "jp-dot";
            if (i < this.currentQIndex) dot.classList.add("jp-done");
            if (i === this.currentQIndex) dot.classList.add("jp-current");
            progressContainer.appendChild(dot);
        });

        const parts = q.sentence_html.split('（　）');
        const before = parts[0] || '';
        const after = parts.slice(1).join('（　）') || '';
        const blankHtml = `<span class="jp-blank" id="jp-blank"><span id="jp-blank-text"></span><span class="jp-seal-mark">正</span></span>`;
        
        document.getElementById('question-text').innerHTML = before + blankHtml + after;
        document.getElementById('question-text-vi').innerText = q.sentence_vi;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        const options = [...q.options].sort(() => 0.5 - Math.random());
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'jp-tile';
            btn.innerText = opt;
            btn.onclick = () => this.checkAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });
        
        document.getElementById('explanation-area').classList.add('hidden');
        document.getElementById('next-btn').classList.remove('jp-visible');
    },
    
    checkAnswer(selectedOpt, btnElement) {
        const buttons = document.querySelectorAll('.jp-tile');
        buttons.forEach(b => b.disabled = true);
        
        const q = this.questions[this.currentQIndex];
        const blank = document.getElementById('jp-blank');
        const blankText = document.getElementById('jp-blank-text');
        
        blankText.innerText = selectedOpt;
        
        if (selectedOpt === q.answer) {
            this.score++;
            blank.classList.add("jp-filled", "jp-correct");
        } else {
            blank.classList.add("jp-filled", "jp-incorrect");
            setTimeout(() => blank.classList.remove("jp-incorrect"), 320);
            
            buttons.forEach(b => {
                if (b.innerText === q.answer) {
                    b.style.borderColor = "var(--moss)";
                    b.style.color = "var(--moss)";
                    b.style.boxShadow = "none";
                }
            });
        }
        
        document.getElementById('exp-ja').innerText = q.explanation_ja;
        document.getElementById('exp-vi').innerText = q.explanation_vi;
        document.getElementById('explanation-area').classList.remove('hidden');
        
        if (this.mode === 'timeattack') {
            setTimeout(() => {
                this.nextQuestion();
            }, 800);
        } else {
            document.getElementById('next-btn').classList.add('jp-visible');
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
        
        document.getElementById('result-score').innerText = `${this.score} / ${this.questions.length}`;
        let pct = Math.round((this.score / this.questions.length) * 100);
        let msg = pct === 100 ? "パーフェクト!" : pct >= 70 ? "よくできました" : "もう一度復習しましょう";
        
        if (this.mode === 'timeattack' && this.timer <= 0) {
            msg = "タイムオーバー！\n" + msg;
        }
        
        document.getElementById('result-detail').innerText = msg;
        this.showScreen('result');
    }
};

// TTS Logic
app.playTTS = async function() {
    if(this.questions.length === 0) return;
    const q = this.questions[this.currentQIndex];
    
    const btn = document.getElementById('tts-btn');
    if (!btn) return;
    
    btn.disabled = true;
    const originalBg = btn.style.backgroundColor;
    
    let cleanText = q.sentence_html.replace(/<rt>.*?<\/rt>/g, '');
    cleanText = cleanText.replace(/<[^>]+>/g, '');
    cleanText = cleanText.replace(/（\s*）/g, ' ほにゃらら '); 
    
    try {
        btn.style.backgroundColor = '#0056b3'; // Darker blue for active state
        
        const audioUrl = `/api/tts?text=${encodeURIComponent(cleanText)}`;
        const audio = new Audio(audioUrl);
        
        await new Promise((resolve, reject) => {
            audio.onended = resolve;
            audio.onerror = reject;
            audio.play().catch(reject);
        });
        
    } catch (e) {
        console.warn("Python EdgeTTS API failed, falling back to standard Web Speech API", e);
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
