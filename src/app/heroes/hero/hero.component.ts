import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name  : string = 'iron man';
  public age : number = 20;
//parece funcion pero es una propiedad 
  get capitaliedName(){ 
    return this.name.toUpperCase();
  }

  //crear un metodo
  getCompleteName(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{

    this.name = 'Sprider Man'
  }

  changeAge(): void{

    this.age = 25;

  }

  
}
