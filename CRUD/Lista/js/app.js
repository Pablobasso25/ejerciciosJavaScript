
fetch('../data.json')
  .then(res => {
    if (!res.ok) throw new Error("No se pudo cargar el archivo JSON");
    return res.json();
  })
  .then(datos => {
    console.log(datos);
    // Acá podés usar los datos para renderizar tarjetas, tablas, etc.
  })
  .catch(error => console.error("Error al cargar datos:", error));

console.log(datos);
