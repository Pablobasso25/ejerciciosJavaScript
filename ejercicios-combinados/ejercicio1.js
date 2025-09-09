
// Crear un sistema de multiples cuentas bancarias 

    class Cuenta {
        constructor (titular, saldoInicial = 0){
            this.titular = titular;
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