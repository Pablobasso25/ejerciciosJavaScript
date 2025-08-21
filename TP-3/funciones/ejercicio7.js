

/*  Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar"));
function tablaMultiplicar(numero){
    document.writeln(` <table> <thead>
        <tr>
        <th col span="2">Tabla de Multiplicar</th>
        </tr>
        </thead>
        <tbody>`);
        for (let i = 1; i <= 10; i++){
            document.writeln(`<tr>
                <td>${numero} * ${i} </td>
                <td>${numero * i}</td>
                </tr>`);
        }
        document.writeln(`</tbody> </table>`);
}
tablaMultiplicar(numero); 


