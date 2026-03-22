const FORM_ENDPOINT = "https://formspree.io/f/mnjgywkz"; 

const envelopeMessages = [
    "You are my favorite human.", "Happy 19th Birthday, Parvani!", "I love our late night talks.",
    "Message 4...", "Message 5...", "Message 6...", "Message 7...", "Message 8...", "Message 9...",
    "Message 10...", "Message 11...", "Message 12...", "Message 13...", "Message 14...", "Message 15...",
    "Message 16...", "Message 17...", "Message 18...", "Message 19..."
];

const moonMessages = [
    "Every phase of you is beautiful...",
    "The way you grow and glow...",
    "Almost there, Parvani...",
    "My Forever Full Moon."
];

function switchScreen(oldId, newId) {
    const oldScreen = document.getElementById(oldId);
    const newScreen = document.getElementById(newId);
    if (oldScreen && newScreen) {
        oldScreen.classList.remove('active');
        newScreen.classList.add('active');
        if (newId === 'screen5') initMoonScroll();
    }
}

function goToScreen2() { switchScreen('screen1', 'screen2'); }
function goToScreen3() { switchScreen('screen2', 'screen3'); revealLetters(); }
function goToScreen4() { switchScreen('screen3', 'screen4'); generateForm(); }

function revealLetters() {
    const container = document.getElementById('letter-container');
    container.innerHTML = ''; 
    for (let i = 0; i < 19; i++) {
        setTimeout(() => {
            const letter = document.createElement('div');
            letter.className = 'letter-pop';
            letter.innerHTML = '💌';
            letter.onclick = () => openLetter(envelopeMessages[i]);
            container.appendChild(letter);
            if (i === 18) document.getElementById('quiz-trigger').classList.remove('hidden');
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
        "Question 5...", "Question 6...", "Question 7...", "Question 8...",
        "Question 9...", "Question 10...", "Question 11...", "Question 12...",
        "Question 13...", "Question 14...", "Question 15..."
    ];
    formDiv.innerHTML = ''; 
    questions.forEach((q, i) => {
        formDiv.innerHTML += `<div class="form-group"><p>${i+1}. ${q}</p><input type="text" name="question_${i+1}" required placeholder="Your answer..."></div>`;
    });
}

function submitForm() {
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

    if (!scrollTrigger) return;

    scrollTrigger.addEventListener('scroll', () => {
        let scrollPercent = scrollTrigger.scrollTop / (scrollTrigger.scrollHeight - scrollTrigger.clientHeight);
        let shadowPos = (scrollPercent * 210) - 100;
        moonShadow.style.transform = `translateX(${shadowPos}%)`;

        let msgIndex = Math.min(Math.floor(scrollPercent * moonMessages.length), moonMessages.length - 1);
        if (msgDisplay.innerText !== moonMessages[msgIndex]) {
            msgDisplay.innerText = moonMessages[msgIndex];
        }

        if (scrollPercent > 0.95) {
            moonShadow.style.display = 'none';
            moonImg.classList.add('glowing-moon-finale');
            moonWrapper.style.overflow = 'visible';
            finalCenter.classList.remove('hidden');
            msgDisplay.style.opacity = '0';
        } else {
            moonShadow.style.display = 'block';
            moonImg.classList.remove('glowing-moon-finale');
            moonWrapper.style.overflow = 'hidden';
            finalCenter.classList.add('hidden');
            msgDisplay.style.opacity = '1';
        }
    });
}