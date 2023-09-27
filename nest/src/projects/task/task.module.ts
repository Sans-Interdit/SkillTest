import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Projects } from '../projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task,Projects])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}