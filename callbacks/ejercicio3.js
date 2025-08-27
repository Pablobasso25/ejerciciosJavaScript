
//Mostrar palabras con más de 10 caracteres

const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];

const masDe1O = palabras.filter(function(palabrasLargas){

    return palabrasLargas.length > 10  
})

console.log(masDe1O);


//CON FUNCION FLECHA
const palabrasLargas = palabras.filter(palabra => palabra.length > 10);
console.log("Palabras con más de 10 caracteres:", palabrasLargas);




//si quiero saber cual es la primera que encuentre con más de 10 
const primeraLarga = palabras.find(palabra => palabra.length > 10);
console.log("Primera palabra con más de 10 caracteres:", primeraLarga);

// si quiero saber cuantas letretas tiene cada palabra del array
const longitudes = palabras.map(palabra => palabra.length);
console.log("Cantidad de letras por palabra:", longitudes);
