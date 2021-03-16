

// // var a = 10;
// // var b = 5;

// // var c = a + b;

// // console.log(c);




// var miniprojeto = 16;
// var freq = 10;
// var projetofinal = 12;

// var notafinal = miniprojeto * 0.3 + freq * 0.3 + projetofinal * 0.4;

// //console.log("A avaliação final é : " + math.round(notafinal) + "valores");


// var month = 3;

// switch (month) {
//     case 1:
//         console.log("janeiro");
//         break;
//     case 2:
//         console.log("Fevereiro");
//         break;
//     case 3:
//         console.log("Março");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Maio");
//         break;
//     case 6:
//         console.log("Junho");
//         break;
//     case 7:
//         console.log("Julho");
//         break;
//     case 8:
//         console.log("Agosto");
//         break;
//     case 9:
//         console.log("Setembro");
//         break;
//     case 10:
//         console.log("Outubro");
//         break;
//     case 11:
//         console.log("Novembro");
//         break;
//     case 12:
//         console.log("Dezembreo");
//         break;
//     default:
//         console.log("Mês inválido");
//         break;
// }

// var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];

// if (month - 1 > 12 || month - 1 < 1) {
//     console.log("Mes Invalido");
// }
// else {
//     console.log(months[month - 1]);
// }

// var operador1 = 2;
// var operador2 = 4;
// var operando = "^";
// var resultado = 0;

// if (operando == "+") {
//     resultado = operador1 + operador2;
// }
// else if (operando == "-") {
//     resultado = operador1 - operador2;
// }
// else if (operando == "*") {
//     resultado = operador1 * operador2;
// }
// else if (operando == "/") {
//     resultado = operador1 / operador2;
// }
// else if (operando == "^") {
//     resultado = Math.pow(operador1, operador2);
//     console.log("EXPOENTE")
// }


// console.log(resultado);



// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// var i = 0


// var d = 9 / 3;
// var r = 9 % 3;
// console.log("Divisao: " + d)
// console.log("Resto: " + r)

// while (i < 10) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
//     //     console.log(i);
//     i++;
// }



// var sum = 0;
// for (let j = 0; j <= 100; j++){
//     sum += j;
// }

// console.log(sum);

/*var fact = 1;
for (let j = 1; j <= 3; j++) {
    fact *= j;
}

console.log(fact); */


var array = [1, 4, 5, 7, 0, 12];


var max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max)
