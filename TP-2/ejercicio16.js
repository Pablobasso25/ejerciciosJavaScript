
/*  Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh” */

let mensaje = "";
let texto = prompt("Ingrese el texto");

for(let i = texto.length - 1; i>=0;i--){
   mensaje+= texto[i];
}

alert("texto alreves: " + mensaje );