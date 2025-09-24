
///////////////////////////// opción 1 de construir elementos (fragment) /////////////////////////////// 

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



//////////////////////////// opción 2 de construir elementos (fragment)  ////////////////////////////


const lista2 = document.querySelector('#lista2');

const arrayPaises2 = ["Chile", "Bolivia", "Ecuador"];

const fragment2 = document.createDocumentFragment();
/* <ul class="lista2">
        <li class="list">
            <b>Pais:</b>
            <span class="text-primary">Aquí va el pais</span>
        </li>
    </ul> */

arrayPaises2.forEach ((pais) => {

    const li = document.createElement('li');
    li.className = 'list';

    const b = document.createElement('b')
    b.textContent = 'Pais: ';
    
    const span = document.createElement ('span');
    span.className = 'text-primary';
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);
    fragment2.appendChild(li);
    
});

lista2.appendChild(fragment2);




/////////////////////////////////// opción 3 de construir elementos  (template) ////////////////////////////////////////

//template es una plantilla de HTML que se puede repetir varias veces no importa donde esté ubicada, solo tiene que estar dentro de "body"
// el template se utiliza para cuando tengo elementos muy complejos 

const lista3 = document.querySelector('#lista3');

const fragment3 = document.createDocumentFragment();

const liTemplate = document.querySelector('#liTemplate')

const arrayPaises3 = ["Brasil", "Colombia", "Uruguay"];


arrayPaises3.forEach((pais) => {
    
    //  hago un clon de la constante y lo guardo
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;

    // el fragment evita el reflow
    fragment3.appendChild(clone);
})

lista3.appendChild(fragment3);
