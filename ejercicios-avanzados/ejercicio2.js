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
            return `Transferiste $${monto} a ${destinatario.nombre}`;
            }
            if ( typeof monto !== "number" || monto <= 0) {
                return "Monto inválido"
            }
            if (monto > this.saldo){
                return "Saldo insuficiente"
            }
            if (destinatario === this){
                return "No podés transferir a la misma cuenta"
            }
            if (!destinatario){
                return "La cuenta destinataria no existe"
            }
        }
}

let cuenta1 = new Cuenta("Pablo", 1000);
let cuenta2 = new Cuenta("Ana", 500);
cuenta1.transferirA(cuenta2, 200);

console.log(cuenta1);
console.log(cuenta2);


