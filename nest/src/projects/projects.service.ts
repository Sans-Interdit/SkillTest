import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projects } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectRepository: Repository<Projects>) {}

  async findAll(): Promise<Projects[]> {
    return this.projectRepository.find();
  }

  async addProj(project : Projects){
    this.projectRepository.save(await this.projectRepository.create(project));
  }

  async changeProj(project : Projects){
    const newProject = await this.projectRepository.findOneBy({id : project.id})
    if (!!newProject)
    {
      newProject.description = project.description;
      newProject.name = project.name;
      newProject.priority = project.priority;
      newProject.progress = project.progress;
      this.projectRepository.save(newProject);
    }
  }

  async delProj(idProj : number){
    const project = await this.projectRepository.findOneBy({id : idProj})
    this.projectRepository.delete(project);
  }
}