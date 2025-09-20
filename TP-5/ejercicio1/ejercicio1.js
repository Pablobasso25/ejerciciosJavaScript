/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

//Desactivar el botón “Enviar” hasta que se inicie el juego
const botonEnviar = document.querySelector('#formulario button');
botonEnviar.classList.add('opacity-0');
botonEnviar.disabled = true;

const body = document.querySelector('body');
body.classList.add('bg-dark');

const titulo = document.querySelector('h1');
titulo.classList.add('text-center', 'text-white', 'mt-5');
titulo.style.fontSize = '35px';


// Función para generar número mágico

let numeroMagico;

const generarNumeroMagico = () => {

    numeroMagico= Math.floor(Math.random() * 10) + 1;
    console.log("Número mágico generado", numeroMagico);

    botonEnviar.classList.remove('opacity-0');
    botonEnviar.disabled = false;  // activa el boton una vez que se presiona "iniciar juego"

};

// llamo a la función cuando se presiona "comenzar juego"
document.getElementById('comenzarJuego').addEventListener('click', generarNumeroMagico);

// capturo el número que el usuario ingresa
const numeroIngresado = document.getElementById('numero').value;

// comparo el número ingresado con el generado anteriormente

const verificarNumero = () => {
  if (numeroIngresado == numeroMagico) {
    alert("¡Adivinaste el número!");
  } else if (numeroIngresado < numeroMagico) {
    alert("El número es mayor");
  } else {
    alert("El número es menor");
  }
};


document.getElementById('formulario').addEventListener('submit', verificarNumero);