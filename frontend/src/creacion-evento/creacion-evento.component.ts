import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Servicio } from '../model/Servicio';
import { Validator } from '@angular/forms';
import { Solicitante } from '../model/Solicitante';
import { SolicitudEvento } from '../model/SolicitudEvento';
@Component({
  selector: 'app-creacion-evento',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './creacion-evento.component.html',
  styleUrl: './creacion-evento.component.css',
})
export class CreacionEventoComponent {
  //Variables del controlador web
  presupuestoTotal: number = 0;
  datos_solicitante: FormGroup = new FormGroup({});
  datos_evento: FormGroup = new FormGroup({});
  servicios: Servicio[] = [
    {
      nombre_servicio: 'Servicio elpp',
      precio_servicio: 100,
    },
    {
      nombre_servicio: 'Servicio eletesch',
      precio_servicio: 200,
    },
  ];

  ngOnInit() {
    this.datos_solicitante = new FormGroup({
      nombre: new FormControl<string>('', [Validators.required]),
      apellido: new FormControl<string>('', [Validators.required]),
      correo: new FormControl<string>('', [Validators.required]),
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
      tipo_evento: new FormControl<string>('', [Validators.required]),
    });
  }

  comprobarCrearSolicitud() {
    if (this.datos_solicitante.valid) {
      console.log('Es valido');
      // Campos de datos solicitante
      const nombre = this.datos_solicitante.controls['nombre'].value;
      const apellido = this.datos_solicitante.controls['apellido'].value;
      const correo = this.datos_solicitante.controls['correo'].value;
      // Campos de solicitud evento
      const nombre_evento = this.datos_evento.controls['nombre_evento'].value;
      const fecha_inicio = this.datos_evento.controls['fecha_inicio'].value;
      const fecha_termino = this.datos_evento.controls['fecha_termino'].value;
      const hora_inicio = this.datos_evento.controls['hora_inicio'].value;
      const hora_termino = this.datos_evento.controls['hora_termino'].value;
      const lugar_evento = this.datos_evento.controls['lugar_evento'].value;
      const tipo_evento = this.datos_evento.controls['tipo_evento'].value;

      const datos_solicitante = new Solicitante(nombre, apellido, correo);
      const solicitud_evento = new SolicitudEvento(
        nombre_evento,
        fecha_inicio,
        fecha_termino,
        hora_inicio,
        hora_termino,
        lugar_evento,
        tipo_evento
      );
      alert('Esta bueno');
    } else {
      alert('Esta malo');
    }
  }
}
