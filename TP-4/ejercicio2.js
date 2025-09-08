
/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta
 */

const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad){
        if (cantidad > 0){
            return this.saldo += cantidad;
        } else {
            return alert("Ingresá un valor mayor a 0");
            
        };
    },
    extraer: function(cantidad){
        if (cantidad > this.saldo){
            return alert("Saldo insuficiente. Por favor, ingresá un monto menor o igual a:" + this.saldo)
        } else {
            return this.saldo -= cantidad;
        }
    },

    informacionCuenta: function (){
        return `Hola ${this.titular}, tu estado actual de cuenta es: ${this.saldo}`
    },
}

let entrada;
do{
    entrada = prompt("¿Qué querés hacer? (ingresar / extraer / ver / salir)").toLowerCase();
    if (entrada == "ingresar") {
        let monto = parseInt(prompt("¿Que monto vas a ingresar?"));
        if(isNaN(monto) || monto <= 0){
            alert ("Monto inválido");
        } else {
            cuenta.ingresar(monto);
            alert (cuenta.informacionCuenta())
        }
    }
    if (entrada == "extraer"){
        let extraccion = parseInt(prompt("¿Que monto vas a extraer?"));
         if (isNaN(extraccion) || extraccion > cuenta.saldo){
            alert("Saldo insuficiente. Por favor, ingresá un monto menor o igual a: " + cuenta.saldo)
         } else {
            cuenta.extraer(extraccion);
            alert (cuenta.informacionCuenta());
         }
    }
    if (entrada == "ver"){
        alert (cuenta.informacionCuenta())
    }
} while (entrada !== "salir")
