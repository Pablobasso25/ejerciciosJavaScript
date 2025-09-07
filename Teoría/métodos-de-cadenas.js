

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

// substring  (retorna un pedazo de la cadena ,el primer parametro si esta incluido y el segundo no lo incluye)

let cadena9 = "Hola como estas ? ";

resultado9 = cadena9.substring(0,5);

console.log(resultado9);

// toLowerCase() convierte una cadena a minusculas

let cadena10 = "HOLA COMO ESTAS  ? ";

resultado10 = cadena10.toLowerCase();

console.log(resultado10);

// toUpperCase() convierte una cadena a mayusculas

let cadena11 = "Hola como estas ? ";

resultado11 = cadena11.toUpperCase();

console.log(resultado11);


// devuelve una cadena de texto

let cadena12 = ["pedro", "matias"];

resultado12 = cadena12.toString();

console.log(resultado12);


// trim() elimina los espacios en blanco del principio y del final

let cadena13 = "   Hola como   ";

resultado13 = cadena13.trim();

console.log(resultado13);

// trimEnd() elimina los espacios del final 

let cadena14 = "   Hola como   ";

resultado14 = cadena14.trimEnd();

console.log(resultado14);

// trimStart() elimina los espacios del principio

let cadena15 = "   Hola como   ";

resultado15 = cadena15.trimEnd();

console.log(resultado15);