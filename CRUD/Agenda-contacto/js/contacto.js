

export default class Contacto {
  #id;
  #nombre;
  #apellido;
  #telefono;
  #email;
  #imagen;
  #empresa;
  #puestoTrabajo;
  #direccion;
  #notas;

  constructor(
    id,
    nombre,
    apellido,
    telefono,
    email,
    imagen,
    empresa,
    puestoTrabajo,
    direccion,
    notas
  ) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#telefono = telefono;
    this.#email = email;
    this.#imagen = imagen;
    this.#empresa = empresa;
    this.#puestoTrabajo = puestoTrabajo;
    this.#direccion = direccion;
    this.#notas = notas;
  }

  //getters

  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  get apellido() {
    return this.#apellido;
  }

  get telefono() {
    return this.#telefono;
  }

  get email() {
    return this.#email;
  }

  get imagen() {
    return this.#imagen;
  }

  get empresa() {
    return this.#empresa;
  }

  get puestoTrabajo() {
    return this.#puestoTrabajo;
  }

  get direccion() {
    return this.#direccion;
  }

  get notas() {
    return this.#notas;
  }

  //setters

  set id(nuevoId) {
    this.#id = nuevoId;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set apellido(nuevoApellido) {
    this.#apellido = nuevoApellido;
  }

  set telefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }

  set email(nuevoEmail) {
    this.#email = nuevoEmail;
  }

  set imagen(nuevaImagen) {
    this.#imagen = nuevaImagen;
  }

  set empresa(nuevaEmpresa) {
    this.#empresa = nuevaEmpresa;
  }

  set puestoTrabajo(nuevoPuestoTrabajo) {
    this.#puestoTrabajo = nuevoPuestoTrabajo;
  }

  set direccion(nuevaDireccion) {
    this.#direccion = nuevaDireccion;
  }

  set notas(nuevasNotas) {
    this.#notas = nuevasNotas;
  }
}