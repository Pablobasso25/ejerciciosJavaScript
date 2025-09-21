

/////////////////////////////////// Reloj digital //////////////////////////////////////

// 1- Creación de elementos 
const row = document.createElement('div');
row.className = 'd-flex justify-content-center';

const col = document.createElement('div');
col.className = 'col-3 card bg-dark text-center p-5 mt-5';

const h2 = document.createElement('h2');
h2.setAttribute('id', 'reloj');
h2.className = 'display-4 text-primary';

// 2- agrego un elemento dentro del otro
const container = document.querySelector('.container');
container.appendChild(row);
row.appendChild(col);
col.appendChild(h2);


// función para el reloj

const actualizarReloj = () => { 
  const actual = new Date();         // Creo un objeto Date que representa el momento actual--- "actual" contiene toda la info: hora, minutos, segundos, día, mes, año
  const horas = String(actual.getHours()).padStart(2, '0');     
  const minutos = String(actual.getMinutes()).padStart(2, '0');
  const segundos = String(actual.getSeconds()).padStart(2, '0');
  /* - se extrae la hora con getHours (devuelve un número entre 0 y 23); 
     - se convierte en un string para que se pueda aplicar .padStart
     - .padStart: Asegura que el número tenga dos dígitos (2 , '0') el primer parametro es el largo total de la cadena y el segundo es el relleno para que no rompa el formato de dos dígitos 

   */

  const reloj = document.getElementById("reloj");
  reloj.textContent = `${horas}:${minutos}:${segundos}`;
};

setInterval(actualizarReloj, 1000);  // cada segundo, se ejecuta actualizarReloj() y actualiza la hora en pantalla



//////////////////////////////// lista de tareas /////////////////////////////////////

