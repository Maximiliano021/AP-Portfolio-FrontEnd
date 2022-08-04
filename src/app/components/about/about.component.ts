import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // creame una persona del type: persona 
  persona: persona = new persona("","","");
  
  // constructor(personaTraida) 
  constructor(public personaTraida: PersonaService) {  
  }

  // subscribe = conecta el observable con un dato, es como el useState de react
   //Un metodo que se llama cuando se inicializa el componente. Se utiliza para
   //obtener los datos del servicio.
  
  ngOnInit(): void {
    this.personaTraida.getPersona().subscribe(data => {this.persona = data; console.log(data)})
  }

}
