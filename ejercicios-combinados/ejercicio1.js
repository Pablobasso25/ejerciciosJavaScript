
// Crear un sistema de multiples cuentas bancarias 

    class Cuenta {
        constructor (titular, saldoInicial = 0){
            this.nombre = titular;
            this.saldo = saldoInicial
        }

        ingresar (cantidad){
            if (cantidad > 0){
                this.saldo += cantidad;
            } else {
                return "Ingresá un valor mayor a 0"
            }
        }

        extraer (cantidad){
            if (cantidad > this.saldo){
                return `Saldo insuficiente. Tenés disponible: $${this.saldo}`;
            }else {
                this.saldo -= cantidad;
                return `Extracción exitosa`
            }
        }

        informacionCuenta (){
            return `Hola ${this.titular}, tu estado actual de cuenta es: $${this.saldo}`;
        }
    }

    // array contenedor de cuentas 
    let cuentas = [];
    let crearOtra;

    do{
        // pido datos para crear la cuenta 
        let nombre = prompt("Ingresá tu mombre de usuario para crear tu cuenta");
        let saldoInicial = parseFloat(prompt("Ingresá el saldo inicial"));

        // validaciones de datos
        if (nombre && !isNaN(saldoInicial) && saldoInicial >= 0) { // si los datos son válidos (ingresa un nombre, el saldo es un número y el saldo es mayor a 0), se contunua 
            let nuevaCuenta = new cuenta(titular, saldoInicial);  // creo una nueva instancia que guarda los datos de la cuenta
            cuentas.push(nuevaCuenta);
        }
    }