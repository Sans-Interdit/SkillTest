import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ModificationPageComponent } from './modification-page/modification-page.component';
import { GlobalVar } from './globalVar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProjectPageComponent,
    ModificationPageComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalVar],
  bootstrap: [AppComponent]
})
export class AppModule { }
