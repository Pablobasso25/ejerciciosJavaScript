// Números pares mayores a 5

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paresMayores = numeros.filter(function(numeros){
    
    return numeros > 5 && numeros % 2 === 0;;
})

console.log(paresMayores);

