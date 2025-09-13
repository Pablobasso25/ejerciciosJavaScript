// Clase que representa una cuenta bancaria
class Cuenta {
    constructor(titular, saldoInicial = 0) {
        this.nombre = titular;         // nombre del titular
        this.saldo = saldoInicial;     // saldo inicial
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

// Array que almacena todas las cuentas creadas
let cuentasCreadas = [];
let crearOtra;

// Bucle para crear múltiples cuentas
do {
    let nombre = prompt("Ingresá tu nombre de usuario para crear tu cuenta");
    let saldoInicial = parseFloat(prompt("Ingresá el saldo inicial"));

    // Validación de datos ingresados
    if (nombre && !isNaN(saldoInicial) && saldoInicial >= 0) {
        let nuevaCuenta = new Cuenta(nombre, saldoInicial); // se crea la instancia
        cuentasCreadas.push(nuevaCuenta);                   // se guarda en el array
        alert("Cuenta creada con éxito.");
    } else {
        alert("Datos inválidos. Intentá de nuevo.");
    }

    crearOtra = prompt("¿Querés crear otra cuenta? (si / no)").toLowerCase();
} while (crearOtra === "si");

// Función que permite operar sobre una cuenta específica
function operarConCuenta(cuenta) {
    let entrada;
    do {
        entrada = prompt("¿Qué querés hacer? (ingresar / extraer / ver / salir)").toLowerCase();

        if (entrada === "ingresar") {
            let monto = parseFloat(prompt("¿Qué monto vas a ingresar?"));
            if (isNaN(monto) || monto <= 0) {
                alert("Monto inválido");
            } else {
                cuenta.ingresar(monto);
                alert(cuenta.informacionCuenta());
            }
        }

        if (entrada === "extraer") {
            let extraccion = parseFloat(prompt("¿Qué monto vas a extraer?"));
            if (isNaN(extraccion) || extraccion > cuenta.saldo) {
                alert("Saldo insuficiente. Por favor, ingresá un monto menor o igual a: " + cuenta.saldo);
            } else {
                cuenta.extraer(extraccion);
                alert(cuenta.informacionCuenta());
            }
        }

        if (entrada === "ver") {
            alert(cuenta.informacionCuenta());
        }

    } while (entrada !== "salir");
}

// Búsqueda de cuenta por nombre
let buscarCuenta = prompt("Ingresá tu nombre de usuario para acceder a tu cuenta").toLowerCase();
let resultado = cuentasCreadas.find(cuenta => cuenta.nombre.toLowerCase() === buscarCuenta);

// Validación de búsqueda y ejecución del menú
if (resultado) {
    operarConCuenta(resultado); // se pasa la cuenta encontrada como parámetro
} else {
    alert("No se encontró ninguna cuenta con ese nombre.");
}