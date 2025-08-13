
/* Crear un script que solicite al usuario ingresar nombres mediante prompt . El ingreso debe continuar hasta que el usuario escriba fin .
Al finalizar, mostrar:
• Cuántos nombres se ingresaron.
• La lista completa, uno debajo del otro. */


// bloque 1 //
let nombres = [];
let entrada;


// bloque 2 //
do {
    entrada = prompt("Ingresá un nombre (o escribí 'fin' para terminar):");

    if (entrada !== null && entrada.toLowerCase() !== "fin" && entrada !== ""){
        nombres.push(entrada);
    }
}while (entrada !== null && entrada.toLowerCase() !== "fin");

/*     Este bloque :
• Repite mientras el usuario no escriba "fin" ni cancele
• Evita agregar cadenas vacias
• Guarda cada nombre en el array */

// bloque 3 //
document.writeln("Cantidad de nombres ingresados:" + nombres.length + "<br><br>");
// muestra la cantidad de nombres ingresados

document.writeln("Lista de nombres:<br>");
for (let i = 0; i < nombres.length; i++){
    document.writeln("• " + nombres[i] + "<br>");
}

/*     Este bloque :
• Muestra la cantidad total de nombres
• Recorre el array y muestra cada nombre en una lista con el for*/