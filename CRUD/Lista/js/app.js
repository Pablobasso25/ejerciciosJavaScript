document.addEventListener('DOMContentLoaded', () =>{
  fetchData()
})

import {Gift} from './clases.js'     // import la class creada en otro fichero

const fetchData = async () => {
  try {
    
    const res = await fetch ('data/data.json')   // petición: primero ejecuta "data.json" y luego da una respuesta
    const data = await res.json()
    
     
  } catch (error) {
    console.log(error);
    
  }
}

const cuerpoTabla = document.querySelector('#cuerpo-tabla')

//función para cargar la tabla (contenido)

const cargarTabla = () => {

  fetchData.map((item)=> {    //recorre cada elemento de la gift card

    // y por cada elemento que devuelve, creo una fila con sus celdas
    

  })
}


