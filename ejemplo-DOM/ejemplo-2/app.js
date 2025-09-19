
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
    const row = document.getElementById("contenedor_tarjeta");
    row.innerHTML = ""; // limpia tarjetas anteriores

  // creando la etiquetas

  const columnaTarjeta = document.createElement("div");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardText = document.createElement("p");
  const correo = document.createElement("p");
  const btn = document.createElement("a");

  // agregando clases y atributos a las etiquetas
  columnaTarjeta.className = "col mt-5";
  card.className = "card";
  card.style.width = "18rem";
  img.className = "card-img-top";
  img.setAttribute("src", `${autor.imagen}`);
  img.setAttribute("alt", `${autor.nombre}`);
  cardBody.className = "card-body";
  cardTitle.className = "card-title";
  cardTitle.textContent = `${autor.nombre}`;
  cardText.className = "card-text";
  cardText.textContent = `${autor.descripcion}`;
  correo.className = "text-muted";
  correo.textContent = `${autor.correo}`;
  btn.className = "btn btn-secondary";
  btn.setAttribute("href", "#");
  btn.textContent = "Ver perfil";

  // agrego los hijos a los padres

  row.appendChild(columnaTarjeta);
  columnaTarjeta.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(correo);
  cardBody.appendChild(btn);
};

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
    autor.correo = email;

    crearTarjeta()  // cuando se rellenan los campos del input, se dispara de nuevo la función "crearTarjeta()"
    document.getElementById("formulario").reset(); // limpiar formulario
}


document.getElementById('formulario').addEventListener('submit', modificarAutor)

