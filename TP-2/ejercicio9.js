/* Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */



let multiplo = [4, 9, 5];

for (let num = 1; num <= 500; num++) {
    if (num % multiplo[0] === 0) {
        document.writeln(`${num} es múltiplo de ${multiplo[0]}<br>`);
    } else if (num % multiplo[1] === 0) {
        document.writeln(`${num} es múltiplo de ${multiplo[1]}<br>`);
    } else if (num % multiplo[2] === 0) {
        document.writeln(`${num} es múltiplo de ${multiplo[2]}<br>`);
    } else {
        document.writeln(num + "<br>");
    }
}