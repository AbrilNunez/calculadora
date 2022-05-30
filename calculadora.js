const process = require("process");



const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

console.log("Resultado de la suma", sumar(numeroA, numeroB));
console.log("Resultado de la resta", restar(numeroA, numeroB));
console.log("Resultado de la multiplicación", multiplicar(numeroA, numeroB));
console.log("Resultado de la división", dividir(numeroA, numeroB));