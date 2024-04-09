import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterPerson: character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;

  onDeleteCharacter(id?:string):void{
    console.log(id)
    this.onDelete.emit(id)
  }

}
