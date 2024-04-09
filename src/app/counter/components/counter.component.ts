import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    
    <h2>counter: {{counter}}</h2>

<button (click)="increseaBy(+1)" > +1 </button>
<button (click)="increseaBy(-1)"> -1 </button>
<button (click)="resetBy()">Reset</button>
    `
})

export class counterComponent{

    counter : number = 10;

  increseaBy( value : number): void{

    this.counter += value;
  }
  resetBy(): void{
    this.counter = 10;
  }
}