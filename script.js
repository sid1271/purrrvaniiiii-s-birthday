const FORM_ENDPOINT = "https://formspree.io/f/mnjgywkz"; 

const envelopeMessages = [
    "Okay, I'll admit it—getting to read a letter shouldn't be this complicated! But since you’ve successfully navigated my digital maze, I figured I’d start with the most important part: A very, very Happy Birthday to you, Cutie! Keep that beautiful smile on your face, and... read on. :) ❤️", 
    "I honestly can't believe how hectic college has been. Life has a way of throwing everything at us at once, doesn't it? But you pulled through, like you always do, and here we finally are. Even if it’s only virtually for now, I’m just glad I get to be 'with' you on your big day. 🥳", 
    "I honestly don’t know how we do it, but I’ve really started to cherish our calls and those endless late-night talks... [Rest of your letters here]",
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

// Navigation Flow
function goToBirthdayWish() { switchScreen('screen1', 'screen2'); }

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

function goToLetters() { switchScreen('screen-cake', 'screen3'); revealLetters(); }
function goToQuiz() { switchScreen('screen3', 'screen4'); generateForm(); }

// ... [Existing revealLetters, openLetter, generateForm, submitForm, and initMoonScroll functions]
