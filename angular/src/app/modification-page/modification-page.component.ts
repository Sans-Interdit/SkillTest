import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.class';
import { ApiService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modification-page',
  templateUrl: './modification-page.component.html',
  styleUrls: ['./modification-page.component.scss']
})
export class ModificationPageComponent implements OnInit {
  newName! : string;
  newDescription! : string;
  newPriority!:number;
  project : Project= new Project(0, "", "", 5, 0, []);

  constructor(private apiService : ApiService, private router : Router, private route : ActivatedRoute){}
  ngOnInit(): void {
    this.apiService.getProjects().subscribe((allProj) => {
      const projectFound = allProj.find((proj : Project) => proj.id.toString()==this.route.snapshot.paramMap.get('id'))
      if(projectFound!==undefined)
      {
        this.project = projectFound;
      }
    })
  }
  
  changeName(event : any) :void {
    this.project.name = event.target.value;
  }
  changeDescription(event : any) :void {
    this.project.description = event.target.value;
  }
  changePriority(event : any) :void {
    this.project.priority = event.target.value;//ne change pas quand valeur tapé au claiver (mauvais event)
  }
  changeProgress(event : any):void{
    this.project.progress = event.target.value;
  }

  updateProject() : void{
    this.apiService.modificateProject(this.project).subscribe();
    this.router.navigate(['/projects']);
  }

  deleteProject(){
    this.apiService.deleteProject(this.project.id).subscribe();
    this.router.navigate(['/projects']);
  }
}
