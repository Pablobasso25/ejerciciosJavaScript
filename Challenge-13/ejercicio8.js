
/* Diseñar un algoritmo que obtenga el mes y día de nacimiento y muestre el signo zodiacal. */


let signos = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];
let diasCambio = [20, 19, 20, 20, 21, 21, 23, 23, 23, 23, 22, 21]; 

let mes = parseInt(prompt("Ingresá tu mes de nacimiento (1-12)")) - 1;  // se resta 1 porqur los arrays comienzan en 0 y los meses cominzan en 1 (tener en cuenta esto)
let dia = parseInt(prompt("Ingresá tu día de nacimiento (1-31)"));

let signo = "";

if (dia <= diasCambio[mes]) {
  signo = signos[mes];
} else {
  signo = signos[mes + 1];
}

alert("Tu signo zodiacal es: " + signo); 
