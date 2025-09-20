/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

//Desactivar el botón “Enviar” hasta que se inicie el juego
const botonEnviar = document.querySelector('#formulario button');
botonEnviar.classList.add('opacity-0');
botonEnviar.disabled = true;

//modifico body
const body = document.querySelector('body');
body.classList.add('bg-dark');

//modifico h1
const titulo = document.querySelector('h1');
titulo.classList.add('text-center', 'text-white', 'mt-5');
titulo.style.fontSize = '35px';

//modifico input
const input = document.querySelector('input')
input.setAttribute("placeholder", 'Ingresá un número del 1 al 10');

//modifico el botón "comenzar juego"
const botonComenzar = document.getElementById('comenzarJuego');

// Función para generar número mágico
let numeroMagico;

const generarNumeroMagico = () => {

    numeroMagico= Math.floor(Math.random() * 10) + 1;
    console.log("Número mágico generado", numeroMagico);

    //// activa el boton una vez que se presiona "iniciar juego"
    botonEnviar.classList.remove('opacity-0');
    botonEnviar.disabled = false;  

};

// llamo a la función cuando se presiona "comenzar juego"
document.getElementById('comenzarJuego').addEventListener('click', generarNumeroMagico);



// comparo el número ingresado con el generado anteriormente utilizando una función 

const verificarNumero = (event) => {
  event.preventDefault(); // evita que el formulario recargue

  // capturo el número que el usuario ingresa
  const numeroIngresado = parseInt(document.getElementById("numero").value);

  if (numeroIngresado == numeroMagico) {   // si el numero coincide, hace todo lo demas 
    // 1- mostrar mensaje
    mostrarMensaje("🎉 ¡Adivinaste el número!", "success");
    // 2- desactivar boton de enviar y bajarle la opacidad
    botonEnviar.disabled = true;
    botonEnviar.classList.add('opacity-50');
    // 3- cambiar el texto del botón "comenzar juego" por "reiniciar"
    botonComenzar.textContent = 'Reiniciar juego'
    botonComenzar.classList.remove('btn-success');
    botonComenzar.classList.add('btn-primary');


    // 4- asignarle nueva funcionalidad (creo una nueva función dentro de otra función)
    botonComenzar.onclick = () => {
    // Reiniciar juego
    generarNumeroMagico(); //llama a la función y genera un nuevo número mágco
    mostrarMensaje("🔄 Nuevo número generado", "info");
    botonEnviar.disabled = false;   // reactiva el boton que estaba apagado
    botonEnviar.classList.remove('opacity-50'); // reactiva el boton que estaba apagado
    document.getElementById("numero").value = "";
    botonComenzar.textContent = "Comenzar juego";
    botonComenzar.classList.remove('btn-primary');
    botonComenzar.classList.add('btn-success');

    botonComenzar.onclick = generarNumeroMagico; // restaurar funcionalidad original
    

  };


  } else if (numeroIngresado < numeroMagico) {
    mostrarMensaje("⛔ El número es mayor", "warning");
  } else {
    mostrarMensaje("⛔ El número es menor", "warning");
  }

  document.getElementById("numero").value = "";

};

// llamo a la función cuando presiona "enviar"
document.getElementById('formulario').addEventListener('submit', verificarNumero);




const mostrarMensaje = (texto, tipo) => {
  const alert = document.getElementById('alert');
    alert.innerHTML = "";                           // limpiar mensajes anteriores



  const mensaje =document.createElement('div');
  mensaje.classList.add('alert', `alert-${tipo}`);
  mensaje.textContent = `${texto}`;

 alert.appendChild(mensaje);
 
};