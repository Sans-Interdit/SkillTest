import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/app.service';
import { GlobalVar } from '../globalVar';
import { Project } from '../project.class'

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})

export class ProjectPageComponent implements OnInit{
  constructor(private apiService: ApiService, public globalVar : GlobalVar) {}
  projectChose! : Project;
  ngOnInit(): void {
    this.apiService.getProjects().subscribe((list) => {
      this.globalVar.projects = list;
    });
  }
  create(){
    const newProj = new Project(this.globalVar.projects.length != 0 ? this.globalVar.projects[this.globalVar.projects.length - 1].id + 1 : 0, "");
      this.apiService.addProject(newProj).subscribe((response :any) => {
        this.modifyProject(newProj);
      })
  }
  modifyProject(project : Project) : void{
    this.projectChose = project;
    this.globalVar.projectsView = false;
  }
}