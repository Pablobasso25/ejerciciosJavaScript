
/* 
Crear un script que permita al usuario ingresar palabras mediante prompt.
El ingreso debe continuar hasta que el usuario escriba "salir".
No se deben permitir duplicados.
Al finalizar, mostrar el array final con todas las palabras únicas

 */

// bloque 1 //
let palabras = [];
let entrada;

// bloque 2 //
do{
    entrada = prompt("Ingresá una palabra (o escribí 'salir' para terminar):");

    if (entrada !== null && entrada.toLowerCase() !== "salir" && entrada.trim() !== ""){
        if (!palabras.includes(entrada)){
            palabras.push(entrada);
        }else{
            alert("Esa palabra ya fue ingresada.");
        }
    }
}while (entrada !== null && entrada.toLowerCase() !== "salir");

/*
 Este bloque:
• Repite mientras el usuario no escriba "salir" ni cancele.
• Evita entradas vacías.
• Usa .includes() para evitar duplicados.
• Guarda solo palabras únicas.
  */

// bloque 3 //
document.writeln("Palabras ingresadas sin duplicados:<br>");
for (let i = 0; i < palabras.length; i++) {
  document.writeln("• " + palabras[i] + "<br>");
}


