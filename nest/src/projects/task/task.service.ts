import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { Projects } from '../projects.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectRepository: Repository<Projects>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
    ) {}
 
  async addTask(task : Task, projId : number){
    if (! (await this.taskRepository.findOneBy({id : task.id})))
    {
      this.taskRepository.save(await this.taskRepository.create(task));
    }
    const proj = (await this.projectRepository.findOne({where : {id : projId}, relations : ['tasks']}));
    proj.tasks.push(task);
    this.projectRepository.save(proj);
    return proj.tasks;
  }

  async delTask(idTask : number){
    const task = await this.taskRepository.findOneBy({id : idTask})
    if (!!task)
    {
      await this.taskRepository.delete(task);
    }
    const projects = this.projectRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.tasks', 'tasks')
      .getMany();
    return projects;
  }
}