


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




function calculateworkinghours(he, me, se, hs, ms, ss) {
    if (he < 8 || hs > 18) {
        console.log("Horario não permitido!!!");
        return;
    }

    var enterinseconds = he * 3600 + me * 60 + se;
    var exitinseconds = hs * 3600 + ms * 60 + ss;

    var timeinseconds = exitinseconds - enterinseconds;

    var remainderhour = timeinseconds % 3600;
    var hours = (timeinseconds - remainderhour) / 3600;
    var remainderminutos = remainderhour % 60
    var minutos = (remainderhour - remainderminutos) / 60;

    console.log("Tempo de trabalhos: " + hours + ":" + minutos + ":" + remainderminutos);


}
calculateworkinghours(8, 35, 0, 16, 0, 30)


function drawrectangle(width, heigth) {
    var count = 0;
    for (let j = 0; j < heigth; j++) {
        var line = "";

        for (let i = 0; i < width; i++) {
            line += "*";
            count++;
        }
        console.log(line)
    }
    console.log(count)
}
drawrectangle(5, 3)




function drawrtriangle(heigth) {
    var count = 0;
    for (let j = 0; j <= heigth; j++) {
        var line = "";

        for (let i = 0; i < j; i++) {
            line += "*";
        }
        console.log(line)
    }
}
drawrtriangle(10)

