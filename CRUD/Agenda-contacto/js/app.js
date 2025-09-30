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

const agenda = JSON.parse(localStorage.getItem("agendaKey")) || [];
console.log(agenda);

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
    confirmButtonText: "ok"
    });


    limpiarFormulario();
    dibujarFila(contactoNuevo, agenda.length)
    
};

function limpiarFormulario(){

    formularioContacto.reset();
}

// función para agregar a la fila
const dibujarFila = (itemContacto, fila) => {

    tbody.innerHTML += `<tr>
                <th scope="row">${fila} </th>
                <td>${itemContacto.nombre} </td>
                <td>${itemContacto.apellido} </td>
                <td>${itemContacto.telefono} </td>
                <td>
                  <img src="${itemContacto.imagen} " alt="${itemContacto.nombre} " class="img-thumnail img-table" />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info btn-sm me-2 btn-ver-detalle"
                  >
                    <i class="bi bi-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm me-2 btn-editar"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm me-2 btn-borrar"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>`
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


