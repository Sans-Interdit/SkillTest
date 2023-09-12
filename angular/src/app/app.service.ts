import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProjects() : Observable<any> {
    return this.http.get(this.apiUrl+"/projects");
  }

  getAccounts(loggin : string) : Observable<any> {
    return this.http.get(this.apiUrl+"/accounts"+"/"+loggin);
  }

  addProject(project : any) : any{
    return this.http.post(this.apiUrl+"/projects",project);
  }

  modificateProject(project : any) : any{
    return this.http.put(this.apiUrl+"/projects", project);
  }

  deleteProject(id : any) : any{
    return this.http.delete(this.apiUrl+"/projects"+"/"+id);
  }
}
