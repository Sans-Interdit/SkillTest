import { Injectable } from '@nestjs/common';
import { ProjectsDto } from './dto/projects.dto/projects.dto';

@Injectable()
export class ProjectsService {
    public projects : ProjectsDto[] = [{'id' : 1,'description' : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum convallis pellentesque. Pellentesque tincidunt enim elit, eget suscipit purus pretium vehicula. Proin consequat vel neque vitae volutpat. Curabitur nec magna sit amet eros facilisis convallis. Praesent sagittis ultrices molestie. Morbi at turpis vel velit porttitor faucibus. Suspendisse potenti. Sed maximus nisl vitae mi dapibus, at laoreet sem iaculis. In urna tortor, semper vel risus id, elementum blandit purus. Donec commodo metus et nibh eleifend, tristique sollicitudin urna malesuada. Nam a dui pulvinar, faucibus nisl non, luctus est. Aenean condimentum, ligula a varius dapibus, nibh tortor lobortis libero, et molestie est ante non sapien. Sed ac vestibulum justo, a imperdiet enim."}];

    addProj(proj : ProjectsDto){
        this.projects.push(proj);
        return proj;
    }

    modifProj(proj : ProjectsDto): ProjectsDto[]{
        this.projects.forEach((project, i) => {
            if (project.id==proj.id){
                this.projects[i] = proj;
            }
        });
        return this.projects;
    }

    deleteProj(id : number) : ProjectsDto[]{
        this.projects.find((project,i) => {
            if(project.id==id){
                this.projects.splice(i);
            }
        })
        return this.projects;
    }

    getProjects(): ProjectsDto[]{
        return this.projects
    }
}
