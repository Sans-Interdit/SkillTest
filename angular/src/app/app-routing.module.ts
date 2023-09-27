import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ModificationPageComponent } from './modification-page/modification-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { AuthentificationGuard } from './authGard';


const routes: Routes = [
    { path: 'projects', component: ProjectPageComponent, canActivate : [AuthentificationGuard]},
    { path : 'projects/:id', component : ModificationPageComponent },
    { path : 'tasks/:id', component : TasksPageComponent },
    { path: '', component: LoginPageComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }