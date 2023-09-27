import { Injectable } from '@angular/core';
import { ApiService } from './app.service';
import { Router } from '@angular/router';
import * as jwt from 'jsonwebtoken';
import { Account } from './project.class';
import { switchMap, map, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly secretKey = 'votre_clé_secrète_jwt';

  constructor(private readonly apiService: ApiService, private router: Router) {}

  authenticate(loggin: string, password: string) : Observable<boolean> {
    const acc : Account = new Account(0, loggin, password)
    return this.apiService.findAccount(acc).pipe(
      switchMap((foundAccount : Account) => {
        if (!!foundAccount) {
          return this.apiService.getToken(foundAccount).pipe(
            map(token=>{
              localStorage.setItem('jwtToken', token);
              return true;
            })
          )
        }
        else{
          return of(false);
        }
      })
    )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');
    return !!token;
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }
}
