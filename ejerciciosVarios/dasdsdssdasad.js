let num
let multiplo

multiplo = [4, 9, 5]

for (num = 1; num <= 500; num++) {

    switch (true) {
        case (num % multiplo[0] === 0):
            document.writeln(num + ` es múltiplo de ${multiplo[0]}<br>`);
            break;
        case (num % multiplo[1] === 0):
            document.writeln(num + ` es múltiplo de ${multiplo[1]}<br>`);
            break;
        default:
            document.writeln(num + "<br>");
    }
    if (num % 5 === 0) {
        document.writeln("--------------------<br>");
    }

}