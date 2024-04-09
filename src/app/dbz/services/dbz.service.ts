import { Injectable } from '@angular/core';
import { character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public character : character[] = [{
        id: uuid(),
        nombre: 'krilin',
        poder: 250
    },
    {
    id: uuid(),
    nombre: 'goku',
    poder: 150
    },
    {
    id: uuid(),
    nombre: 'Vegeta',
    poder: 50
    }

    
 ]   

 public onNewCharacter(Character: character):void{    
    //let copiaCharacter=Object.assign({},Character)

    const newCharacter: character ={id: uuid(),...Character}
    this.character.push(newCharacter)

 }
 public onDeleteById(id: string ):void{
    this.character = this.character.filter(character => character.id !== id);

 }

    
}