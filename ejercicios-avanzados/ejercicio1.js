
// Desarrollar un sistema en JavaScript que permita crear múltiples cuentas bancarias, operar con ellas de forma individual y realizar transferencias entre cuentas, utilizando programación orientada a objetos y validaciones interactivas.

class Cuenta {
    constructor(titular, saldoInicial = 0) {
        this.nombre = titular;
        this.saldo = saldoInicial;
    }

    // Método para ingresar dinero
    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        } else {
            return "⛔ Ingresá un valor mayor a 0";
        }
    }

    // Método para extraer dinero
    extraer(cantidad) {
        if (cantidad > this.saldo) {
            return `⛔ Saldo insuficiente. Tenés disponible: $${this.saldo}`;
        } else {
            this.saldo -= cantidad;
            return `✅ Extracción exitosa`;
        }
    }

    // Método para mostrar información de la cuenta
    informacionCuenta() {
        return `Hola ${this.nombre}, tu saldo es: $${this.saldo}`;
    }


    // Método para transferir
    transferirA(destinatario, monto){
        if (typeof monto === "number" &&   // Verifica que el monto sea un número (no texto, ni NaN, ni undefined)
            monto > 0 &&                   // Asegura que el monto sea positivo
            monto <= this.saldo &&         // Verifica que la cuenta actual (this) tenga suficiente saldo para hacer la transferencia
            destinatario &&                // Verifica que el destinatario exista (no sea undefined, null, etc.)
            destinatario !== this)         // // Asegura que no se esté transfiriendo a la misma cuenta.
            {        
            this.saldo -= monto;
            destinatario.ingresar(monto);   // destinatario ya es una instancia de la clase "Cuenta" por lo tanto puedo agregarle otros métodos, en este caso el de ingresarle dinero pasandole como parametro la el monto
            return `✅ Transferencia exitosa\n✅Transferiste $${monto} a ${destinatario.nombre}`;
            }
            if ( typeof monto !== "number" || monto <= 0) {
                return "❌ Monto inválido"
            }
            if (monto > this.saldo){
                return "⛔ Saldo insuficiente"
            }
            if (destinatario === this){
                return "❌ No podés transferir a la misma cuenta"
            }
            if (!destinatario){
                return "⛔ La cuenta destinataria no existe"
            }
        }
}

//////////////////////// CREACIÓN DE MÚLTIPLES CUENTAS ///////////////////////////////////

// array contenedor de cuentas
let cuentasCreadas = [];
let crearOtra;


// Bucle para crear múltiples cuentas

do {
    // pido datos para crear la cuenta
    let nombre = prompt("Ingresá tu nombre de usuario para crear tu cuenta");
    let saldoInicial = parseFloat(prompt("Ingresá el saldo inicial"));

    // validaciones de datos ingresados
    if (nombre && !isNaN(saldoInicial) && saldoInicial >= 0) {  // si los datos son válidos (ingresa un nombre, el saldo es un número y el saldo es mayor a 0), se contunua
        let nuevaCuenta = new Cuenta(nombre, saldoInicial);    // creo una nueva instancia que guarda los datos de la cuenta
        cuentasCreadas.push(nuevaCuenta);                      // se guardan los datos de "nuevaCuenta" en el array "cuentas"
        alert("✅ Cuenta creada con exito.");
    } else {
        alert("❌ Datos inválidos. Intentá de nuevo.");
    }

    crearOtra = prompt("¿Querés crear otra cuenta? (si / no)").toLowerCase();
} while (crearOtra === "si"); // se repide el bucle mientras el usuario ingrese "si"


/////////////////////////////////  FUNCIÓN QUE DESPLIEGA UN MENU INTERACTIVO PARA EL USUARIO (hace uso de los métodos creados en la clase) /////////////////////////////////

//ahora, creo una nueva función fuera del constructor porque no forma parte del comportamiento interno de cada cuenta sino que es aplicada sobre una instancia ya creada
function operarConCuenta(cuenta) {  // el parametro "cuenta" es simbólico, podria llamarse de cualquier otra forma , mas adelante cuando llamo a la función le doy el parametro verdadero
    let entrada;

    do {
        entrada = prompt(
  "¿Qué querés hacer? ingresa la opción. Ej: 1\n" +
  "1- ingresar dinero\n" +
  "2- extraer dinero\n" +
  "3- transferir a otra cuenta\n" +
  "4- ver saldo disponible\n" +
  "5- salir"
).toLowerCase();
       
        if (entrada == "1") {
            let monto = parseFloat(prompt("¿Que monto vas a ingresar?"));
            if (isNaN(monto) || monto <= 0) {
                alert("❌ Monto inválido");
            } else {
                cuenta.ingresar(monto);
                alert(cuenta.informacionCuenta());
            }
        }
        if (entrada == "2") {
            let extraccion = parseFloat(prompt("¿Que monto vas a extraer?"));
            if (isNaN(extraccion) || extraccion > cuenta.saldo) {
                alert(
                    "❌ Saldo insuficiente. Por favor, ingresá un monto menor o igual a: " + cuenta.saldo);
            } else {
                cuenta.extraer(extraccion);
                alert(cuenta.informacionCuenta());
            }
        }
        if (entrada == "3"){
            realizarTransferencia (cuenta)
        }
        if (entrada == "4") {
            alert(cuenta.informacionCuenta());
        }
    } while (entrada !== "5");
}


/////////////////////////// BUSCAR LAS CUENTAS CREADAS /////////////////////////////////////////////////

// se muestra las cuentas creadas disponibles
let nombreDeCuentas = cuentasCreadas.map(c => "- " + c.nombre).join("➡️");
alert (`Tus cuentas disponibles son:\n${nombreDeCuentas}`)


// Búsqueda de la cuenta por el nombre
let resultado;                    // se la declara fuera del bucle para poder utilizarla luego cuando llamo a la función

do{
    let buscarCuenta = prompt(`¿A que cuenta querés ingresar?\n➡️${nombreDeCuentas}`).toLowerCase();
    resultado = cuentasCreadas.find((cuenta) => cuenta.nombre.toLowerCase() === buscarCuenta); // el parametro "cuenta" es simbólico, podria llamarse de cualquier otra forma

    // Validación de búsqueda y ejecución del menú
    if (!resultado) {    // Si .find(...) no encuentra ninguna coincidencia, devuelve undefined, Entonces "!resultado" se convierte en true, y se ejecuta el bloque del if.
        alert("❌ No se encontró ninguna cuenta con ese nombre. Intentá de nuevo.");
    }
} while (!resultado)  // si se encuentra una cuenta válida, sale del bucle y contunua

operarConCuenta(resultado); // si se encuentra la cuenta, se pasa la pasa como parametro a la función y se opera con ella



///////////////////////////////// FUNCIÓN PARA HACER TRANSFERENCIAS (hace uso del metodo creado en la clase (transferirA)) /////////////////////////////////////////

function realizarTransferencia(cuentaOrigen) {
  let nombreDeCuentas = cuentasCreadas           // "cuentasCreadas" Es un array de objetos, donde cada objeto representa una cuenta
    .filter(c => c !== cuentaOrigen)             // Filtra el array para excluir la cuenta que está operando (cuentaOrigen). devuelve un nuevo array con todas las cuentas menos la actual
    .map(c => c.nombre)                          // Transforma cada objeto del array en solo su nombre. Devuelve un array de strings solo con los nombres de las cuentas
    .join("\n");                                 // Une todos los elementos del array en un solo string, separados por saltos de línea.

  let cuentaDestino;
  do {
    let nombreDestino = prompt(`¿A qué cuenta querés transferir?\n➡️${nombreDeCuentas}`).toLowerCase();  //Pide al usuario el nombre de la cuenta destino y la busca en el array cuentasCreadas
    cuentaDestino = cuentasCreadas.find(c => c.nombre.toLowerCase() === nombreDestino);   // find () devuelve La cuenta que coincide con el nombre ingresado, o undefined si no existe

    if (!cuentaDestino) {       // si no se encuentra la cuenta devuelve un mensaje de error
      alert("❌ No se encontró ninguna cuenta con ese nombre. Intentá de nuevo.");
    } else if (cuentaDestino === cuentaOrigen) {   // Si el usuario eligió su propia cuenta, también lo bloquea.
      alert("⛔ No podés transferirte a vos mismo.");
      cuentaDestino = null;
    }
  } while (!cuentaDestino);  // repite el bucle hasta que elija una cuenta válida


  let monto = parseFloat(prompt(`¿Qué monto querés transferir?\n💲Tu saldo actual es: $${cuentaOrigen.saldo}`));

  if (isNaN(monto) || monto <= 0) {  //Verifica que el monto sea un número válido y mayor a cero.
    alert("❌ Monto inválido.");
    return;
  }

  let mensaje = cuentaOrigen.transferirA(cuentaDestino, monto);  //activa la función transferirA creada en la class Cuenta
  alert(mensaje);
}



