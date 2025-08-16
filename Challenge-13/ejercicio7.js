

/* Cálculo de IMC

Diseñar un algoritmo que calcule el IMC con peso (kg) y altura (m).

Mostrar el resultado con su categoría:

Menos de 18.5 → Peso bajo

Entre 18.5 y 24.99 → Peso normal

25 o más → Sobrepeso

Fórmula:

imc = peso / (altura ** 2); */


let peso;

do{
    peso = prompt("Ingresá tu peso en kilogramos (ej: 70)");
    
}while (peso === null || peso.trim() === "" || isNaN(peso));
peso = parseFloat(peso);


let altura;

do{
    altura = prompt("Ingresá tu altura en metros (ej: 1.75)");
} while (altura === null || altura.trim() === "" || isNaN(altura));
altura = parseFloat(altura);


let imc = peso / (altura * altura);
let resultado;

if (imc < 18.5) {
    resultado = "Peso bajo";
}else if (imc < 25){
    resultado = "Peso normal";
}else{
    resultado = "Sobrepeso"
}
alert(`Tu IMC es ${imc.toFixed(2)} - Categoría: ${resultado}`);

