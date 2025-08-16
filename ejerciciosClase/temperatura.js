/* Ejercicio 2: Conversión de Unidades de Temperatura

Descripción: Crea un programa que convierta una temperatura de grados Celsius a grados Fahrenheit.

Requisitos:

Pedir al usuario que ingrese una temperatura en grados Celsius.
Convertir la temperatura a grados Fahrenheit usando la fórmula: F=C×9/5+32
Imprimir la temperatura en grados Fahrenheit */

let tempC
let tempF 

tempC = parseInt(prompt("Ingrese la temperatura en °C"));
tempF = tempC * 9 / 5 + 32;

alert(`La temperatura en grados Fahrenheit es de ${tempF}°F`);