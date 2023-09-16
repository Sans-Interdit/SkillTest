import { Component } from '@angular/core';
import { GlobalVar } from '../globalVar';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loggin : string = "";
  constructor(private globalVar : GlobalVar, private readonly apiService : ApiService, private router : Router){}
  beLoggedIn(){
    if (this.loggin != ""){
      this.apiService.getAccounts(this.loggin).subscribe((logged : boolean) => {
        if (logged){
          console.log()
          this.globalVar.account = this.loggin;
          this.router.navigate(['projects']);
        }
      })
    }
  }
  changeLoggin(event : any){
    this.loggin = event.target.value;
  }
}