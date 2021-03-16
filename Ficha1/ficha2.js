


function calcularimc(peso, altura) {
    var imc = peso / Math.pow(altura, 2);
    return imc;
}

var imc = calcularimc(81, 1.68);
console.log(imc);