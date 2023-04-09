const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();

function gerarNumero (){
    return parseInt(Math.random()* maiorValor + 1);
}

console.log (numeroSecreto);

document.getElementById('menor-valor').innerHTML= menorValor;
document.getElementById('maior-valor').innerHTML= maiorValor;