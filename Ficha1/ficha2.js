


function calcularimc(peso, altura) {
    var imc = peso / Math.pow(altura, 2);
    return imc;
}

var imc = calcularimc(81, 1.68);
console.log(imc);

function logIMC(peso, altura) {
    var imc = calcularIMC(peso, altura);
    if (imc < 18.5) {
        console.log("imc: " + "- Está abaixo do Peso!")
    }
    else if (imc >= 18.5 && imc < 25) {
        console.log("imc: " + "- Está no peso normal!")
    }
    else if (imc >= 25 && imc < 30) {
        console.log("imc: " + "- Está acima peso normal!")
    }
    else {
        console.log("IMC: " + "Está Obeso!");
    }
}



