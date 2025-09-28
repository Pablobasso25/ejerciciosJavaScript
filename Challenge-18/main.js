// Importamos las funciones de los módulos
import { suma } from "./modules/suma.js";
import { resta } from "./modules/resta.js";
import { multiplicacion } from "./modules/multiplicacion.js";
import { division } from "./modules/division.js";

// Obtenemos los elementos del DOM
const form = document.getElementById("calc-form");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operacionSelect = document.getElementById("operacion");
const resultadoDiv = document.getElementById("resultado");

// Escuchar el evento submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recargar la página

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operacion = operacionSelect.value;

  // Validaciones
  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.textContent = "⚠️ Debes ingresar ambos números.";
    resultadoDiv.className = "alert alert-warning";
    return;
  }

  if (!operacion) {
    resultadoDiv.textContent = "⚠️ Debes seleccionar una operación.";
    resultadoDiv.className = "alert alert-warning";
    return;
  }

  let resultado;

  switch (operacion) {
    case "suma":
      resultado = suma(num1, num2);
      break;
    case "resta":
      resultado = resta(num1, num2);
      break;
    case "multiplicacion":
      resultado = multiplicacion(num1, num2);
      break;
    case "division":
      resultado = division(num1, num2);
      break;
  }

  // Mostrar resultado
  resultadoDiv.textContent = `Resultado: ${resultado}`;
  resultadoDiv.className = "alert alert-success";

  // Notificación con BOM (después de 5s)
  setTimeout(() => {
  const continuar = confirm("¿Quieres realizar otra operación?");
  if (continuar) {
    form.reset(); // 🔹 Limpia todos los campos del formulario
    resultadoDiv.textContent = "Esperando datos...";
    resultadoDiv.className = "alert alert-info";
  }
}, 5000);
});
