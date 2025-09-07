

// concat() (junta dos o más cadenas y retorna una nueva)

let cadena = "Hola como estas ?";

resultado = cadena.concat(" chauuu");

console.log(resultado);

// startWith() (si una cadena comienza con los caracteres de otra cadena, devuelve true o false)

let cadena1 = "Hola como estas ?";

resultado1 = cadena1.startsWith("Hola");

console.log(resultado1);

// endWith() (si una cadena termina con los caracteres de la otra cadena, devuelve true o false)

let cadena2 = "Hola como estas ?";

resultado2 = cadena2.endsWith("as ?");

console.log(resultado2);

// includes() (si una cadena puede encontrarse dentro de otra cadena (en cualquier parte), devuelve true o false)

let cadena3 = "Hola como estas ?";

resultado3 = cadena3.includes("z");

console.log(resultado3);

// indexOf() (devuelve el indice del primer caracter de la cadena, si no existe devuelve -1)

let cadena4 = "Hola como como estas ?";

resultado4 = cadena4.indexOf("como"); //devuelve la primera pocicion que encuentra

console.log(resultado4); 
console.log(cadena4[3]);

// lastIndexOf() (devuelve el indice del primer caracter de la cadena, si no existe devuelve -1)

let cadena5 = "Hola como como estas ?";

resultado5 = cadena5.lastIndexOf("como"); //devuelve la ultima pocicion que encuentra

console.log(resultado5);

// padStart()  y padEnd()

let cadena6 = "Hola";

resultado6 = cadena6.padStart(15, "1");
resultado66 = cadena6.padEnd(20, "chau")

console.log(resultado66);

// repeat() (devuelve la misma cadena pero repetida las veces que nosotros le indiquemos)

let cadena7 = "Hola ";

resultado7 = cadena7.repeat(4);

console.log(resultado7);



// split divide la cadena como le pidamos y devielve un array

let cadena8 = "Hola como estas ? ";

resultado8 = cadena8.split(",");

console.log(resultado8);

