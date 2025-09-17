/* -Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
  constructor(alto, ancho) {
    (this.alto = alto), 
    (this.ancho = ancho);
  }

  set alto(valor) {
    if (typeof valor === "number" && valor > 0) {
      this._alto = valor;
    } else {
      console.warn("El alto debe ser un número mayor a 0");
    }
  }

  set ancho(valor) {
    if (typeof valor === "number" && valor > 0) {
      this._ancho = valor;
    } else {
      console.warn("El ancho debe ser un número mayor a 0");
    }
  }

  get alto() {
    return this._alto;
  }
  get ancho() {
    return this._ancho;
  }

  mostrarDatos() {
    document.writeln(
      `<strong>Rectángulo</strong><br> - Alto: ${this.alto}<br> - Ancho: ${this.ancho}<br><br>`
    );
  }
  calcularPerimetro() {
    document.writeln(
      `<strong>Perimetro: </strong> ${2 * this.alto + this.ancho}<br>`
    );
  }
  calcularArea() {
    document.writeln(`<strong>Área: </strong> ${this.alto * this.ancho}<br>`);
  }
}

const rectangulo1 = new Rectangulo(4, 12);
rectangulo1.mostrarDatos();
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();
