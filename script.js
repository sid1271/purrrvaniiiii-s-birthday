const FORM_ENDPOINT = "https://formspree.io/f/mnjgywkz"; 

const envelopeMessages = [
    "Okay, I'll admit it—getting to read a letter shouldn't be this complicated! But since you’ve successfully navigated my digital maze, I figured I’d start with the most important part: A very, very Happy Birthday to you, Cutie! ❤️",
    "I honestly can't believe how hectic college has been. Life has a way of throwing everything at once, doesn't it? But you pulled through, and here we are. I’m just glad I get to be 'with' you. 🥳",
    "I've really started to cherish our calls and those endless late-night talks. Even though we clearly have the most 'disturbed' sleep cycles, talking to you is the highlight of my day. 🥰",
    "For someone with such elite music taste, the pressure is on! Never stop sending me songs. I love discovering new music and knowing it’s 'ours' from the first note. 🎵❤️",
    "I never thought I’d be someone who looks forward to eating oats. But the love and care you pour into them makes it better than any fancy dish. 🥣✨",
    "I know you think your hair is a mess, but honestly? It’s one of my favorite things about you. Just trust my 10/10 vision on this one—you look incredible. 😌",
    "I honestly can’t wrap my head around how you’re so good at everything. I should’ve flooded you with sketchbooks to see even more of your art. Pink sketch pen is coming soon! 🤦‍♂️",
    "Seriously... tell me the secret to those biceps! I’m trying my best, and I’m still nowhere near your level. I'm your #1 fan. 💪",
    "I am not changing my wallpaper. If I swap it out, I lose my 'Certified Lover Boy' status. You really are my favorite view. ❤️",
    "It baffles me when anyone thinks you're 'mean'—they must be clueless. They haven’t seen the sweet, forgiving, and caring side of you that I see. 🥰",
    "I value the way you look out for me—making oats, listening to my 'faltu ki baatein,' or checking if I've eaten. I don't take it for granted. Best toh tum ho hi 😇",
    "Decree: Very Berry Sundae is our Sunday tradition. And it has zero calories because it's eaten with you. Science! 🍨❤️",
    "I act mad when you play games because I'm jealous I can't play that well! You're officially the pro, and I'm just your spectator. 🎮🔥",
    "You can handle spice because you're so sweet—it balances out. I can't handle it because I'm already hot-headed! Perfect balance. 🌶️🍦",
    "I might be a lazy koala, but I’m proud to be with a leopard who is smart, attractive, and the best in the game. I’ll happily hang on my branch while you conquer everything. 🐨🐆❤️",
    "I have the worst sleep control. Night hits and I start saying random things! Sikha do mujhe bhi, how do you stay so fresh? 😴🌙",
    "If you ever want to block me, DELETE that thought. I don't know the way to Room 307 via pigeon! Let's keep the digital lines open. 😂🕊️",
    "Princess toh tum ho. I feel like I do too little sometimes, but I'll keep increasing the effort. Log kya kahenge? Unse humein kya! ❤️",
    "Mala Marathi tar nahi yet, pan majhya feelings kontya hi bhashet tyaach rahtil. Tu jashi ahes, tashi ch raha... nehemi khush raha. Happy 19th Birthday, Princess! ❤️"
];

function switchScreen(oldId, newId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(newId).classList.add('active');
    if(newId === 'screen5') initMoonScroll();
}

function handleHeartClick() {
    switchScreen('screen1', 'screen2');
}

function goToCakeScreen() {
    switchScreen('screen2', 'screen-cake');
    const container = document.getElementById('candle-container');
    container.innerHTML = '';
    for(let i=0; i<19; i++) {
        const c = document.createElement('div');
        c.className = 'candle';
        container.appendChild(c);
    }
}

function blowCandles() {
    document.querySelectorAll('.candle').forEach(c => c.classList.add('out'));
    document.getElementById('blow-btn').classList.add('hidden');
    document.getElementById('cut-btn').classList.remove('hidden');
}

function cutCake() {
    document.getElementById('cake-main').classList.add('hidden');
    document.getElementById('cut-btn').classList.add('hidden');
    document.getElementById('cake-slice').classList.remove('hidden');
    document.getElementById('avatar-zone').classList.remove('hidden');
}

let sidFed = false;
function feedPerson(person) {
    if(person === 'siddhant') {
        document.getElementById('bubble-sid').classList.remove('hidden');
        sidFed = true;
    } else if(person === 'parvani' && sidFed) {
        document.getElementById('bubble-par').classList.remove('hidden');
        confetti({ particleCount: 150, spread: 70 });
        document.getElementById('to-letters-btn').classList.remove('hidden');
    }
}

function goToLetters() {
    switchScreen('screen-cake', 'screen3');
    const container = document.getElementById('letter-container');
    container.innerHTML = ''; 
    envelopeMessages.forEach((msg, i) => {
        setTimeout(() => {
            const letter = document.createElement('div');
            letter.className = 'letter-pop';
            letter.innerHTML = '💌';
            letter.onclick = () => openLetter(msg);
            container.appendChild(letter);
            if (i === envelopeMessages.length - 1) document.getElementById('quiz-trigger').classList.remove('hidden');
        }, i * 100);
    });
}

function openLetter(text) {
    const modal = document.getElementById('letter-modal');
    document.getElementById('modal-text').innerText = text;
    modal.classList.add('modal-active');
    modal.classList.remove('hidden');
}

function closeLetter() {
    const modal = document.getElementById('letter-modal');
    modal.classList.remove('modal-active');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function generateForm() {
    const formDiv = document.getElementById('form-content');
    const questions = [
        "First impression of me?", 
        "Our best late night talk topic?", 
        "One thing that always makes you smile about us?", 
        "Your favorite song I recommended?", 
        "Which city are we visiting first together?",
        "My most annoying but cute habit?",
        "Who is the better cook (be honest)?",
        "The moment you knew I was special?",
        "Favorite outfit of mine?",
        "A promise for our future?"
    ];
    formDiv.innerHTML = ''; 
    questions.forEach((q, i) => {
        formDiv.innerHTML += `<div class="form-group"><p>${i+1}. ${q}</p><input type="text" name="q${i+1}" required></div>`;
    });
}

function submitForm() {
    confetti({ particleCount: 150, spread: 70 });
    const form = document.getElementById('birthday-form');
    fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }});
    switchScreen('screen4', 'screen5');
}

function initMoonScroll() {
    const scrollTrigger = document.getElementById('moon-scroll-trigger');
    const moonShadow = document.querySelector('.moon-shadow');
    const moonImg = document.querySelector('.glowing-moon');
    const msgDisplay = document.getElementById('moon-message');
    const msgs = ["Every phase of you is beautiful...", "The way you grow and glow...", "Almost there, Parvani...", "My Forever Full Moon."];

    scrollTrigger.addEventListener('scroll', () => {
        let pct = scrollTrigger.scrollTop / (scrollTrigger.scrollHeight - scrollTrigger.clientHeight);
        moonShadow.style.transform = `translateX(${(pct * 210) - 100}%)`;
        msgDisplay.innerText = msgs[Math.min(Math.floor(pct * msgs.length), msgs.length - 1)];

        if (pct > 0.95) {
            moonShadow.style.display = 'none';
            moonImg.classList.add('glowing-moon-finale');
            document.getElementById('final-center-text').classList.remove('hidden');
            msgDisplay.style.opacity = '0';
        } else {
            moonShadow.style.display = 'block';
            moonImg.classList.remove('glowing-moon-finale');
            document.getElementById('final-center-text').classList.add('hidden');
            msgDisplay.style.opacity = '1';
        }
    });
}
