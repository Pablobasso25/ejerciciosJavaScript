
//Crear array con descuento del 15%

const precios = [100, 200, 50, 300, 150, 75, 400];

const ConDescuento = precios.map(precio => precio * 0.85);
console.log(ConDescuento);