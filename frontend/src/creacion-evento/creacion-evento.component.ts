import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creacion-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creacion-evento.component.html',
  styleUrl: './creacion-evento.component.css',
})
export class CreacionEventoComponent {
  //Variables del controlador web
  datos_solicitante: FormGroup = new FormGroup({});
  datos_evento: FormGroup = new FormGroup({});
  public servicioPresupuesto: { [key: string]: number } = {
    'ola': 10,
  }

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

  public presupuestoTotal: number=0
  

  comprobarCrearSolicitud() {
    if (this.datos_evento.invalid && this.datos_solicitante.invalid) {
      //esta invalidi el formulario
    }
  }
}
