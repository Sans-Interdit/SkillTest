import { Component } from '@angular/core';
import { GlobalVar } from './globalVar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public globalVar : GlobalVar){
  }
}
