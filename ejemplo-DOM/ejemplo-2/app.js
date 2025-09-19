
// creo un objeto

const autor = {
    nombre: "Alvaro Morillo",
    usuario: "",
    correo: "",
    descripcion: "Fanático de la tecnología y profesor de las artes de programación con Javascript",
    imagen: "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg?semt=ais_incoming&w=740&q=80"

}

// creo una función para crear tarjeta a partir de los datos del objeto

const crearTarjeta = () => {

// creando la etiquetas
const columnaTarjeta = document.createElement ('div');
const card = document.createElement ('div');
const img = document.createElement ('img');
const cardBody = document.createElement ('div');
const cardTitle = document.createElement ('h5');
const cardText = document.createElement ('p');
const correo = document.createElement ('p')
const btn = document.createElement ('a');

// agregando clases y atributos a las etiquetas 
columnaTarjeta.className = 'col mt-5';
card.className = 'card';
card.style.width = '18rem' ;
img.className = 'card-img-top';
img.setAttribute('src', `${autor.imagen}`);
img.setAttribute('alt', `${autor.nombre}`);
cardBody.className = 'card-body';
cardTitle.className = 'card-title';
cardTitle.textContent = `${autor.nombre}`;
cardText.className = 'card-text';
cardText.textContent = `${autor.descripcion}`;
correo.className = 'text-muted'
correo.textContent = `${autor.correo}`;
btn.className = 'btn btn-secondary';
btn.setAttribute('href', '#');
btn.textContent = 'Ver perfil';

// agrego los hijos a los padres
const row = document.querySelector('.row');   // contenedor padre que no tuvo modificaciones pero puede tenerlas 
row.appendChild(columnaTarjeta);
columnaTarjeta.appendChild(card);
card.appendChild(img);
card.appendChild(cardBody);
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardBody.appendChild(btn);
}

// función para modificar el autor dependiendo de los datos que se ingresa en los formularios

const modificarAutor = (event) => {
    event.preventDefault();

    //creo las variables que van a contener lo que se ingrese en los imputs
    const nombre = document.querySelector('#nombre').value;
    const usuario = document.querySelector('#usuario').value;
    const email = document.querySelector('#email').value;

    //llamo al objeto y modifico los valores
    autor.nombre = nombre;
    autor.usuario = usuario;
    autor.email = email;
}

crearTarjeta()








/* const columnaTarjeta = document.createElement ("div")   // creo el nodo etiqueta "div"
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
document.querySelector("#contenedor_tarjeta").append(columnaTarjeta)  // llamo al nodo padre en este caso el div contenedor de la card y le agego "columnaTarjeta" */





