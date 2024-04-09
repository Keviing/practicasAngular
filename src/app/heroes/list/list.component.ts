import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes : string[] = ['spiderman','hulk','vengadores','iron man'];
  public heroeEliminado? :string ;

  public deleteElement(): void{

   this.heroeEliminado= this.heroes.pop();
  }
}
