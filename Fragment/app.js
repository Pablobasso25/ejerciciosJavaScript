
// 1- opción 1 de construir elementos 

const lista = document.querySelector('#lista');

const arrayPaises = ["Argentina", "Perú", "México"];

const fragment = document.createDocumentFragment();   // el fragmento no pertenece al dom por lo tanto no se muestra reflejado en la pagina hasta que se lo invoca


arrayPaises.forEach((pais) => {

    //creo la lista
    const li = document.createElement('li');
    li.textContent = pais;    // por cada vuelta que recorre del array, agrega un pais a la lista
    fragment.appendChild(li);  // en cada vuelta agrega el pais dentro del fragment que todavia no esta dentro del dom
});


// ahora para que se muestre en el dom, agrego ese "fragment" dentro del "ul"
lista.appendChild(fragment);



// 2- opción 2 de contruir elementos

const lista2 = document.querySelector('#lista');

const arrayPaises2 = ["Argentina", "Perú", "México"];

const fragment2 = document.createDocumentFragment();