
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
