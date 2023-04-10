function verificaSeOValorEValido(chute){
    const numero = +chute;
    const audio = new Audio ('./assets/open-new-level-143027.mp3')
    if(Number.isNaN(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }

    if(valorPassaLimites(numero)){
        console.log(`Valor Inválido, o valor deve estar entre ${menorValor} e ${maiorValor}`);
        elementoChute.innerHTML += `<div>Valor Inválido, o valor deve estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto) {
        document.getElementById('page-content').innerHTML=`
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
        audio.play();
    }else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O valor é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`;
    }else {
        elementoChute.innerHTML += `<div>O valor é menor <i class="fa-sharp fa-solid fa-arrow-up" style="transform: rotate(180deg)"></i></div>`
    }

    
}



function valorPassaLimites(numero){
    return numero > maiorValor || numero < menorValor
}