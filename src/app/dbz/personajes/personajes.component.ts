import { NgFor, NgForOf } from '@angular/common';
import { Component, Input} from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [NgFor, NgForOf, MainPageComponent],
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  // @Input() personajes: Personaje[] = [];
  
  get personajes(){
    return this.DbzService.personajes;
  }
  
  constructor(private DbzService: DbzService){}
  
}
