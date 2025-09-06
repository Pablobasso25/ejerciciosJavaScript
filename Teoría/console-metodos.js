



// log
console.log("Hola como estas? ");

// error
console.error("Este es un mensaje de error");


// warn
console.warn("Este es un mensaje de advertencia");

// info
console.info("Este es un mensaje de información adicional");

// table

let data = [
    ["pablo", 32],
    ["juan", 27]
]
console.table(data);

data = [
    {name: "pablo", age: 32},
    {name: "Juan", age: 30}
]

console.table(data);

// grup
console.group("Usuario");
console.log("Nombre: Pablo");
console.log("Edad: 32");
console.groupEnd();

// time
console.time("Tiempo de ejecución");

for (let i = 0; i < 1000; i++){

}

console.timeEnd("Tiempo de ejecución")

// assert
let edad = 18;
console.assert(edad >= 18, "El usuario debe ser mayor de edad.")
