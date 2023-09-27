import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {

  message : string = "Veuillez vous identifier";
  loggin : string = "";
  password : string = "";
  constructor(private router : Router, private authService : AuthService){}
  beLoggedIn(){
    if (this.loggin != ""){
      this.authService.authenticate(this.loggin, this.password).subscribe((authantified :boolean) => {
        if(authantified){
        this.router.navigate(['projects']);
        }
        else{
          this.uncorrectID()
        }
      })
    }
    else{
      this.uncorrectID()
    }
  }

  changeLoggin(event : any){
    this.loggin = event.target.value;
  }
  changePassword(event : any){
    this.password = event.target.value;
  }

  uncorrectID(){
    this.message = "Saisie Invalide";
    this.loggin = "";
    this.password = "";
  }
}