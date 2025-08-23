

/* Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */


let entrada;

do {
  entrada = prompt("Escribí una frase o palabra").toLowerCase();

  if (entrada === null && entrada.trim() === "") {     // si cancela antes sin escribir nada 
    break;
  }
  if (entrada !== null && entrada.trim() !== "") {    // si la entrada no se cancela o no se inngresa espacios vacíos, es una entrda válida
    frase = entrada;
  }else {
    alert("Entrada inválida. Intentá de nuevo.");
  }
} while (entrada.trim() === "" || entrada === null || !isNaN(entrada) ); // se repite el bucla mientras el usuario no cancele, la entrada esté vacia o escriba un número


  let resultado = "";

  for (let i = 0; i < entrada.length; i++) {
    let letra = entrada.charAt(i);   // devuelve el indice de cada letra de la frase que esta ingresando el usuario
    resultado += letra + "-";    
  }

  document.writeln(resultado)


