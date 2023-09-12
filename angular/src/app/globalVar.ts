import { Injectable } from '@angular/core';
import { Project } from './project.class';

@Injectable()
export class GlobalVar {
  projects : Project[] = [];
  account: string = "";
  projectsView :boolean = true;
}