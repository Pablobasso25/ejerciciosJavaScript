

//Encontrar el primer número divisible por 3


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeroDivisible = numeros.find(function(numeros){
    
    return numeros % 3 === 0;
})

console.log(numeroDivisible);