

/* Estación del año:

Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno). */



let mes;

do {
  mes = prompt("Ingresá un mes del 1 al 12 para saber en qué estación estás");

  if (mes === null || mes.trim() === "" || isNaN(mes)) {
    alert("Entrada inválida. Por favor ingresá un número del 1 al 12.");
    continue;
  }

    switch (mes) {
        case "12":
        case "1":
        case "2":
            alert("Verano");
            break;
        case "3":
        case "4":
        case "5":
            alert("Otoño");
            break;
        case "6":
        case "7":
        case "8":
            alert("Invierno");
            break;
        case "9":
        case "10":
        case "11":
            alert("Primavera");
            break;            
        default:
            alert("Mes fuera de rango. Ingresá un número del 1 al 12.");
            break;
    }
}while (mes < 1 || mes > 12 || isNaN(mes));     // se repite el bucle hasta que el usuario ponga un numero válido
