/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

const body = document.querySelector('body');
body.classList.add('bg-dark');

const titulo = document.querySelector('h1');
titulo.classList.add('text-center', 'text-white', 'mt-5');
titulo.style.fontSize = '35px';