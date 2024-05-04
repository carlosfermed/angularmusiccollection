import { Component } from '@angular/core';

@Component({
  selector: 'app-piedepagina',
  template: `<p>{{mensajePieDePagina}}</p>`,
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent {
  mensajePieDePagina = "Web desarrollada con Angular";
  
}
