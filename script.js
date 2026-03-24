const FORM_ENDPOINT = "https://formspree.io/f/mnjgywkz"; 

const envelopeMessages = [
    "Okay, I'll admit it—getting to read a letter shouldn't be this complicated! But since you’ve successfully navigated my digital maze, I figured I’d start with the most important part: A very, very Happy Birthday to you, Cutie! Keep that beautiful smile on your face, and... read on. :) ❤️",
    "I honestly can't believe how hectic college has been. Life has a way of throwing everything at once, doesn't it? But you pulled through, like you always do, and here we finally are. Even if it’s only virtually for now, I’m just glad I get to be 'with' you on your big day. 🥳",
    "I honestly don’t know how we do it, but I’ve really started to cherish our calls and those endless late-night talks. Even though we clearly have the most 'disturbed' sleep cycles in the world, I’d say the conversations more than make up for the exhaustion. 🥰",
    "For someone with such elite music taste, I hope you know the pressure is on! Seriously, never stop sending me songs. There's nothing I'd love more than discovering a new song and knowing it’s 'ours' from the first note. 🎵❤️",
    "I honestly never thought I’d be someone who looks forward to eating oats. The love and care you pour into those yogurt and oats makes it better than any fancy dish I’ve ever tasted. Seriously, I’d choose it over anything else, simply because you made it. 🥣✨",
    "I know you’re always convinced your hair looks like a mess, but honestly? It’s one of my favourite things about you. Maybe those glasses of yours are currently sitting on a table instead of your face! 😂 Trust my 10/10 vision on this one. 😌",
    "I honestly can’t wrap my head around how you’re so incredibly good at everything you do. Looking back, I realize I made a huge mistake, I should’ve flooded you with sketchbooks so I could see even more of your art. 🤦‍♂️",
    "Okay, seriously... you have to tell me the secret to those biceps! I’m over here trying my best, and I’m still nowhere near your level. Steroids hai ki genetisss, jo bhi hai, it’s working. I'm your #1 fan. 💪",
    "Just so we’re clear, I am not changing my wallpaper. If I swap it out, I lose my official Certified Lover Boy status, right? That being said... I need an upgrade soon. You really are my favorite view. ❤️",
    "I really wish more people could see what I see. It honestly baffles me when anyone thinks you're 'mean'—they must be completely clueless. Not everybody has a heart like yours. 🥰",
    "I don’t think I can ever fully explain how much I value the way you look out for me. Whether it’s you making oats for me, or just listening to my faltu ki baatein, I feel so incredibly cared for. Best toh tum ho hi 😇",
    "Consider this a weekly staple: the Very Berry Sundae is officially our Sunday dessert tradition from now on. No negotiations! 🍨 And meals with you have exactly zero calories. ❤️",
    "I have a confession to make: Whenever I act like I’m 'mad' at you for playing games, it’s a total lie. I’m just secretly jealous because I can’t play half as well as you do. Keep winning spectator. 😙",
    "I’ve finally figured out your secret. The only reason you can handle so much spice is because you’re so naturally sweet, it just balances everything out perfectly. Meanwhile, I'm already a little too hot-headed! 🌶️🍦",
    "I might be a lazy, sleepy koala most of the time, but if there’s one thing I’m wide awake for, it’s being proud of you. I’m so lucky to be with a leopard who is as smart and attractive as you are. 🐨🐆❤️",
    "I honestly have the worst sleep control mechanism ever. As soon as nighttime hits, my brain apparently decides its work is done, and I start saying the most random things! Sikha do mujhe bhi? 😴🌙",
    "Look, if you ever feel the sudden urge to block me, DELETE kar do uss thought ko. Because I don't know the way to Room 307 by pigeon! So for the sake of my sanity, keep the lines open. 😂",
    "Dekho, Princess toh tum ho, isme koi doubt hi nahi hai. Aur rahi baat efforts ki, toh tum best hi deserve karti ho. Kabhi kabhi mujhe sach mein lagta hai ki main thoda kam hi kar raha hoon... Mere liye toh tum hi important ho :))))",
    "Mala Marathi tar nahi yet, pan majhya feelings kontya hi bhashet tyaach rahtil. Tu jashi ahes, tashi ch raha... nehemi khush raha. Honestly, I know one thing for sure: You’re the best. Happy 19th Birthday, Princess! ❤️"
];

function switchScreen(oldId, newId) {
    document.getElementById(oldId).classList.remove('active');
    document.getElementById(newId).classList.add('active');
    if (newId === 'screen5') initMoonScroll();
}

function goToBirthdayWish() { switchScreen('screen1', 'screen2'); }

function goToMapAnimation() {
    switchScreen('screen2', 'screen-map');
    const traveler = document.getElementById('traveler-emoji');
    const status = document.getElementById('map-status');
    
    setTimeout(() => {
        traveler.style.left = '85%';
        status.innerText = "Crossing the distance... ✈️";
        setTimeout(() => {
            status.innerText = "I'm finally here! ❤️";
            setTimeout(() => goToCakeScreen(), 1500);
        }, 3000);
    }, 500);
}

function goToCakeScreen() {
    switchScreen('screen-map', 'screen-cake');
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
    revealLetters(); 
}

function revealLetters() {
    const container = document.getElementById('letter-container');
    container.innerHTML = ''; 
    envelopeMessages.forEach((msg, i) => {
        setTimeout(() => {
            const letter = document.createElement('div');
            letter.className = 'letter-pop';
            letter.innerHTML = '💌';
            letter.onclick = () => openLetter(msg);
            container.appendChild(letter);
            if (i === envelopeMessages.length - 1) {
                document.getElementById('quiz-trigger').classList.remove('hidden');
            }
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

function goToQuiz() { switchScreen('screen3', 'screen4'); generateForm(); }

function generateForm() {
    const formDiv = document.getElementById('form-content');
    const questions = ["Favorite memory?", "First date?", "What you love about Bangalore?", "Favorite cat breed?", "Favorite thing about us?"];
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
    const finalCenter = document.getElementById('final-center-text');
    const moonMessages = ["Every phase of you is beautiful...", "The way you grow and glow...", "Almost there, Parvani...", "My Forever Full Moon."];

    scrollTrigger.addEventListener('scroll', () => {
        let scrollPercent = scrollTrigger.scrollTop / (scrollTrigger.scrollHeight - scrollTrigger.clientHeight);
        moonShadow.style.transform = `translateX(${(scrollPercent * 210) - 100}%)`;
        msgDisplay.innerText = moonMessages[Math.min(Math.floor(scrollPercent * moonMessages.length), moonMessages.length - 1)];

        if (scrollPercent > 0.95) {
            moonShadow.style.display = 'none';
            moonImg.classList.add('glowing-moon-finale');
            finalCenter.classList.remove('hidden');
            msgDisplay.style.opacity = '0';
        } else {
            moonShadow.style.display = 'block';
            moonImg.classList.remove('glowing-moon-finale');
            finalCenter.classList.add('hidden');
            msgDisplay.style.opacity = '1';
        }
    });
}
