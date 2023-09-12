import { Component, Input, OnInit } from '@angular/core';
import { GlobalVar } from '../globalVar';
import { Project } from '../project.class';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-modification-page',
  templateUrl: './modification-page.component.html',
  styleUrls: ['./modification-page.component.scss']
})
export class ModificationPageComponent implements OnInit {
  @Input() project! : Project;
  newDescription! : string;
  constructor(public globalVar : GlobalVar, private apiService : ApiService){}
  ngOnInit(): void {
    this.newDescription = this.project.description;;
  }
  changeDescription(event : any) :void {
    this.newDescription = event.target.value;
  }
  updateProject() : void{
    this.project.description = this.newDescription;//faire une requete PUT
    this.apiService.modificateProject(this.project).subscribe((projects : any)=>{
      this.globalVar.projects = projects;
    })
    this.globalVar.projectsView = true;
  }

  deleteProject(){
    this.apiService.deleteProject(this.project.id).subscribe((projects : any)=>{
      this.globalVar.projects = projects;
    })
    this.globalVar.projectsView = true;
  }
}
