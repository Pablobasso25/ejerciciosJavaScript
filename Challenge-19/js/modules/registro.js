// Función principal que gestiona el registro de usuario desde el formulario del modal
export function manejarRegistro() {
  // 1. Se obtiene el formulario por su ID para poder escuchar el evento submit
  const form = document.getElementById('formRegistro');

  // 2. Se intercepta el envío del formulario para evitar el comportamiento por defecto (recargar la página)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 3. Se construye el objeto usuario con los datos ingresados en el formulario
    const nuevoUsuario = {
      id: Date.now(), // ID único generado con timestamp
      nombre: document.getElementById('nombreCompleto').value.trim(), // Nombre completo del usuario
      usuario: document.getElementById('nombreUsuarioRegistro').value.trim(), // Nombre de usuario
      email: document.getElementById('email').value.trim(), // Email del usuario
      domicilio: document.getElementById('domicilio').value.trim(), // Domicilio del usuario
      rol: document.querySelector("input[name='rol']:checked")?.value, // Rol seleccionado (vendedor o comprador)
      password: document.getElementById('password').value, // Contraseña ingresada
      fechaRegistro: new Date().toISOString() // Fecha y hora actual en formato ISO
    };

    // 4. Se captura el valor del campo "Confirmar contraseña" para compararlo con el original
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 5. Se valida el objeto usuario y la confirmación de contraseña
    const validacion = validarUsuario(nuevoUsuario, confirmPassword);
    if (!validacion.ok) {
      mostrarFeedback(validacion.mensaje, "error"); // Si hay error, se muestra feedback y se cancela el registro
      return;
    }

    // 6. Si la validación es exitosa, se guarda el usuario en localStorage
    guardarUsuario(nuevoUsuario);

    // 7. Se muestra mensaje de éxito y se limpia el formulario
    mostrarFeedback("¡Registro exitoso!", "success");
    form.reset();

    // 8. Se cierra el modal de registro utilizando Bootstrap
    bootstrap.Modal.getInstance(document.getElementById('registroModal')).hide();
  });

  // 9. Se activan las validaciones visuales en tiempo real para mejorar la experiencia del usuario
  activarValidacionesVisuales();
}

/////// Funciones auxiliares que se las llama dentro de la principal ////////

/// Función que valida los datos del usuario antes de guardarlos
function validarUsuario(usuario, confirmPassword) {
  // Verifica que los campos obligatorios no estén vacíos
  if (!usuario.nombre || !usuario.email || !usuario.password || !usuario.rol) {
    return { ok: false, mensaje: "Todos los campos son obligatorios" };
  }
  if (!usuario.usuario) {
  return { ok: false, mensaje: "El nombre de usuario es obligatorio" };
}

  // Verifica que las contraseñas coincidan
  if (usuario.password !== confirmPassword) {
    return { ok: false, mensaje: "Las contraseñas no coinciden" };
  }

  // Verifica que el email no esté duplicado en localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios_app')) || [];
  const emailDuplicado = usuarios.some(u => u.email === usuario.email);
  if (emailDuplicado) {
    return { ok: false, mensaje: "Este email ya está registrado" };
  }

  // Si todo está correcto, devuelve validación exitosa
  return { ok: true };
}


// Función que guarda el nuevo usuario en localStorage
function guardarUsuario(usuario) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios_app')) || []; // Recupera la lista actual o crea una nueva
  usuarios.push(usuario); // Agrega el nuevo usuario
  localStorage.setItem('usuarios_app', JSON.stringify(usuarios)); // Guarda la lista actualizada
  console.log("Usuario guardado:", usuario);
}

// Función que muestra mensajes al usuario (éxito o error)
function mostrarFeedback(mensaje, tipo) {
  const color = tipo === "success" ? "text-success" : "text-danger"; // Define el color según el tipo
  alert(mensaje); // Muestra el mensaje como alerta (puede reemplazarse por un toast visual)
}

// Función que aplica estilos visuales a los inputs según su validez
function activarValidacionesVisuales() {
  const inputs = document.querySelectorAll("#formRegistro input"); // Selecciona todos los inputs del formulario

  inputs.forEach(input => { // Recorre cada input individualmente para aplicar una lógica personalizada
    input.addEventListener("input", () => {  //Escucha el evento input, que se dispara cada vez que el usuario escribe o modifica el camp
      // Si el input es válido, se aplica borde verde
      if (input.checkValidity()) { // Verifica si el input cumple con las reglas HTML5 que tenga definidas, como: required,type,minlength,maxlength,pattern → devuelve "true" si el campo es válido y "false" si no lo es.
        input.classList.add("is-valid");  // Si el campo es válido, se le agrega la clase Bootstrap is-valid (borde verde) y se le quita is-invalid (borde rojo).
        input.classList.remove("is-invalid");
      } else {
        // Si el input es inválido, se aplica borde rojo
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
      }
    });
  });
}




