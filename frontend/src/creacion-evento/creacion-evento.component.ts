import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as sql from 'mssql';
import { SolicitudEvento } from '../model/Evento';

@Component({
  selector: 'app-creacion-evento',
  standalone: true,
  imports: [],
  templateUrl: './creacion-evento.component.html',
  styleUrl: './creacion-evento.component.css',
})
export class CreacionEventoComponent {
  //Variables del controlador web
  datos_solicitante: FormGroup = new FormGroup({});
  datos_evento: FormGroup = new FormGroup({});
  private config: sql.config = {
    server: '146.83.109.246:2083',
    database: 'usr46_modulo1',
    user: 'usr46_admin',
    password: 'admin',
    options: {
      encrypt: true,
    },
  };

  constructor() {}

  ngOnInit() {
    this.datos_solicitante = new FormGroup({
      nombre: new FormControl<string>(''),
      apellido: new FormControl<string>(''),
      correo: new FormControl<string>(''),
    });

    this.datos_evento = new FormGroup({
      nombre_evento: new FormControl<string>(''),
      fecha_inicio: new FormControl<string>(''),
      fecha_termino: new FormControl<string>(''),
      hora_inicio: new FormControl<string>(''),
      hora_termino: new FormControl<string>(''),
      lugar_evento: new FormControl<string>(''),
      tipo_evento: new FormControl<string>(''),
    });

    //this.connectToDatabase();
  }
  comprobarCrearSolicitud() {
    if (this.datos_evento.invalid && this.datos_solicitante.invalid) {
      //esta invalidi el formulario
    }
  }

  private async connectToDatabase() {
    try {
      await sql.connect(this.config);
      console.log('connected');
    } catch (error) {
      console.error({ error });
    }
  }

  private async crearSolicitud(solicitud: SolicitudEvento) {
    try {
      await sql.query('');
    } catch (error) {}
  }
}
