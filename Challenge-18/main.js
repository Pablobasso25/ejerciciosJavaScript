// Importación de  las funciones de los módulos
import { suma } from "./modules/suma.js";
import { resta } from "./modules/resta.js";
import { multiplicacion } from "./modules/multiplicacion.js";
import { division } from "./modules/division.js";

// Capturo los elementos del DOM
const form = document.getElementById("calc-form");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operacionSelect = document.getElementById("operacion");
const resultadoDiv = document.getElementById("resultado");
const historial = document.getElementById("historial");
const spinner = document.getElementById("spinner");
const btnCalcular = document.getElementById("btn-calcular");

// Declaro un función anonima
form.addEventListener("submit", function (event) {
  // Esto es una función anónima declarada directamente como callback dentro de addEventListener
  // "submit" es el evento que ocurre cuando se envía el formulario y - function (e) { ... }  la función que se ejecuta cuando eso pasa

  event.preventDefault(); // Evita recargar la página

  // Capturo los valores ingresados en los inputs
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operacion = operacionSelect.value;

  // Validaciones
  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.textContent = "⚠️ Ingresá ambos números.";
    resultadoDiv.className = "alert alert-warning";
    return;
  }

  if (!operacion) {
    resultadoDiv.textContent = "⚠️ Seleccioná una operación.";
    resultadoDiv.className = "alert alert-warning";
    return;
  }

  let resultadoOperacion;

  switch (operacion) {
    case "suma":
      resultadoOperacion = suma(num1, num2);
      break;
    case "resta":
      resultadoOperacion = resta(num1, num2);
      break;
    case "multiplicacion":
      resultadoOperacion = multiplicacion(num1, num2);
      break;
    case "division":
      resultadoOperacion = division(num1, num2);
      break;
  }

  // pausa mientras se procesan los datos
  setTimeout(() => { // se ejecura después de 0.5s de hacer click en "calcular"
    
    resultadoDiv.textContent = "Procesando datos...";
    resultadoDiv.className = "alert alert-info";
    spinner.classList.remove("d-none"); // activa el spinner que estaba oculto

    // Mostrar resultado se ejecuta despues de 2s
    setTimeout(() => {
      resultadoDiv.textContent = `Resultado: ${resultadoOperacion}`;
      resultadoDiv.className = "alert alert-success";
      spinner.classList.add("d-none"); // oculta de nuevo el spinner una vez que se muestra el resultado

      setTimeout(() => { // se ejecuta a los 1s despues de "mostrar resultados"
        

        agregarAlHistorial(num1, num2, operacion, resultadoOperacion);
      }, 1000);

      // Alert de confirmación se esjecuta después de 5s
      setTimeout(() => {
        const continuar = confirm("¿Queres realizar otra operación?");
        if (continuar) {
          form.reset(); //Limpia todos los campos del formulario
          resultadoDiv.textContent = "";
          resultadoDiv.className = "d-none";
        } else {
          form.reset();
          historial.textContent = "";
          resultadoDiv.textContent = "";
          resultadoDiv.className = "d-none";
        }
      }, 5000);
    }, 2000);
  }, 500);
});

//Funciones para guardar el historial de operaciones
function simboloOperacion(op) {
  switch (op) {
    case "suma":
      return "+";
    case "resta":
      return "-";
    case "multiplicacion":
      return "×";
    case "division":
      return "÷";
    default:
      return "?";
  }
}
function agregarAlHistorial(num1, num2, operacion, resultado) {
  //Esta función crea un nuevo <li> con la operación realizada y la agrega al historial

  const item = document.createElement("li");
  item.className = "list-group-item";
  item.textContent = `${num1} ${simboloOperacion(operacion)} ${num2} = ${resultado}`;
  historial.appendChild(item);
}

// eventos para mensajes de error en los inputs

num1Input.addEventListener("input", () => {
  // forma tradicional de validar
  const valor = parseFloat(num1Input.value);
  if (isNaN(valor)) {
    document.getElementById("error-num1").textContent = "⚠️ Número inválido";
  } else {
    document.getElementById("error-num1").textContent = "";
  }
});

num2Input.addEventListener("input", () => {
  // usando operadores ternarios
  const valor = parseFloat(num2Input.value);
  document.getElementById("error-num2").textContent = isNaN(valor) ? "⚠️ Número inválido" : "";
});

operacionSelect.addEventListener("change", () => {
  // usando operadores ternarios
  document.getElementById("error-operacion").textContent = operacionSelect.value ? "" : "⚠️ Seleccioná una operación";
});

// función para validar todo el formulario y habilidar el botón "calcular"
function validarFormulario() {
  const num1 = parseFloat(num1Input.value); // se convierten los valores de los inputs a números reales
  const num2 = parseFloat(num2Input.value); // se convierten los valores de los inputs a números reales
  const operacion = operacionSelect.value; // se captura el valor seleccionado en el select

  const esValido = !isNaN(num1) && !isNaN(num2) && operacion; // pregunta: ¿el número 1 es válido? , ¿el número 2 es válido?, ¿hay operación seleccionada?
  btnCalcular.disabled = !esValido; // si no es valido (false), se mantiene deshabilidato

  if (esValido) {
    // si cumple todas las condiciones (true), se habilita y cambia de color
    btnCalcular.classList.replace("btn-info", "btn-success");
  } else {
    btnCalcular.classList.replace("btn-success", "btn-info");
  }

  // otra opción para cambiar el color del botón
  /* btnCalcular.classList.remove("btn-info", "btn-success");
btnCalcular.classList.add(esValido ? "btn-success" : "btn-info"); */
}

// escucha de eventos
num1Input.addEventListener("input", validarFormulario); //Cada vez que el usuario escribe algo en el campo número 1, se ejecuta la función validarFormulario.
num2Input.addEventListener("input", validarFormulario); // si el usuario modifica el segundo número, se revisa si el formulario está listo para habilitar el botón.
operacionSelect.addEventListener("change", validarFormulario); //Cuando el usuario elije una operación distinta, ejecuta la validación
