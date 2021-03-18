


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


function drawbox(width, heigth) {
    for (let j = 0; j <= heigth; j++) {
        var line = "";

        for (let i = 0; i < width; i++) {

            if (j == 0 || j == heigth || i == 0 || i == width - 1) {
                line += "*";
            }
            else {
                line += " ";
            }
        }
        console.log(line)
    }
}
drawbox(10, 10)





// alinea 9 ======================================================================================





var student1 = { firstname: "pedro", lastname: "Marques", age: 25, grade: 16.5 };
var student2 = { firstname: "david", lastname: "tiago", age: 28, grade: 15.5 };
var student3 = { firstname: "joao", lastname: "luis", age: 23, grade: 18.5 };
var student4 = { firstname: "marco", lastname: "santos", age: 16, grade: 12 };
var student5 = { firstname: "sofia", lastname: "bond", age: 76, grade: 13.5 };
var student6 = { firstname: "ana", lastname: "freitas", age: 23, grade: 13 };
var student7 = { firstname: "joana", lastname: "sol", age: 21, grade: 19.5 };
var student8 = { firstname: "paulo", lastname: "santos", age: 48, grade: 1.5 };
var student9 = { firstname: "andre", lastname: "figueira", age: 58, grade: 16.5 };

var studentlist = [];
studentlist.push(student1);
studentlist.push(student2);
studentlist.push(student3);
studentlist.push(student4);
studentlist.push(student5);
studentlist.push(student6);
studentlist.push(student7);
studentlist.push(student8);
studentlist.push(student9);


