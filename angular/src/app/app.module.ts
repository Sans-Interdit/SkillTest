import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ModificationPageComponent } from './modification-page/modification-page.component';
import { GlobalVar } from './globalVar';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProjectPageComponent,
    ModificationPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GlobalVar],
  bootstrap: [AppComponent]
})
export class AppModule { }
