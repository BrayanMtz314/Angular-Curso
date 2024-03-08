import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MainPageComponent } from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ FormsModule, MainPageComponent],
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }
  

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  constructor(private dbzService: DbzService){}
  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ){ return; }

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo);


    this.nuevo = {
      nombre: '',
      poder: 0,
    }
    
  }

}
