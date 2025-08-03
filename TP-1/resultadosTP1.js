
/* 1
alert ("Un mensaje"); */

/* 2
document.writeln("«Hello World»"); */

/* 3
document.writeln(`${3+5}`);*/

/* 4
let usuario = prompt("¿Cuál es tu nombre?");
alert (`Hola ${usuario}`); */

/* 5
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
alert(`El resultado es ${num1 + num2}`); */

/* 6
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

if (num1 > num2) {
    document.writeln(`El ${num1} es mayor`);
}else {
    document.writeln(`El ${num2} es mayor`);
} */

/* 7
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 > num2 && num1 > num3){
    document.writeln(`El ${num1} es mayor`);

} else if (num2 > num1 && num2 > num3) {
    document.writeln(`El ${num2} es mayor`);

}else {
    document.writeln(`El ${num3} es mayor`);
} */

/* 8 
let numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 == 0) {

    alert(`El ${numero} es divisible por 2`);
}else{
    alert(`El ${numero} no es divisible por 2`);
}
 */

/* 9
let frase = prompt("Escribí una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if ("aeiouAEIOU".includes(letra)){
        vocales += letra;
        alert(`Las vocales que aparecen son: ${vocales}`);
    }
} */

/* 10
 
let numero = parseInt(prompt("Ingresa un nùmero"));

if(numero % 2 ==0){
  alert(`El ${numero} es divisible por 2`)
}else if(numero % 3 == 0){
  alert(`El ${numero} es divisible por 3`)
}else if(numero % 5 == 0){
  alert(`El ${numero} es divisible por 5`)
}else if(numero % 7 == 0){
  alert(`El ${numero} es divisible por 7`)
}
else{
    alert(`El numero ${numero} no es divisible ni en 2,3,5 y 7`);
}   */

11 

let numero = parseInt(prompt("Ingresa un número"));
let mensaje = `El número ${numero} es divisible: `;
let divisible = false;

if (numero % 2 === 0) {
  mensaje += "por 2 ";
  divisible = true;
}
if (numero % 3 === 0) {
  mensaje += "por 3 ";
  divisible = true;
}
if (numero % 5 === 0) {
  mensaje += "por 5 ";
  divisible = true;
}
if (numero % 7 === 0) {
  mensaje += "por 7 ";
  divisible = true;
}

if (divisible) {
  alert(mensaje);
} else {
  alert(`El número ${numero} no es divisible ni por 2, 3, 5 ni 7`);
}