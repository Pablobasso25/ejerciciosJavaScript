import Contacto from "./contacto.js";
import { validarCantidadCaracteres, validarEmail } from "./validaciones.js";

const btnAgregarContacto = document.getElementById("btnAgregarContacto");
console.log(btnAgregarContacto);
const formularioContacto = document.getElementById("formContacto");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputDireccion = document.getElementById("direccion");
const inputNotas = document.getElementById("notas");
const inputImagen = document.getElementById("imagen");
const inputPuestoTrabajo = document.getElementById("puestoTrabajo");
const inputEmpresa = document.getElementById("empresa");
const tbody = document.getElementById("tablaContactosBody");
const tabla = document.querySelector(".table-responsive");
const seccionDetalles = document.getElementById("seccionDetallesContacto");
const seccionTablaContactos = document.getElementById("seccionTablaContactos");
const tituloModal = document.getElementById('contactoModalLabel')
let inputID = document.getElementById('contactoId');
let estoyCreando = true;
const agenda = JSON.parse(localStorage.getItem("agendaKey")) || []; 
console.log(agenda);
//localStorage.getItem("agendaKey") → Busca en el almacenamiento local del navegador (localStorage) el valor guardado con la clave "agendaKey".
// JSON.parse → - Convierte ese string JSON en un objeto JavaScript real.
// || [] → Si no hay nada guardado (es null), uso un array vacío como valor por defecto  


const guardarLocalStorage = () => {
    localStorage.setItem("agendaKey", JSON.stringify(agenda));
}

const crearContacto = () => {
  if (validacion ()) {

  

  const contactoNuevo = new Contacto(
    null,
    inputNombre.value,
    inputApellido.value,
    inputTelefono.value,
    inputEmail.value,
    inputImagen.value.length !== 0
      ? inputImagen.value
      : "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png",
    inputEmpresa.value,
    inputPuestoTrabajo.value,
    inputDireccion.value,
    inputNotas.value  
    );

    agenda.push(contactoNuevo);
    console.log(contactoNuevo);

    guardarLocalStorage();

    

    Swal.fire({
    title: "Contacto creado",
    text: `El contacto ${inputNombre.value} fue creado exitosamente`,
    icon: "success",
    confirmButtonText: "OK"
    });


    limpiarFormulario();
    dibujarFila(contactoNuevo, agenda.length)
    
  } else{
    console.log('error');
    
  }
    
};

function limpiarFormulario(){

    formularioContacto.reset();
}

const cargarContactos = () => {
  if (agenda.length !== 0){
    agenda.map((itemContacto, indice) => dibujarFila(itemContacto, indice + 1))
  } else {
    mostrarNoHayDisponibles();
    
  }
}

// función para agregar a la fila
const dibujarFila = (itemContacto, fila) => {
  if (tabla.children.length === 2) {
    tabla.children [1].remove();
  }
    tbody.innerHTML += `<tr>
                <th scope="row">${fila} </th>
                <td>${itemContacto.nombre} </td>
                <td>${itemContacto.apellido} </td>
                <td>${itemContacto.telefono} </td>
                <td>
                  <img src=${itemContacto.imagen} alt=${itemContacto.nombre} class="img-thumbnail img-table" width= 50px />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info btn-sm me-2 btn-ver-detalle"
                    onclick = "verDetalle('${itemContacto.id}')"
                  >
                    <i class="bi bi-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm me-2 btn-editar"
                    onclick = "prepararContacto('${itemContacto.id}')"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm me-2 btn-borrar"
                    onclick = "borrarContacto('${itemContacto.id}')"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>`
};

window.borrarContacto = (id) => {
  Swal.fire({
  title: "Estas seguro de eliminar el contacto?",
  text: "No podes revertir este paso",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Borrar",
  cancelButtonText: "Cancelar"
}).then((result) => {
  console.log(result);
  
  if (result.isConfirmed) {
    // busca la posición del elemento que quiiero borrar
    const indiceContacto = agenda.findIndex((contacto) => contacto.id === id);

    
    agenda.splice(indiceContacto, 1);

    guardarLocalStorage();

    tbody.children[indiceContacto].remove();
    if (tbody.children.length === 0){
      mostrarNoHayDisponibles();
    };

    const filasRestantes = tbody.children;
    for (let i = 0; i < filasRestantes.length; i++) {
      const celdasIndice = filasRestantes[i].querySelector('th');
      if (celdasIndice){
        celdasIndice.textContent = i + 1;
      };
      
    };


    Swal.fire({
      title: "Contacto eliminado",
      text: "El contacto fue eliminado con éxito",
      icon: "success"
    });
    console.log(agenda);
    
  }
});
}


window.prepararContacto = (id) => {

  const contactoBuscado = agenda.find((contacto) => contacto.id === id);

  inputNombre.value = contactoBuscado.nombre,
  inputApellido.value = contactoBuscado.apellido,
  inputEmail.value = contactoBuscado.email,
  inputDireccion.value = contactoBuscado.direccion,
  inputEmpresa.value = contactoBuscado.empresa,
  inputImagen.value = contactoBuscado.imagen,
  inputNotas.value = contactoBuscado.notas,
  inputPuestoTrabajo.value = contactoBuscado.puestoTrabajo,
  inputTelefono.value = contactoBuscado.telefono,
  inputID = id,

  estoyCreando = false;

  modalFormularioContacto.show();

  tituloModal.textContent = 'Editar contacto'
}


const editarContacto = () => {

  const indiceContacto = agenda.findIndex((contacto) => contacto.id === inputID)

  agenda[indiceContacto].nombre = inputNombre.value,
  agenda[indiceContacto].apellido = inputApellido.value,
  agenda[indiceContacto].email = inputEmail.value,
  agenda[indiceContacto].direccion = inputDireccion.value,
  agenda[indiceContacto].empresa = inputEmpresa.value,
  agenda[indiceContacto].imagen = inputImagen.value,
  agenda[indiceContacto].notas = inputNotas.value,
  agenda[indiceContacto].puestoTrabajo = inputPuestoTrabajo.value,
  agenda[indiceContacto].telefono = inputTelefono.value,

  //actualizando en el localStorage
  guardarLocalStorage ()

  //actualizar la tabla con los nuevo datos 
  const filaEditada = tbody.children[indiceContacto]

  if(filaEditada){
    filaEditada.children[1].textContent = agenda[indiceContacto].nombre;
    filaEditada.children[2].textContent = agenda[indiceContacto].apellido;
    filaEditada.children[3].textContent = agenda[indiceContacto].telefono;
    filaEditada.children[4].children[0].src = agenda[indiceContacto].imagen;
    
    modalFormularioContacto.hide();

    /* Swal.fire({
      title: "Contacto actualizado",
      text:  "`El contacto ${agenda} fue eliminado con éxito`,
      icon: "success",

    }); */
    
  }
}

const validacion = () => {
  let datosValidos = true;
  if (!validarCantidadCaracteres (inputNombre, 2, 50)){
    datosValidos = false;
  } if (!validarCantidadCaracteres (inputApellido, 3, 50)){
    datosValidos = false;
  } if (!validarEmail (inputEmail)){
    datosValidos = false;
  } 
  return datosValidos;
}



window.verDetalle = (id) => {
  const contactoBuscado = agenda.find((contacto) => contacto.id === id);  // Busca en el array "agenda" el contacto con el "id" que coincida con el que se pasó como argumento. find() devuelve elprimer contacto que cumpla con la condicion
  if (!contactoBuscado) return;
  /* - Si agenda no tiene ningún contacto con ese id, entonces contactoBuscado será undefined.
     - La condición !contactoBuscado pasa a ser true.
     - Entonces return evita que el resto del código se ejecute
 */

  // Ocultar tabla y mostrar detalle
  seccionTablaContactos.classList.add("d-none"); // Oculta la sección de la tabla de contactos agregando la clase d-none
  document.getElementById("seccionDetalleContacto").classList.remove("d-none"); // una vez ocultada la tabla de contactos, muestro la sección detalle de contacto   

  // Actualizar breadcrumb (barra de navegación)
  document.getElementById("breadCrumbContactName").textContent = contactoBuscado.nombre; // actualiza el nombre del contacto

  // Actualizar encabezado
  document.getElementById("detalleFoto").src = contactoBuscado.imagen; //imagen
  document.getElementById("detalleFoto").alt = `Foto de ${contactoBuscado.nombre}`;//texto en el caso de que la imagen no cargue
  document.getElementById("detalleNombreApellido").textContent = `${contactoBuscado.nombre} ${contactoBuscado.apellido}`; // nombre y apellido
  document.getElementById("detalleEmail").textContent = contactoBuscado.email;  //email

  // Actualizar lista de información de contacto
  document.getElementById("detalleTelefono").textContent = contactoBuscado.telefono;
  document.getElementById("detalleEmailInfo").textContent = contactoBuscado.email;
  document.getElementById("detalleCompany").textContent = contactoBuscado.empresa;
  document.getElementById("detalleJobTitle").textContent = contactoBuscado.puestoTrabajo;
  document.getElementById("detalleLocation").textContent = contactoBuscado.direccion;

  // Actualizar notas
  document.getElementById("detalleNotes").textContent = contactoBuscado.notas;
};

document.getElementById("btnVolverTabla").addEventListener("click", () => {       //Escucha el clic en el botón "Volver a la tabla"
  document.getElementById("seccionDetalleContacto").classList.add("d-none");      //Oculta la sección de detalle del contacto
  seccionTablaContactos.classList.remove("d-none");                               //Vuelve a mostrar la tabla de contactos
});



const mostrarNoHayDisponibles = () => {
  const parrafo = document.createElement ("p");
  parrafo.classList.add("text-center");
  parrafo.textContent = "No hay contactos disponibles";
  tabla.appendChild(parrafo);
}

const modalFormularioContacto = new bootstrap.Modal(
  document.getElementById("contactoModal")
);

btnAgregarContacto.addEventListener("click", () => {
  modalFormularioContacto.show();
});

formularioContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    // aqui tengo que crear/editar
  if(estoyCreando){
    crearContacto()
  } else{
    editarContacto()
  }
});

cargarContactos ();


// setItem()   →    guardar informacion en el localStorage
/* localStorage.setItem("clave", "valor");
- Guarda un dato en el navegador bajo una clave específica.
- El dato debe ser un string. Si querés guardar un objeto o array, usás JSON.stringify().

→ Ejemplo:
const usuario = { nombre: "Pablo", nivel: "Avanzado" };   objeto que se convierte en texto JSON
localStorage.setItem("usuarioKey", JSON.stringify(usuario));
 */


// getItem()
/* localStorage.getItem("clave");
- Recupera el dato guardado bajo esa clave.
- Devuelve un string, así que si se guardó un objeto o array, se lo tiene que convertir de texto a objeto con JSON.parse().

→ Ejemplo:
const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioKey"));   texto que se convierte en objeto o array
console.log(usuarioGuardado.nombre); // "Pablo"
*/


// localStorage solo almacena texto (string) por lo tanto hay que convertir con JSON.parse antes de almacenarlo 



// JSON.stringify() y JSON.parse() 
// Son dos métodos que te permiten convertir entre objetos JavaScript y texto JSON, para poder guardar, enviar o recuperar datos

//JSON.stringify()
/* Convierte un objeto JavaScript en un string JSON.

→ Ejemplo: 
const persona = { nombre: "Pablo", edad: 32 };
const texto = JSON.stringify(persona);
console.log(texto); // '{"nombre":"Pablo","edad":32}'
*/


//JSON.parse() 
/* Convierte un string JSON en un objeto JavaScript

→ Ejemplo:
const texto = '{"nombre":"Pablo","edad":30}';
const persona = JSON.parse(texto);
console.log(persona.nombre); // "Pablo"
 */
