

// Crear un sistema para mostrar la particularidad de 3 celulares 
// Cada celular debe tener: color, peso, resolución de pantalla, resolución de camara y memoria ram
// Cada celular debe poder pernder, reiniciar, tomar fotos y grabar


class Celular{
    constructor (color, peso, tamaño, rpc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rpc;
        this.memoriaRam = ram;
        this.encendido = false
    }

    //metodos
    presionarBotonEncendido (){
        if (this.encendido == false){
            alert("Celular prendido");
            this.encendido == true;
        } else {
            alert("Celular apagado");
            this.encendido == false;
        }
    }

    reiniciar (){
        if (this.encendido == false){
            alert("Reiniciando celular")
        } else {
            alert("Celular apagado")
        }
    }

    tomarFoto(){
        alert (`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`Video grabado con una resolución de: ${this.resolucionDeCamara}`)
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

const celular1 = new Celular("Rojo", "150g", "5", "full hd", "2GB");
const celular2 = new Celular("Negro", "155g", "5.4", "full hd", "2GB");
const celular3 = new Celular("Blanco", "165g", "5.9", "hd", "1GB");

celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();

document.writeln(`
    ${celular1.mobileInfo()}</br>
    ${celular2.mobileInfo()}</br>
    ${celular3.mobileInfo()}</br>
    `);


// implementar todas las cualidades de los celulares anteriores en los celulares de alta gama