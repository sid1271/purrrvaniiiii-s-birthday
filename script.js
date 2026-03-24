const FORM_ENDPOINT = "https://formspree.io/f/mnjgywkz"; 

const envelopeMessages = [
    "Okay, I'll admit it—getting to read a letter shouldn't be this complicated! But since you’ve successfully navigated my digital maze, I figured I’d start with the most important part: A very, very Happy Birthday to you, Cutie! Keep that beautiful smile on your face, and... read on. :) ❤️", 
    "I honestly can't believe how hectic college has been. Life has a way of throwing everything at us at once, doesn't it? But you pulled through, like you always do, and here we finally are. Even if it’s only virtually for now, I’m just glad I get to be 'with' you on your big day. 🥳", 
    "I honestly don’t know how we do it, but I’ve really started to cherish our calls and those endless late-night talks. Even though we clearly have the most 'disturbed' sleep cycles in the world, I’d say the conversations more than make up for the exhaustion. Honestly, talking to you is the highlight of my day—it's the one thing that keeps me sane and genuinely happy. So, I’m giving all the credit to that sweet voice of yours. It makes me smile every single time. 🥰",
    "For someone with such elite music taste, I hope you know the pressure is on! Seriously, never stop sending me songs. I’m actually starting to get a little sad that I might run out of your recommendations soon, and I’m definitely not ready for that. But you can find a new song every other day so we can build our playlist together. There's nothing I'd love more than discovering a new song and knowing it’s 'ours' from the first note. Here’s to a lifetime of new music with you! 🎵❤️", 
    "I honestly never thought I’d be someone who looks forward to eating oats. The ones I had before were basically just sitting in the back of my cabinet for ages! But the love and care you pour into those yogurt and oats makes it better than any fancy dish I’ve ever tasted. Seriously, I’d choose it over anything else, simply because you made it. 🥣✨", 
    "I know you’re always convinced your hair looks like a mess, but honestly? It’s one of my favourite things about you, because parvani=favorite=everything_about_parvani=favorite (bohot funny joke btw) Maybe the reason you can’t see how amazing it looks is because those glasses of yours are currently sitting on a table instead of your face! 😂 But but but, even if you won't wear them to see it for yourself, just trust my 10/10 vision on this one because you look incredible 😌", 
    "I honestly can’t wrap my head around how you’re so incredibly good at everything you do. Looking back, I realize I made a huge mistake, I should’ve flooded you with sketchbooks so I could see even more of your art. And yes, I still need to get you that pink sketch pen! 🤦‍♂️ But consider it a 'to-be-continued' part of your gift.", 
    "Okay, seriously... you have to tell me the secret to those biceps! I’m over here trying my best, and I’m still nowhere near your level. Steroids hai ki genetisss, jo bhi hai, it’s working. I'm your #1 fan (and your most dedicated student). I guess I’ll just keep taking notes until I can finally catch up to you! 💪", 
    "Just so we’re clear, I am not changing my wallpaper. If I swap it out, I lose my official Certified Lover Boy status, right? And we can't have that. That being said... I need an upgrade soon. Consider this a formal request for some new favorites so I can keep my lock screen (and my heart) properly updated. You really are my favorite view. ❤️",
    "I really wish more people could see what I see. It honestly baffles me when anyone thinks you're 'mean'—they must be completely clueless. They clearly haven’t seen the side of you that I get to see every day, and I'm so lucky I get to experience it. Not everybody has a heart like yours. You are one of the most genuinely sweet, forgiving, and caring people I’ve ever known. I can’t even begin to tell you how much I appreciate that about you. 🥰",
    "I don’t think I can ever fully explain how much I value the way you look out for me. Whether it’s you making oats for me, or just listening to my faltu ki baatein, I feel so incredibly cared for. Just knowing you're constantly checking in to make sure I’ve eaten (and eaten healthy!) means the world to me. It’s those quiet, everyday moments where your love really shows, and I want you to know I don’t take a single one of them for granted. Best toh tum ho hi 😇", 
    "Consider this a weekly staple: the Very Berry Sundae is officially our Sunday dessert tradition from now on. No negotiations! 🍨 And ye cheat meal bilkul nahi hai, because according to my calculations, any meal had with you has exactly zero calories. I can’t wait for our future Sunday dates where the only thing sweeter than the sundae is the company. ❤️", 
    "I have a confession to make: Whenever I act like I’m 'mad' at you for playing games, it’s a total lie. The truth? I’m just secretly jealous because I can’t play half as well as you do. No matter how much I try or how many times I tell myself I’ll get better, I’ve accepted that I’ll never be on your level. Keep winning and I'll be your most impressed spectator. 😙", 
    "I’ve finally figured out your secret. The only reason you can handle so much spice is because you’re so naturally sweet, it just balances everything out perfectly. Meanwhile, I'm over here struggling with the heat because I'm already a little too hot-headed as it is! I guess that’s why we work so well together. 🌶️🍦", 
    "I might be a lazy, sleepy koala most of the time, but if there’s one thing I’m wide awake for, it’s being proud of you. I’m so lucky to be with a leopard who is as smart, attractive, and genuinely the best in the game as you are. Even if I'm just a sleepy koala hanging onto a branch, I know I’ve got the fastest, fiercest, and most impressive leopard by my side. I’ll happily be the lazy one as long as I get to watch you conquer everything you do. You’re truly one of a kind. 🐨🐆❤️",
    "I honestly have the worst sleep control mechanism ever. It’s a complete mystery to me how you manage to stay awake and sound so perfectly fresh. As soon as nighttime hits, my brain apparently decides its work is done, and I start saying the most random things! Sikha do mujhe bhi, kaise karti ho manage? I guess until I learn your secrets, you’ll just have to keep putting up with my sleepy, late-night rambling. Thank you for always being the wakeful one for both of us! 😴🌙", 
    "Look, if you ever feel the sudden urge to block me, I’m begging you, DELETE kar do uss thought ko. Mostly because I have absolutely zero experience in sending messages via pigeon, and I don't think kabhi hoga bhi. Even if I did somehow manage to train a bird, let’s be real, that poor pigeon would have no idea how to find its way to Room 307! Aur Alibag ka address toh pata hi nahi hai mujhe 😀. So for the sake of the birds (and my sanity), let’s just keep the digital lines open, okay? 😂", 
    "Dekho, Princess toh tum ho, isme koi doubt hi nahi hai. Aur rahi baat efforts ki, toh tum best hi deserve karti ho. Kabhi kabhi mujhe sach mein lagta hai ki main thoda kam hi kar raha hoon... shayad mujhe apna 'pagalpan' wala quotient thoda aur badhana padega! Aur rahi baat ki 'log kya kahenge,' toh sach bolu toh logon se humein kya? Woh thodi na mere liye itne pyaar se oats bana ke denge ya mera itna khayal rakhenge. Mere liye toh tum hi important ho :))))", 
    "Mala Marathi tar nahi yet, pan majhya feelings kontya hi bhashet tyaach rahtil. Tu jashi ahes, tashi ch raha... nehemi khush raha. Honestly, even if I don't know the language yet, I know one thing for sure: You’re the best. Happy 19th Birthday, Princess! ❤️"
];

const moonMessages = ["Every phase of you is beautiful...", "The way you grow and glow...", "Almost there, Parvani...", "My Forever Full Moon."];

function switchScreen(oldId, newId) {
    const oldScreen = document.getElementById(oldId);
    const newScreen = document.getElementById(newId);
    if (oldScreen && newScreen) {
        oldScreen.classList.remove('active');
        newScreen.classList.add('active');
        if (newId === 'screen5') initMoonScroll();
    }
}

// Cake Screen Logic
function goToCakeScreen() {
    switchScreen('screen1', 'screen-cake');
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
    setTimeout(() => document.getElementById('cut-btn').classList.remove('hidden'), 800);
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

function goToScreen2() { switchScreen('screen-cake', 'screen2'); }
function goToScreen3() { switchScreen('screen2', 'screen3'); revealLetters(); }
function goToScreen4() { switchScreen('screen3', 'screen4'); generateForm(); }

function revealLetters() {
    const container = document.getElementById('letter-container');
    container.innerHTML = ''; 
    for (let i = 0; i < envelopeMessages.length; i++) {
        setTimeout(() => {
            const letter = document.createElement('div');
            letter.className = 'letter-pop';
            letter.innerHTML = '💌';
            letter.onclick = () => openLetter(envelopeMessages[i]);
            container.appendChild(letter);
            if (i === envelopeMessages.length - 1) document.getElementById('quiz-trigger').classList.remove('hidden');
        }, i * 200); 
    }
}

function openLetter(text) {
    const modal = document.getElementById('letter-modal');
    document.getElementById('modal-text').innerText = text;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('modal-active'), 10);
}

function closeLetter() {
    const modal = document.getElementById('letter-modal');
    modal.classList.remove('modal-active');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function generateForm() {
    const formDiv = document.getElementById('form-content');
    const questions = [
        "What's my favorite memory of us?", "Where was our first date?", 
        "What's one thing you love about Bangalore?", "Your favorite cat breed?",
        "One thing you hate about me?", "One thing you love about me?", "Something you'd want me to change?", "What's the best thing about us?",
        "One promise you want from me?", "Your favorite physical attribute of mine?", "How much do you love me?"
    ];
    formDiv.innerHTML = ''; 
    questions.forEach((q, i) => {
        formDiv.innerHTML += `<div class="form-group"><p>${i+1}. ${q}</p><input type="text" name="question_${i+1}" required placeholder="Your answer..."></div>`;
    });
}

function submitForm() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
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
    const moonWrapper = document.querySelector('.moon-wrapper');

    scrollTrigger.addEventListener('scroll', () => {
        let scrollPercent = scrollTrigger.scrollTop / (scrollTrigger.scrollHeight - scrollTrigger.clientHeight);
        let shadowPos = (scrollPercent * 210) - 100;
        moonShadow.style.transform = `translateX(${shadowPos}%)`;
        let msgIndex = Math.min(Math.floor(scrollPercent * moonMessages.length), moonMessages.length - 1);
        msgDisplay.innerText = moonMessages[msgIndex];

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
