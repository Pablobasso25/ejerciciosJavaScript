
/* 
Crear un script que permita al usuario ingresar palabras mediante prompt.
El ingreso debe continuar hasta que el usuario escriba "salir".
No se deben permitir duplicados.
Al finalizar, mostrar el array final con todas las palabras únicas */


let palabras = [];
let entrada;
/* Declaro un array vacío palabras para guardar las palabras ingresadas, y una variable entrada para capturar lo que el usuario escriba en el prompt. */

do{
    entrada = prompt("Ingresá una palabra (o escribí 'salir' para terminar):");
/* Uso un bucle do...while para pedir palabras al usuario. El bucle se ejecuta al menos una vez y sigue hasta que el usuario escriba 'salir' o presione Cancelar. */

    if (entrada !== null && entrada.toLowerCase() !== "salir" && entrada.trim() !== ""){
        if (!palabras.includes(entrada)){
            palabras.push(entrada);
        }else{
            alert("Esa palabra ya fue ingresada.");
        }
    }
/* Verifico que la entrada no sea null, que no sea 'salir' (sin importar mayúsculas o minúsculas), y que no esté vacía (trim() elimina espacios). Si pasa la validación, reviso si la palabra ya fue ingresada usando includes(). Si no está, la agrego al array. Si ya está, muestro una alerta. */

}while (entrada !== null && entrada.toLowerCase() !== "salir");
/* El bucle se repite mientras el usuario no escriba 'salir' ni presione Cancelar */


document.writeln("Palabras ingresadas sin duplicados:<br>");  // titulo

for (let i = 0; i < palabras.length; i++) {
  document.writeln("• " + palabras[i] + "<br>");
}
/* Una vez finalizada la carga, muestro todas las palabras ingresadas sin duplicados. Uso un bucle for para recorrer el array y document.writeln() para escribir cada palabra en pantalla con una viñeta. */

