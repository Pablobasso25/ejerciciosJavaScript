

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