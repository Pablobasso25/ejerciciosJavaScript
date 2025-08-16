
/* Crear un script que solicite al usuario ingresar nombres mediante prompt . El ingreso debe continuar hasta que el usuario escriba fin .
Al finalizar, mostrar:
• Cuántos nombres se ingresaron.
• La lista completa, uno debajo del otro. */



let nombres = [];
let entrada;
/* Declaro un array vacío llamado nombres para guardar los nombres ingresados. También creo la variable entrada para almacenar lo que el usuario escriba en el prompt. */

do {
    entrada = prompt("Ingresá un nombre (o escribí 'fin' para terminar):");

    /* Inicio un bucle do...while que se ejecuta al menos una vez. En cada vuelta, muestro un prompt para que el usuario ingrese un nombre o escriba 'fin' para terminar. */

    if (entrada !== null && entrada.toLowerCase() !== "fin" && entrada !== ""){
        nombres.push(entrada);
    }
    /* Si el usuario no cancela (!== null), no escribe 'fin' (sin importar mayúsculas), y no deja el campo vacío, entonces agrego el nombre al array usando push().*/

}while (entrada !== null && entrada.toLowerCase() !== "fin");
/* El bucle se repite mientras el usuario no haya cancelado ni escrito . Cuando lo hace, se corta el ciclo. */

document.writeln("Cantidad de nombres ingresados:" + nombres.length + "<br><br>");
/* Uso document.writeln() para mostrar cuántos nombres fueron ingresados, accediendo a la propiedad .length del array. */

document.writeln("Lista de nombres:<br>");
for (let i = 0; i < nombres.length; i++){
    document.writeln("• " + nombres[i] + "<br>");
}
/* Recorro el array nombres con un for y muestro cada nombre precedido por un punto (•). Cada uno aparece en una nueva línea gracias al <br>.*/
















