const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    exibeChute(e.results[0][0].transcript);
}

function exibeChute(prop) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <div class="box">${prop}</div>
    `
}