
/* Diseñar un algoritmo que obtenga el mes y día de nacimiento y muestre el signo zodiacal. */


let signos = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];
let diasCambio = [20, 19, 20, 20, 21, 21, 23, 23, 23, 23, 22, 21]; 

let mes = parseInt(prompt("Ingresá tu mes de nacimiento (1-12)")) - 1;  // se resta 1 porqur los arrays comienzan en 0 y los meses cominzan en 1 (tener en cuenta esto)
let dia = parseInt(prompt("Ingresá tu día de nacimiento (1-31)"));      // indica el día de cambio de signo en cada mes. Ejemplo: si naciste en enero y tu día es menor o igual a 20, sos Capricornio; si es mayor, sos Acuario.


let signo = "";

if (dia <= diasCambio[mes]) {          //Si el día es menor o igual al día de cambio del mes, se asigna el signo actual 

  signo = signos[mes];
} else {                                // Si el día es mayor, se asigna el signo del mes siguiente

  signo = signos[mes + 1];
}

alert("Tu signo zodiacal es: " + signo); 
