
// Crear un sistema de multiples cuentas bancarias 

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
            return "Ingresá un valor mayor a 0";
        }
    }

    // Método para extraer dinero
    extraer(cantidad) {
        if (cantidad > this.saldo) {
            return `Saldo insuficiente. Tenés disponible: $${this.saldo}`;
        } else {
            this.saldo -= cantidad;
            return `Extracción exitosa`;
        }
    }

    // Método para mostrar información de la cuenta
    informacionCuenta() {
        return `Hola ${this.nombre}, tu estado actual de cuenta es: $${this.saldo}`;
    }
}

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
        alert("Cuenta creada con exito.");
    } else {
        alert("Datos inválidos. Intentá de nuevo.");
    }

    crearOtra = prompt("¿Querés crear otra cuenta? (si / no)").toLowerCase();
} while (crearOtra === "si"); // se repide el bucle mientras el usuario ingrese "si"



//ahora, creo una nueva función fuera del constructor porque no forma parte del comportamiento interno de cada cuenta sino que es aplicada sobre una instancia ya creada

function operarConCuenta(cuenta) {  // el parametro "cuenta" es simbólico, podria llamarse de cualquier otra forma , mas adelante cuando llamo a la función le doy el parametro verdadero
    let entrada;
    do {
        entrada = prompt(
  "¿Qué querés hacer?\n" +
  "- ingresar\n" +
  "- extraer\n" +
  "- ver\n" +
  "- salir"
).toLowerCase();
       
        if (entrada == "ingresar") {
            let monto = parseFloat(prompt("¿Que monto vas a ingresar?"));
            if (isNaN(monto) || monto <= 0) {
                alert("Monto inválido");
            } else {
                cuenta.ingresar(monto);
                alert(cuenta.informacionCuenta());
            }
        }
        if (entrada == "extraer") {
            let extraccion = parseFloat(prompt("¿Que monto vas a extraer?"));
            if (isNaN(extraccion) || extraccion > cuenta.saldo) {
                alert(
                    "Saldo insuficiente. Por favor, ingresá un monto menor o igual a: " + cuenta.saldo);
            } else {
                cuenta.extraer(extraccion);
                alert(cuenta.informacionCuenta());
            }
        }
        if (entrada == "ver") {
            alert(cuenta.informacionCuenta());
        }
    } while (entrada !== "salir");
}

let nombreDeCuentas = cuentasCreadas.map(c => "- " + c.nombre).join("\n");
alert (`Tus cuentas disponibles son:\n${nombreDeCuentas}`)

// Búsqueda de la cuenta por el nombre
let resultado;   // se la declara fuera del bucle para poder utilizarla luego cuando llamo a la función
do{
    let buscarCuenta = prompt(`¿A que cuenta querés ingresar?\n${nombreDeCuentas}`).toLowerCase();
    resultado = cuentasCreadas.find((cuenta) => cuenta.nombre.toLowerCase() === buscarCuenta); // el parametro "cuenta" es simbólico, podria llamarse de cualquier otra forma

    // Validación de búsqueda y ejecución del menú
    if (!resultado) {    // Si .find(...) no encuentra ninguna coincidencia, devuelve undefined, Entonces "!resultado" se convierte en true, y se ejecuta el bloque del if.
        alert("No se encontró ninguna cuenta con ese nombre. Intentá de nuevo.");
    }
} while (!resultado)  // si se encuentra una cuenta válida, sale del bucle y contunua

    operarConCuenta(resultado); // si se encuentra la cuenta, se pasa la pasa como parametro a la función y se opera con ella

