

export const validarCantidadCaracteres = (input, min, max)=>{
    if (input.value.length >= min && input.value.length <= max){
        input.classlist.add('is-valid');
        input.classlist.remove('is-invalid');
        return true;
    }else{
        input.classlist.add('is-invalid');
        input.classlist.remove('is-valid');
        return false;
    }

}

export const validarEmail = (input) => {
    const regEpx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}