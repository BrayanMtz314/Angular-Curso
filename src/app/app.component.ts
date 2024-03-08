import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component'
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ContadorComponent, HeroeComponent, 
    ListadoComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Contador App';
  numero: number = 10;

  base: number = 5;

  acumular( valor: number ){
    this.numero += valor;
  }
 
}
