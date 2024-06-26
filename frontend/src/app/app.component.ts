import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreacionEventoComponent} from "../creacion-evento/creacion-evento.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreacionEventoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
