export class Solicitante {
  nombre_solicitante: string = '';
  apellido_solicitante: string = '';
  correo_electronico: string = '';

  constructor(nombre_solicitante: string, apellido_solicitante: string, correo: string) {
    this.nombre_solicitante = nombre_solicitante;
    this.apellido_solicitante = apellido_solicitante;
    this.correo_electronico = correo;
  }
}
