

/*  Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
 */

for (let i = 1; i <= 30; i++) {    // Bucle principal que recorre los números del 1 al 30
  
    let linea = "";
    for (let a = 0; a < i; a++) {            // Bucle interno: repite el número 'i' tantas veces como su valor
    linea += i;                              // se concatena el número 'i' al string 'linea'
  }

  document.writeln(linea + "<br>");
}
