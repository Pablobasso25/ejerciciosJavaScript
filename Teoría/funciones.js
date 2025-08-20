
            /////////////////Funciones declarativas ////////////////////////

            //ej:1
function saludar() {    //sin parámetros

    console.log("Hola a todos");
} 
saludar()                  //Llamo a la función para que se ejecute


            //ej:2
function saludar2(nombre) {    //con parámetros
    console.log("Hola", nombre);    // en el console.log tengo  que llamar al parámetro que quiero que me muestre
    
}
saludar2("Pablo")    // tengo que llamar a la funcion para que se ejecute y ademas le tengo que asignar un valor

           //ej:3 (con retorno)
function saludar3(nombre2) {

    return `Hola ${nombre2} como estas?`                            // sirve para detener la funcion en ese punto 

}
saludar3('Pedro') 