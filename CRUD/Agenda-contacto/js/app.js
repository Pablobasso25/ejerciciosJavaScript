import Contacto from "./contacto.js";

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

const agenda = JSON.parse(localStorage.getItem("agendaKey")) || []; 
console.log(agenda);
//localStorage.getItem("agendaKey") → Busca en el almacenamiento local del navegador (localStorage) el valor guardado con la clave "agendaKey".
// JSON.parse → - Convierte ese string JSON en un objeto JavaScript real.
// || [] → Si no hay nada guardado (es null), uso un array vacío como valor por defecto  


const guardarLocalStorage = () => {
    localStorage.setItem("agendaKey", JSON.stringify(agenda));
}

const crearContacto = () => {
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
                  <img src=${itemContacto.imagen} alt=${itemContacto.nombre} class="img-thumbnail img-table w-100" />
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

}

window.verDetalle = (id) => {

}

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

    crearContacto();
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
