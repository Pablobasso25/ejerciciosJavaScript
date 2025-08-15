

/* Filtrar números mayores a 10

Dado el array:

let numerosMayoresA10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

Usar un bucle para crear un nuevo array con solo los números mayores a 10. */


let numerosMayoresA10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let filtrados = [];

for (let i = 0; i < numerosMayoresA10.length; i++) {
    
    if (numerosMayoresA10[i] > 10){
        filtrados.push(numerosMayoresA10[i])
    }
    
}

console.log(filtrados);
