import { Component } from "@angular/core";
import { character } from "../interface/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-pages.component.html',

})
export class MainPageComponent{

   constructor( private dbzService: DbzService){}

   get character() : character[]{
    return [...this.dbzService.character];
   }

   onDeleteById(id: string):void{
    this.dbzService.onDeleteById(id);
   }

   onNewCharacter(character: character): void{
        this.dbzService.onNewCharacter(character);
   }

}