
/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto. */


const auto = {
    color: "rojo",
    marca: "fiat",
    modelo: "sedan",

    encender: function (){
        console.log("El auto está encendido");
        
    },

    apagar: function (){
        console.log("El auto está apagado");
        
    }
};

auto.encender()
auto.apagar()

