import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Servicio } from '../model/Servicio';
import { Validator } from '@angular/forms';
@Component({
  selector: 'app-creacion-evento',
  standalone: true,
  imports: [CommonModule],
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
      hora_inicio: new FormControl<string>('', [Validators.required]),
      hora_termino: new FormControl<string>('', [Validators.required]),
      lugar_evento: new FormControl<string>('', [Validators.required]),
      tipo_evento: new FormControl<string>('', [Validators.required]),
    });
  }

  comprobarCrearSolicitud() {
    if (this.datos_evento.valid && this.datos_solicitante.valid) {
      console.log('Es valido');
    }
    console.log('Es invalido');
  }
}
