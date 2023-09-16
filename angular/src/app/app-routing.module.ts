import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ModificationPageComponent } from './modification-page/modification-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
    { path: 'projects', component: ProjectPageComponent },
    { path : 'projects/:id', component : ModificationPageComponent},
    { path: '', component: LoginPageComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }