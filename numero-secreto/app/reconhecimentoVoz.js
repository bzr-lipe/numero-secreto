const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaSeOValorEValido(chute);
}

function exibeChute(prop) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <div class="box">${prop}</div>
    `
}