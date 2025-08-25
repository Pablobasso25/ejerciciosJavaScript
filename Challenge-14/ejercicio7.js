
/* Calculadora básica con switch: 
Crea una función que reciba dos números y un operador (+, -, *, /). Devuelva el resultado de la operación. Si el operador no es válido, mostrar error. */

function calculo (num1, num2, operador){
    let resultado;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
        break;
        case "-":
            resultado = num1 - num2;
        break;
        case "*":
            resultado = num1 * num2;
        break;
        case "/":
            if (num2 !== 0) {
            resultado = num1 / num2;
            } else {
            resultado = "No se puede dividir por cero";
            }
        break;            
        default:
            resultado = "Operador inválido";
        break;
    }
    return resultado;
}

let resultado;

do{
let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let operador = prompt("Qué operación vas a realizar? (+, -, *, /)");

    if (isNaN(num1) || isNaN(num2)) {          // si no son números
        alert("Por favor, ingresá números válidos.");
    } else if (!["+", "-", "*", "/"].includes(operador)) {
    alert("Operador inválido. Por favor ingresá: +, -, *, o /");
    }else {
        resultado = calculo(num1, num2, operador)
        alert ("El resultado es: " + resultado)
        /* alert("El resultado es: " + calculo(num1, num2, operador)); */  // otra forma de mostrar el resultado, antes comentar tambien "let resultado"
        break;
    }
    
}while (true);