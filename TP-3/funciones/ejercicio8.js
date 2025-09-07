// crear una función que al pasarle como parametro la materia, nos devuelva:
// profesor asignado y el nombre de todos los alumnos

const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "Pablo", "Juan", "Tomas", "Matias", "Maria", "Emilia"],
        matematicas: ["Fernandez", "Pablo", "Tomas", "Matias", "Maria"],
        quimica: ["Rodriguez", "Pablo", "Tomas", "Matias", "Maria", "Emilia"],
        biologia: ["Rodriguez", "Pablo", "Juan", "Tomas", "Matias", "Maria", "Emilia"],
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    } else {
        return false;
    }
}

let informacion = obtenerInformacion("fisica")

if (informacion !== false){
    document.writeln(informacion)
}