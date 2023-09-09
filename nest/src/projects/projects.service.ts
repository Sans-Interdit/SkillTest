import { Injectable } from '@nestjs/common';
import { ProjectsDto } from './dto/projects.dto/projects.dto';

@Injectable()
export class ProjectsService {
    public projects : ProjectsDto[] = [{'id' : 1,'description' : "sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl"}];

    addProj(proj : ProjectsDto){
        this.projects.push(proj);
        return this.getProjects();
    }

    getProjects(): ProjectsDto[]{
        return this.projects
    }
}
