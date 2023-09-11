import { Component } from '@angular/core';
import { GlobalVar } from '../globalVar';

@Component({
  selector: 'app-modification-page',
  templateUrl: './modification-page.component.html',
  styleUrls: ['./modification-page.component.scss']
})
export class ModificationPageComponent {
  description : string = "";
  constructor(public globalVar : GlobalVar){}
  changeDescription(event : any){
    this.description = event.target.value;
  }
}
