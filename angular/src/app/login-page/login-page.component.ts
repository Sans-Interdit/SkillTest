import { Component } from '@angular/core';
import { GlobalVar } from '../globalVar';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loggin : string = "";
  constructor(private globalVar : GlobalVar, private readonly apiService : ApiService){}
  beLoggedIn(){
    if (this.loggin != ""){
      this.apiService.getAccounts(this.loggin).subscribe((logged : boolean) => {
        if (logged){
          this.globalVar.account = this.loggin;
        }
      })
    }
  }
  changeLoggin(event : any){
    this.loggin = event.target.value;
  }
}