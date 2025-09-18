
const autor = {
    nombre: "Alvaro Morillo",
    descripcion: "Fanático de la tecnología y profesor de las artes de programación con Javascript",
    imagen: "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg?semt=ais_incoming&w=740&q=80"

}


const columnaTarjeta = document.createElement ("div")   // creo el nodo etiqueta "div"
columnaTarjeta.className = "col"                        // llamo al div y le agrego una clase

// creo un template string (el objetivo es que tarjetaAutor se un contenido de columnaTarjeta)
const tarjetaAutor = `<div class="card" style="width: 18rem;">
                    <img 
                    src="${autor.imagen} "
                    class="card-img-top pt-2" 
                    alt="${autor.nombre} ">
                    <div class="card-body">
                        <h5 class="card-title">${autor.nombre} </h5>
                        <p class="card-text">
                            ${autor.descripcion}
                        </p>
                        <a href="#" class="btn btn-primary">Ver perfil</a>
                    </div>
                </div>`

columnaTarjeta.innerHTML = tarjetaAutor    //agrego contenido html al nodo "div" ahora columnaTarjeta tiene todo el contenido y pasa a ser un hijo
document.querySelector("#contenedor_tarjeta").append(columnaTarjeta)  // llamo al nodo padre en este caso el div contenedor de la card y le agego "columnaTarjeta"





