
/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */


let meses = [
  "• Enero", "• Febrero", "• Marzo", "• Abril", "• Mayo", "• Junio",
  "• Julio", "• Agosto", "• Septiembre", "• Octubre", "• Noviembre", "• Diciembre"];

for(let i = 0; i < 12; i++){
  let mostrar = meses[i];
  document.writeln(mostrar + "<br>");
} 