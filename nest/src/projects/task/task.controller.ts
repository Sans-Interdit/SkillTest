import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('projects/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post(':id')
  addTask(@Body() task : any, @Param('id') projId : number) {
    return this.taskService.addTask(task, projId);
  }

  @Delete(':id')
  delTask(@Param('id') id : number){
    return this.taskService.delTask(id)
  }
}