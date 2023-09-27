import { Component, OnInit } from '@angular/core';
import { Project, Task } from '../project.class';
import { ApiService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  tasks : Task[] = [];
  projName : string = "";
  newTask : Task = new Task(0,"","");
  projId = this.route.snapshot.paramMap.get('id');

  constructor(public apiService: ApiService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.apiService.getProjects().subscribe((allProj) => {
      const projectFound = allProj.find((proj : Project) => proj.id.toString()==this.projId);
      if(projectFound!==undefined)
      {
        this.projName = projectFound.name
        this.tasks = projectFound.tasks;
      }
    })
  }

  changePerson(event : any) :void {
    this.newTask.person = event.target.value;
  }
  changeDescription(event : any) :void {
    this.newTask.description = event.target.value;
  }

  addTask(){
    this.apiService.addTask(this.newTask, this.projId).subscribe((projTasks) => {
      this.tasks = projTasks;
    })
  }

  delTask(id : number){
    this.apiService.deleteTask(id).subscribe((allProj) => {
      this.tasks = allProj.find((proj : Project) => proj.id.toString()==this.projId).tasks;
    });
  }
}
