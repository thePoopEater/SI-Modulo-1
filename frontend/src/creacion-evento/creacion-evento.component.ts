import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Validator } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as sql from 'mssql';
import { Servicio, Solicitante, SolicitudEvento } from '../model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-creacion-evento',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './creacion-evento.component.html',
  styleUrl: './creacion-evento.component.css',
})
export class CreacionEventoComponent {
  //Variables del controlador web
  datos_solicitante: FormGroup = new FormGroup({});
  datos_evento: FormGroup = new FormGroup({});
  servicios: Servicio[] = [
    // new Servicio('Comer caca', 293298),
    // new Servicio('Luces', 38948),
    // new Servicio('Catering', 345000),
    // descomentar para ver servicios
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.datos_solicitante = new FormGroup({
      nombre: new FormControl<string>(''),
      apellido: new FormControl<string>(''),
      correo: new FormControl<string>(''),
    });

    this.datos_evento = new FormGroup({
      nombre_evento: new FormControl<string>('', [Validators.required]),
      fecha_inicio: new FormControl<string>('', [Validators.required]),
      fecha_termino: new FormControl<string>('', [Validators.required]),
      hora_inicio: new FormControl<Time>({ hours: 0, minutes: 0 }, [
        Validators.required,
      ]),
      hora_termino: new FormControl<Time>({ hours: 0, minutes: 0 }, [
        Validators.required,
      ]),
      lugar_evento: new FormControl<string>('', [Validators.required]),
      categoria_evento: new FormControl<string>('', [Validators.required]),
      cantidad_participantes: new FormControl<number>(0, [
        Validators.required,
        Validators.min(0),
      ]),
      presupuesto: new FormControl<number>(0, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }
  comprobarCrearSolicitud() {
    if (this.datos_solicitante.valid) {
      console.log('Es valido');
      // Campos de datos solicitante
      const nombre_solicitante =
        this.datos_solicitante.controls['nombre'].value;
      const apellido_solicitante =
        this.datos_solicitante.controls['apellido'].value;
      const correo = this.datos_solicitante.controls['correo'].value;
      // Campos de solicitud evento
      const nombre_evento = this.datos_evento.controls['nombre_evento'].value;
      const fecha_inicio = this.datos_evento.controls['fecha_inicio'].value;
      const fecha_termino = this.datos_evento.controls['fecha_termino'].value;
      const hora_inicio = this.datos_evento.controls['hora_inicio'].value;
      const hora_termino = this.datos_evento.controls['hora_termino'].value;
      const lugar_evento = this.datos_evento.controls['lugar_evento'].value;
      const categoria_evento =
        this.datos_evento.controls['categoria_evento'].value;
      let servicios: Servicio[] = [];
      const cantidad_participantes =
        this.datos_evento.controls['cantidad_participantes'].value;
      const presupuesto = this.datos_evento.controls['presupuesto'].value;

      const datos_solicitante = new Solicitante(
        nombre_solicitante,
        apellido_solicitante,
        correo
      );
      const datos_solicitud_evento = new SolicitudEvento(
        nombre_evento,
        fecha_inicio,
        fecha_termino,
        hora_inicio,
        hora_termino,
        lugar_evento,
        categoria_evento,
        cantidad_participantes,
        servicios,
        presupuesto
      );

      const solicitud_evento = {
        ...datos_solicitante,
        ...datos_solicitud_evento,
      };

      alert('Esta bueno');

      let postURL = `${environment.URL}crear-solicitud`;
      console.log({ postURL, solicitud_evento });

      let result;
      this.http.post<any>(postURL, solicitud_evento).subscribe((res) => {
        result = res;
      });
    } else {
      alert('Esta malo');
    }
  }

  // async connectToDB() {
  //   try {
  //     sql.connect(this.config);
  //     console.log('se conecto');
  //   } catch (error) {
  //     console.error('error conectandose');
  //   }
  // }

  // mandarquery() {
  //   try {
  //     sql.query('');
  //   } catch (error) {
  //     console.error('error query');
  //   }
  // }
}
