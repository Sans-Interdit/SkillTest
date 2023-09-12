import { Controller } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { ProjectsDto } from './dto/projects.dto/projects.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService : ProjectsService){}

    @Post()
    addProj(@Body() project: any){
        return this.projectsService.addProj(project);
    }

    @Put()
    modifProj(@Body() project : any): ProjectsDto[]{
        return this.projectsService.modifProj(project)
    }

    @Delete(':id')
    deleteProj(@Param('id') id : any): ProjectsDto[]{
        return this.projectsService.deleteProj(id)
    }

    @Get()
    getPorjects(): ProjectsDto[] {
        return this.projectsService.getProjects();
    }
}
