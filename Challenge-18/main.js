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

// Declaro un función anonima
form.addEventListener("submit", function (event) {
  // Esto es una función anónima declarada directamente como callback dentro de addEventListener
  // "submit" es el evento que ocurre cuando se envía el formulario y - function (e) { ... }  la función que se ejecuta cuando eso pasa

  event.preventDefault(); // Evita recargar la página

  // Capturo los valore ingresados en los inputs
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
  setTimeout(() => {
    resultadoDiv.textContent = "Procesando datos...";
    resultadoDiv.className = "alert alert-info";

    // Mostrar resultado
    setTimeout(() => {
      const tituloResultado = document.createElement("h5");
      tituloResultado.textContent = "Resultado:";
      resultadoDiv.appendChild(tituloResultado);
      resultadoDiv.textContent = `Resultado: ${resultadoOperacion}`;
      resultadoDiv.className = "alert alert-success";

      // Notificación con BOM (después de 5s)
      setTimeout(() => {
        const continuar = confirm("¿Queres realizar otra operación?");
        if (continuar) {
          form.reset(); //Limpia todos los campos del formulario
          resultadoDiv.textContent = "";
          resultadoDiv.className = "d-none"
        }
      }, 5000);
    }, 2000);
  }, 500);
  
});

agregarAlHistorial(num1, num2, operacion, resultadoOperacion);
//Funciones para guardar el historial de operaciones
function simboloOperacion(op) {
  switch (op) {
    case "suma": return "+";
    case "resta": return "-";
    case "multiplicacion": return "×";
    case "division": return "÷";
    default: return "?";
  }
}

function agregarAlHistorial(num1, num2, operacion, resultado){ //Esta función crea un nuevo <li> con la operación realizada y la agrega al historial
    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.textContent = `${num1} ${simboloOperacion(operacion)} ${num2} = ${resultado}`;
    historial.appendChild(item);
}