function verificaSeOValorEValido(chute){
    const numero = +chute;

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
        <div>O número secreto era ${numeroSecreto}</div>
        `
    }
}



function valorPassaLimites(numero){
    return numero > maiorValor || numero < menorValor
}