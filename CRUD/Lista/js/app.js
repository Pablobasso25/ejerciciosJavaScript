document.addEventListener('DOMContentLoaded', () =>{   //Espera a que el HTML esté completamente cargado. Una vez que todo el DOM está listo, ejecuta la función `fetchData()`.

  fetchData()
})

import {Gift} from './clases.js'     // import la class creada en otro fichero



const fetchData = async () => {  // Hace una petición para obtener el archivo `data.json` - Esta función puede tardar en completarse, así que no bloquea el resto del programa mientras espera
  // fetch : es una función que hace una petición HTTP para traer datos desde otro archivo o servidor
  // La función fetchData() es asincrónica porque hace una petición externa (a un archivo .json). Esa petición no es instantánea: puede tardar unos milisegundos o más. Entonces

  try {  //// intento hacer algo

    
    const res = await fetch ('data/data.json');   // aeait: es como decir : Esperá a que esta tarea termine antes de seguir con la siguiente línea
    const datos = await res.json();  // Convierte la respuesta (res) en un objeto JavaScript que se puede usar
    return datos;  //Devuelve los datos que obtuvo del archivo data.json, de esta manera puedo usarlo en las funciones para diferentes propositos

    
     
  } catch (error) {   // catch: atrapa el error y lo maneja sin que el programa se rompa " si alfo falla, hago esto"

    console.log(error); //  es una variable que contiene información sobre lo que salió mal
    
  }
}



// 1- función para cargar la tabla (contenido)

const cuerpoTabla = document.querySelector('#cuerpo-tabla') // capturo el id del cuerpo de la tabla para luego agregarle las celdas

const cargarTabla = async () => { 


  const datos = await fetchData(); //Esperá a que fetchData() termine de traer los datos antes de seguir con el resto del código.

  datos.map((item)=> {    // Recorre cada elemento del array data (cada gift card) y ejecuta una función para crear una fila en la tabla

    // y por cada elemento que devuelve, creo una fila con sus celdas
    const fila = document.createElement ('tr');
    const gift = document.createElement ('td');
    gift.textContent = `${item.gift}`;
    const tipo = document.createElement ('td');
    tipo.textContent = `${item.tipo}`;
    const tiempo = document.createElement ('td');
    tiempo.textContent = `${item.tiempo}`;
    const precio = document.createElement ('td');
    precio.textContent = `$${item.precio}`;

    fila.appendChild(gift);
    fila.appendChild(tipo);
    fila.appendChild(tiempo);
    fila.appendChild(precio);
    cuerpoTabla.appendChild(fila);

    // Creo la fila de botones
    const filaBtn = document.createElement ('td');
    const contenedorBtn = document.createElement ('div');
    contenedorBtn.className = 'd-flex gap-2';
    
    // botón editar
    const btnEditar = document.createElement ('button');
    btnEditar.className = 'btn btn-warning btn-sm me-2 btn-editar';
    btnEditar.setAttribute('type', 'button') 
    
    const iconoEditar = document.createElement ('i');
    iconoEditar.className ='bi bi-pencil';
    btnEditar.appendChild(iconoEditar);
    
    // botón eliminar
    const btnEliminar = document.createElement ('button');
    btnEliminar.className = 'btn btn-danger btn-sm me-2 btn-borrar';
    btnEliminar.setAttribute('type', 'button');

    const iconoEliminar = document.createElement ('i');
    iconoEliminar.className = 'bi bi-trash';
    btnEliminar.appendChild(iconoEliminar);

    contenedorBtn.appendChild(btnEditar);
    contenedorBtn.appendChild(btnEliminar);
    filaBtn.appendChild(contenedorBtn);

    fila.appendChild(filaBtn);

  });
};


// Función para agregar gift

const agregarGift = (event) => {
  event.preventDefault();
  
  const id = datos.at(-1).id + 1   // se posiciona en el ultimo elemento, en este caso el ultimo seria "id=3"

  // capturo el input con el id "gift" y guardo el valor que se ingrese
  const gift = document.querySelector('#gift').value;


  

 

}











cargarTabla();

// hago referencia la formulario
document.querySelector('#formGift').addEventListener('submit', agregarGift);

