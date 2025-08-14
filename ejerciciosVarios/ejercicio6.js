
/*  Crear un menú interactivo que permita al usuario:

- Agregar una ciudad
- Ver lista de ciudades
- Eliminar la última ciudad agregada
- Salir

El menú debe repetirse hasta que el usuario elija la opción 4.*/



let ciudades = [];
let opcion;

do{
    opcion = prompt(
        "Menú de ciudades:\n" +
        "• 1 Agregar ciudad\n" +
        "• 2 Ver lista de ciudades\n" +
        "• 3 Eliminar ultima ciudad\n" +
        "• 4 Salir"
    );

    switch (opcion) {
        case "1":
            let nuevaCiudad = prompt("Ingresa el nombre de la ciudad:");
            if (nuevaCiudad !== null && nuevaCiudad.trim() !== "") {
                ciudades.push(nuevaCiudad.trim());
                alert("Ciudad agregara con exito");
            } else{
                alert("Entrada inválida");
            }
            break;

        case "2":
            if (ciudades.length > 0) {
                alert("Lista de ciudades:\n" + ciudades.join("\n"));
            } else{
                alert("La lista está vacia");
            }
            break;

        case "3":
            if (ciudades.length > 0) {
                let eliminada = ciudades.pop();
                alert("Ciudad eliminada:" + eliminada);
            } else {
                alert("No hay ciudades para eliminar");
            }
            break;

        case "4":
            alert("¡¡Nos vemos pronto!!");
            break;
    
        default:
            alert("Opción inválida. Elegí entre 1 y 4");
            break;
    }
} while (opcion !== "4");




      /////// COMO SE LEE //////

/*
• 1) Inicio un bucle do...while que se va a repetir hasta que el usuario elija la opción 4. En cada vuelta, muestro un menú con prompt y guardo la opción elegida en la variable opcion.

• 2) Uso un  para evaluar la opción ingresada. Según el valor, ejecuto una acción distinta.

• 3) Si el usuario elige la opción 1, le pido que ingrese el nombre de una ciudad. Si la entrada es válida (no vacía ni cancelada), la agrego al array  usando . Si no, muestro una alerta de error.

• 4) Si elige la opción 2, muestro la lista completa de ciudades usando join() para separarlas por saltos de línea. Si el array está vacío, aviso que no hay ciudades.

• 5) Si elige la opción 3, elimino la última ciudad agregada usando pop() y muestro cuál fue eliminada. Si no hay ciudades, muestro una alerta.

• 6) Si elige la opción 4, muestro un mensaje de despedida y el bucle se termina.

• 7) Si el usuario ingresa algo que no está entre 1 y 4, muestro una alerta indicando que la opción es inválida.

• 8) El bucle se repite mientras la opción elegida no sea 4. Cuando el usuario elige salir, se termina el ciclo.

 */
