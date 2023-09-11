import { Controller } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Body, Get, Header, Post } from '@nestjs/common/decorators';
import { ProjectsDto } from './dto/projects.dto/projects.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService : ProjectsService){}

    @Post()
    addProj(@Body() project: any){
        return this.projectsService.addProj(project);
    }

    @Header('Access-Control-Allow-Origin', '*')
    @Header('Access-Control-Allow-Headers', 'Content-Type')
    @Header('Access-Control-Allow-Methods', 'GET')
    @Get()
    getPorjects(): ProjectsDto[] {
        return this.projectsService.getProjects();
    }
}
