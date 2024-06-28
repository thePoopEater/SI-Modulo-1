export class Solicitante {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';

  constructor(nombre: string, apellido: string, correo: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
  }
}
