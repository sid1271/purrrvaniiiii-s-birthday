const FORM_ENDPOINT = "https://formspree.io/f/mnjgywkz"; 

// --- 1. THE LETTERS (19 total) ---
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
    "Dekho, Princess toh tum ho, isme koi doubt hi nahi hai. Aur rahi baat efforts ki, toh tum best hi deserve karti ho. Kabhi kabhi mujhe sach mein lagta hai ki main thoda kam hi kar raha hoon... shayad mujhe apna 'pagalpan' wala quotient thoda aur badhana padega! Aur rahi baat ki 'log kya kahenge,' toh sach bolu toh logon se humein kya? 🥰",
    "Tu jashi aahes, tashich raha.... Happy Birthdayyyyyyyy 🥰❤️ (Abhi thodi thodi Marathi seekh raha hu toh bear with me please)"
];

// --- 2. THE NAVIGATION ---
function switchScreen(oldId, newId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const nextScreen = document.getElementById(newId);
    if (nextScreen) {
        nextScreen.classList.add('active');
        if(newId === 'screen5') initMoonScroll();
    }
}

function handleHeartClick() {
    switchScreen('screen1', 'screen2');
}

// --- 3. CAKE LOGIC ---
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

// --- 4. LETTERS REVEAL ---
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

// --- 5. QUIZ (FIXED TO 10 QUESTIONS) ---
function generateForm() {
    const formDiv = document.getElementById('form-content');
    const questions = [
        "If you wanted to have something tommorow what would it be?", 
        "Would you still have the Devil's pastry your mom got you?", 
        "Something you'd want me to cook for you when we're back?",
        "Your top 5 songs from the ones you gave me?🎵", 
        "What’s something you’ve done recently that made you feel proud of yourself? (Because I’m definitely proud of you)✨",
        "If you could relive one day exactly as it was, which one would it be?⏳",
        "What is something you really want to achieve this year?🧘‍♀️", 
        "What is a quality in yourself that you’ve started to appreciate more as you’ve gotten older?🌿",
        "Beyond everything else, what is one thing you never want to change about who you are?💎",
        "What’s one promise you want me to make to you today as you start this new year?"
    ];
    formDiv.innerHTML = ''; 
    questions.forEach((q, i) => {
        formDiv.innerHTML += `
            <div class="form-group">
                <p>${i+1}. ${q}</p>
                <input type="text" name="q${i+1}" required placeholder="Type your answer here...">
            </div>`;
    });
    // The special 11th "Surprise" Question
    formDiv.innerHTML += `
        <div class="form-group" style="margin-top: 40px; border-top: 1px dashed var(--accent-pink); padding-top: 20px;">
            <p style="color: var(--deep-pink); font-size: 1.1rem;">11. Bonus Question: Do you think you're my favorite person in the world? ❤️</p>
            <input type="text" name="q11" value="Yes, obviously! ❤️" readonly style="background: #fff0f3; cursor: not-allowed; border-color: var(--deep-pink); color: var(--deep-pink); font-weight: bold;">
            <p style="font-size: 0.8rem; color: #888; margin-top: 5px;">(This answer is non-negotiable! 😉)</p>
        </div>`;
}

function submitForm() {
    confetti({ particleCount: 150, spread: 70 });
    const form = document.getElementById('birthday-form');
    fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }});
    switchScreen('screen4', 'screen5');
}

// --- MOON MESSAGES ---
const moonMessages = [
    "Every phase of you is beautiful...",
    "The way you glow and grow...",
    "Almost there...",
    "My forever full moon."
];

function initMoonScroll() {
    const scrollTrigger = document.getElementById('moon-scroll-trigger');
    const moonShadow = document.querySelector('.moon-shadow');
    const moonImg = document.querySelector('.glowing-moon');
    const msgDisplay = document.getElementById('moon-message');
    const finalCenter = document.getElementById('final-center-text');
    const moonWrapper = document.querySelector('.moon-wrapper');

    if (!scrollTrigger) return;

    scrollTrigger.addEventListener('scroll', () => {
        let scrollPercent = scrollTrigger.scrollTop / (scrollTrigger.scrollHeight - scrollTrigger.clientHeight);
        
        // 1. Shadow Movement
        let shadowPos = (scrollPercent * 210) - 100;
        moonShadow.style.transform = `translateX(${shadowPos}%)`;

        // 2. Message Logic (Switches through your 4 messages)
        let msgIndex = Math.min(Math.floor(scrollPercent * moonMessages.length), moonMessages.length - 1);
        if (msgDisplay.innerText !== moonMessages[msgIndex]) {
            msgDisplay.innerText = moonMessages[msgIndex];
        }

        // 3. Zoom/Growth Effect
        let zoomScale = 1.1 + (scrollPercent * 0.3); // Moon grows from 1.1 to 1.4
        moonImg.style.transform = `scale(${zoomScale})`;

        // 4. Finale Transition
        if (scrollPercent > 0.95) {
            moonShadow.style.opacity = '0';
            moonImg.classList.add('glowing-moon-finale');
            moonWrapper.style.overflow = 'visible';
            finalCenter.classList.remove('hidden');
            msgDisplay.style.opacity = '0';
        } else {
            moonShadow.style.opacity = '1';
            moonImg.classList.remove('glowing-moon-finale');
            moonWrapper.style.overflow = 'hidden';
            finalCenter.classList.add('hidden');
            msgDisplay.style.opacity = '1';
        }
    });
}
