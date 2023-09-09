import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})

export class ProjectPageComponent implements OnInit{
  constructor(private apiService: ApiService) {}
  description : string = ""
  projects : Project[] = [];
  ngOnInit(): void {
    this.apiService.getProjects().subscribe((list) => {
      this.projects = list;
    });
  }
  create(){
    if(this.description != ""){
      this.apiService.addProject(new Project(this.projects.length != 0 ? this.projects[this.projects.length - 1].id + 1 : 0, this.description)).subscribe((response :any) => {
        this.projects = response;
      })
    }
  }
  changeDescription(event : any){
    this.description = event.target.value;
  }
}

class Project{
  constructor(public id : number, public description : string){}
}