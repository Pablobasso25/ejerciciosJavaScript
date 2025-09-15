let contador = 0;

    const contadorElemento = document.getElementById("contador");
    const btnIncrementar = document.getElementById("incrementar");
    const btnDecrementar = document.getElementById("decrementar");
    const btnReiniciar = document.getElementById("reiniciar");
    const btnModo = document.getElementById("modo");
    const body = document.body;

    btnIncrementar.addEventListener("click", () => {
      contador++;
      contadorElemento.innerText = contador;
    });

        //otra forma //
    function decrementar () {
        if (contador > 0){
            contador--;
            contadorElemento.innerText = contador;
        }
    }

/*     btnDecrementar.addEventListener("click", () => {
      if (contador > 0) {
        contador--;
        contadorElemento.innerText = contador;
      }
    }); */

    btnReiniciar.addEventListener("click", () => {
      contador = 0;
      contadorElemento.innerText = contador;
    });

    btnModo.addEventListener("click", () => {
      if (body.classList.contains("modo-claro")) {
        body.classList.replace("modo-claro", "modo-oscuro");
        btnModo.textContent = "Modo Claro";                   // cuando se hace click, cambia el texto, por eso utilizo .textContent0
        btnModo.classList.replace("btn-dark", "btn-light");
      } else {
        body.classList.replace("modo-oscuro", "modo-claro");
        btnModo.textContent = "Modo Oscuro";
        btnModo.classList.replace("btn-light", "btn-dark");
      }
    });
