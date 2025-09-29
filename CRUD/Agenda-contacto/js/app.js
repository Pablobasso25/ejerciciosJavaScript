import Contacto from "./js/contacto.js";


const crearContactoNuevo = new Contacto


const btnAgregarContacto = document.getElementById('btnAgregarContacto');
console.log(btnAgregarContacto);

const modalFormularioContacto = new bootstrap.Modal(document.getElementById('contactoModal'));

btnAgregarContacto.addEventListener('click', () => {
    modalFormularioContacto.show();
})