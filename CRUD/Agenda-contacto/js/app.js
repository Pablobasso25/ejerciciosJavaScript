
const btnAgregarContacto = document.getElementById('btnAgregarContacto');

const modalFormularioContacto = new bootstrap.Modal(document.getElementById('contactoModal'));

btnAgregarContacto.addEventListener('click', ()=> {

    modalFormularioContacto.show()
} )