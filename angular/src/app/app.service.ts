import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"
import { Account } from './project.class';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProjects() : Observable<any> {
    return this.http.get(this.apiUrl+"/projects");
  }

  findAccount(acc : Account) : Observable<any> {
    return this.http.post(this.apiUrl+"/accounts", acc);
  }

  getToken(acc: Account) : Observable<any> {
    return this.http.put(this.apiUrl+"/accounts", acc);
  }

  addProject(project : any) : Observable<any>{
    return this.http.post(this.apiUrl+"/projects", project);
  }

  modificateProject(project : any) : Observable<any>{
    return this.http.put(this.apiUrl+"/projects", project);
  }

  deleteProject(id : any) : Observable<any>{
    return this.http.delete(this.apiUrl+"/projects"+"/"+id);
  }

  addTask(task : any, projId : any) : Observable<any>{
    return this.http.post(this.apiUrl+"/projects/task"+"/"+projId, task);
  }

  deleteTask(id : any) : Observable<any>{
    return this.http.delete(this.apiUrl+"/projects/task"+"/"+id);
  }
}
