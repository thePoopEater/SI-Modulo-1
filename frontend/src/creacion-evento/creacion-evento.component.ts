import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  }
  comprobarCrearSolicitud() {
    if (this.datos_evento.invalid && this.datos_solicitante.invalid) {
      //esta invalidi el formulario
    }
  }
}
