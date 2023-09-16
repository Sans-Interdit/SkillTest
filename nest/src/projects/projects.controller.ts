import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Post()
  addProj(@Body() project : any) {
    return this.projectsService.addProj(project);
  }

  @Put()
  changeProj(@Body() project : any) {
    return this.projectsService.changeProj(project);
  }

  @Delete(':id')
  delProj(@Param('id') id : number){
    return this.projectsService.delProj(id)
  }
}