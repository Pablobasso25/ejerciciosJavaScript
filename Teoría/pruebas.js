function eliminarElemento(posicion){
  if (posicion >= 0 && posicion < elementos.length){   
    elementos.splice(posicion, 1);    
  } else {
    alert("Posición inválida");
  }
}

function mostrarListaEnumerada(array) {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
    resultado += i + " - " + array[i] + "\n";
  }
  return resultado;
}

/* function eliminarElemento (posicion){
    if (posicion >= 0 && posicion < elementos.length){   
        elementos.splice(posicion, 1);    
    } else {
        alert("Posición inválida");
    }
}


function mostrarListaEnumerada(array) {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
    resultado += i + " - " + array[i] + "\n";
  }
  return resultado;
}


let cantidad;
let elementos = [];

do{                    
    cantidad = prompt("¿Cuántos elementos vas a ingresar?");
    if (
        cantidad === null ||            
        cantidad.trim() === "" ||         
        isNaN(cantidad) ||              
        parseInt(cantidad) < 1          
    ) {
        alert("Cantidad inválida. Tenes que ingresar un número mayor a 0.");
        cantidad = null;  
    } else {
        cantidad = parseInt(cantidad);   
    }
    
} while (cantidad === null)  




for (let i = 0; i < cantidad; i++) {
    let entrada;

    do{
    entrada = prompt("Ingresá el elemento #" + (i + 1));     
    if (
      entrada === null ||          
      entrada.trim() === "" ||     
      !isNaN(entrada)               
    ) {
      alert("Entrada inválida.");
      entrada = null;
    } else {                      
      elementos.push(entrada); 
      alert("Lista actualizada:\n" + mostrarListaEnumerada(elementos));
    }
  } while(entrada === null)
} 

let posicionEliminar;

  do{
  posicionEliminar = prompt("¿Qué posición querés eliminar? (empezando desde 0)");
      
if (                 
  posicionEliminar !== null &&
  posicionEliminar.trim() !== "" &&
  !isNaN(posicionEliminar)
) {
  posicionEliminar = parseInt(posicionEliminar);

  if (posicionEliminar >= 0 && posicionEliminar < elementos.length){ 

    eliminarElemento(posicionEliminar);                             
    alert("Lista actualizada:\n" + mostrarListaEnumerada(elementos)); 
    break;
  } else{
    alert("Posición inválida. Debe estar entre 0 y " + (elementos.length - 1)); 
  }

} else {
    alert("Entrada inválida. Ingresá un número válido");
}
}while(true); */ 