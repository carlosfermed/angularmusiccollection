import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title="Tarea Angular";
  cancion ="";
  autor ="";
  formato ="";
  canciones: Array<Item>=[];

  guardarCancion(){
    let item1= new Item(this.cancion, this.autor, this.formato);
    this.canciones.push(item1);
  }  
}