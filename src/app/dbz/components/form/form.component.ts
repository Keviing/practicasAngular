import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacter:  EventEmitter<character>  = new EventEmitter;

  public character : character = {
    
    nombre: 'abc',
    poder: 0,
  };

  public emitCharacter (): void{
    if(this.character.nombre.length === 0) return; 

    this.onNewCharacter.emit({...this.character});

    console.log(this.character)
    this.character.nombre = '';
    this.character.poder=0;

    
  }
}
