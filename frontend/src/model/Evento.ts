import { Time } from '@angular/common';

export class SolicitudEvento {
  nombre_evento: string = '';
  fecha_inicio: Date = new Date();
  fecha_termino: Date = new Date();
  hora_inicio: Time = { hours: 0, minutes: 0 };
  hora_termino: Time = { hours: 0, minutes: 0 };

  constructor(
    nombre_evento: string,
    f_inicio: Date,
    f_termino: Date,
    h_inicio: Time,
    h_termino: Time
  ) {
    this.nombre_evento = nombre_evento;
    this.fecha_inicio = f_inicio;
    this.fecha_termino = f_termino;
    this.hora_inicio = h_inicio;
    this.hora_termino = h_termino;
  }
}
