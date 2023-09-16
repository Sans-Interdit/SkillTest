import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/app.service';
import { GlobalVar } from '../globalVar';
import { Project } from '../project.class'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})

export class ProjectPageComponent implements OnInit{
  projects : Project[] = []
  constructor(private apiService: ApiService, public globalVar : GlobalVar, private router : Router) {}
  projectChose! : Project;
  ngOnInit(): void {
    this.apiService.getProjects().subscribe((allProj) => {
      this.projects = allProj;
    });
  }
  create(){
    const newProj = new Project(this.projects.length != 0 ? this.projects[this.projects.length - 1].id + 1 : 1, "", "", 1, 0);
      this.apiService.addProject(newProj).subscribe()
      this.modifyProject(newProj);
  }
  modifyProject(project : Project) : void{
    this.router.navigate(['/projects',project.id])
  }
}