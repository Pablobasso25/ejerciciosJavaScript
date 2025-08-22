



let numeros = [];
let entrada;

do {
  entrada = prompt("Ingresá un número (o presioná cancelar para terminar):");

  if (entrada !== null && entrada.trim() !== "" && !isNaN(entrada)) {

    numeros.push(parseFloat(entrada));

  }else {
    alert("Entrada inválida. Por favor ingresá un número válido")
  }

} while (entrada !== null);



function encontrarMayor(numeros){
    let mayor = numeros[0];           

    for (let i = 1; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

// forma de mostrar resultado 1) creando una variable que contenga la función actualizada
let resultado = encontrarMayor(numeros); 
document.writeln("El número mayor es: " + resultado);

if (resultado < 100) {
  document.writeln("¡Es un número chico!");
}


// forma de mostrar resultado 2) directamente colocando la función actualizada
document.writeln("El número mayor es: " + encontrarMayor(numeros));