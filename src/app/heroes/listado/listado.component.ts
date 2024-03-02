import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
  }

}
