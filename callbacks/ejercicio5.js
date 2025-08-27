

//Palabras que empiezan con vocal

const palabras = ["javascript", "programación", "computadora", "algoritmo", "desarrollo"];

const palabrasConVocal = palabras.filter(palabra => {    // se recoore el array palabras
    const primeraLetra = palabra.charAt(0).toLowerCase();  // charAt toma la primera letra de cada palabra 
    return["a", "e", "i", "o", "u"].includes(primeraLetra); // se crea un array nuevo con la vocales,(.includes(primeraLetra)) se encarga de verificar si la letra encontrada por el metodo charAt coincide con alguna del array "vocales"
})

console.log(palabrasConVocal);
