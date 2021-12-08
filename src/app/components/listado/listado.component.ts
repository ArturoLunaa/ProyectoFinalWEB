import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  posts = {
    person: {
      Nombre: 'Andrea',
      Apellido: 'Fuentes',
      Edad: '27',
      Cargo: 'doctor',
      ingreso: '$17000'

    },
    person1:
    {
      Nombre: 'Luis',
      Apellido: 'Herrera',
      Edad: '26',
      Cargo: 'doctor',
      ingreso: '$17000'
    },
    person2:
    {
      Nombre: 'Ana',
      Apellido: 'Flores',
      Edad: '25',
      Cargo: 'Enfermera',
      ingreso: '$15000'
    },
    person3:
    {
      Nombre: 'Juan',
      Apellido: 'Hernandez',
      Edad: '42',
      Cargo: 'Analista',
      ingreso: '$17000'
    },
    person4:
    {
      Nombre: 'Pedro',
      Apellido: 'Sanchez',
      Edad: '45',
      Cargo: 'Especialista',
      ingreso: '$30000'
    },
    person5:
    {
      Nombre: 'Jorge',
      Apellido: 'Ramirez',
      Edad: '32',
      Cargo: 'Cirujano',
      ingreso: '$25000'
    },
    person6:
    {
      Nombre: 'Karen',
      Apellido: 'Jimenez',
      Edad: '34',
      Cargo: 'Secretaria general',
      ingreso: '$8000'
    },
    person7:
    {
      Nombre: 'Fernanda',
      Apellido: 'Rodriguez',
      Edad: '28',
      Cargo: 'Atencion especializada',
      ingreso: '$15000'
    },
    person8:
    {
      Nombre: 'Jonathan',
      Apellido: 'Fernandez',
      Edad: '23',
      Cargo: 'Mantenimiento',
      ingreso: '$12000'
    },
    person9:
    {
      Nombre: 'Veronica',
      Apellido: 'Marquez',
      Edad: '35',
      Cargo: 'Enfermera',
      ingreso: '$15000'
    },

  };
  data = Object.values(this.posts);
}
