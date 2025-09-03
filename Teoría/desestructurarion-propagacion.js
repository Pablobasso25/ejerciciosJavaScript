

let myArray = [1, 2, 3, 4];

const person = {
    name: "Pablo",
    age: 32,
    alias: "polbasso"
}

let myvalue = myArray[1];
console.log(myvalue);

let myName = person.name;
console.log(myName);

///////// DESESTRUCTURACIÓN ///////    (capacidad de extraer valores y asignarlos a variables de manera concisas)

//desestructuración en arrays//
let [myvalue0, myvalue1, myvalue2, myvalue3, myvalue4] = myArray;    // desestructuración por orden del array o sea el indice
console.log(myvalue0);
console.log(myvalue1);
console.log(myvalue2);
console.log(myvalue3);
console.log(myvalue4);

//desestructuración en arrays con valores predeterminados//
let [myvalue5, myvalue6, myvalue7, myvalue8 = 123, myvalue9 = 0] = myArray;    // en este caso estoy definiendo el valor 0 por defecto en el caso de que no este definido al momento de declararlo arriba
console.log(myvalue5);
console.log(myvalue6);
console.log(myvalue7);
console.log(myvalue8);
console.log(myvalue9);

// ignorar elementos en array// 
let [myvalue10, , , myvalue13] = myArray;   //guarda en la variable 
console.log(myvalue10);
console.log(myvalue13);

// Desestructuración en objetos //
const {name, age, alias} = person;
console.log(name);
console.log(age);
console.log(alias);

//desestructuración en objetos con valores predeterminados//    (no es lo mismo que en arrays)
const {name2, age2, alias2, email = "pablobasso25@gmail.com"} = person;
console.log(name2); //no existe
console.log(age2);  //no existe
console.log(alias2) //no existe
console.log(email);

//desestructuración en objetos con nuevos nombres de variables// 
const {name: name3, age: age3, alias: alias3} = person;   
console.log(name3);
console.log(age3);
console.log(alias3);

//desestructuración en objetos anidados//   (ejemplo para desestructurar "name"  en el objeto "job")
const persona3 = {
    name: "Pablo",
    age: 32,
    alias: "polbasso",
    walk: function () {
        console.log("La persona camina");
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
            console.log(`La persona de ${this.exp} años de experiencia, trabaja`); // la palabra reservada "this" hace referencia al objeto en este caso a "job", no a persona3
        }
    }
}
// en este caso accede al name del objeto persona
let {name: name4} = persona3;
console.log(name4);

//en este caso accede al name del objeto job
let {name: name5, job: {name: jobName}} = persona3;
console.log(jobName);




///////// PROPRAGACIÓN ///////   (Permite expantir elementos de un objeto o array a otro objeto o array)

//propagación en arrays //
let myArray2 = [...myArray];  // es una copia de myArray
console.log(myArray2);

let myArray3 = [...myArray, 5, 6, "HOLA"];
console.log(myArray3);

let myArray4 = [...myArray2, ...myArray3];
console.log(myArray4);

//propagación en objetos //
let person4 = {...person};
console.log(person);

let person5 = {...person, email: "pablobasso25@gmail.com"};
console.log(person5);

let person6 = {...persona3, email: "pablobasso@gmail.com"};
console.log(person6);




