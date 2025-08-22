
// 3. Crea una función que reciba un string y devuelva el número de volcales que contiene


let frase = prompt("Escribí una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if ("aeiouAEIOU".includes(letra)){
        vocales += letra;
        alert(`Las vocales que aparecen son: ${vocales}`);
    }
} 