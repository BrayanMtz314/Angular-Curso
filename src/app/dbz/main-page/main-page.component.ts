import { Component } from '@angular/core';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PersonajesComponent, AgregarComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro roishi',
    poder: 1233
  }

constructor(){
}

}


