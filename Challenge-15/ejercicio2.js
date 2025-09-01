
const estudiantes = 
[ { id: 1, nombre: "Ana", edad: 20, promedio: 8.5, carrera: "Ingeniería" },
{ id: 2, nombre: "Carlos", edad: 22, promedio: 7.2, carrera: "Medicina" },
{ id: 3, nombre: "Chancho", edad: 2 , promedio: 9.1, carrera: "Ingeniería" },
{ id: 4, nombre: "Luis", edad: 21, promedio: 6.8, carrera: "Derecho" },
{ id: 5, nombre: "Sofía", edad: 20, promedio: 8.9, carrera: "Ingeniería" } ]

//Mostrar estudiantes con promedio mayor a 8.0
const promediosMayor = estudiantes.filter(estudiantes => estudiantes.promedio > 8.0);
console.log("Estudiantes con promedio mayor a 8.0:", promediosMayor);

//Crear un array solo con nombres y carreras
const nombresYCarraras = estudiantes.map(estudiantes => ({nombre: estudiantes.nombre, carrera: estudiantes.carrera}));
console.log("Nombres y carreras", nombresYCarraras);

//Filtrar estudiantes de Ingeniería mayores de 19 años
const ingenieriaMayores19 = estudiantes.filter(estudiantes => {
    if (estudiantes.carrera.toLowerCase() === "ingeniería" && estudiantes.edad >= 19){
        return true;
    }else {
        return false;
    }
});
console.log("Estudiantes de ingeniría mayores a 19: ", ingenieriaMayores19);


//Encontrar al estudiante con ID 3
const buscarId = estudiantes.find(estudiantes => estudiantes.id === 3);
console.log("El estudiante es: ", buscarId);
