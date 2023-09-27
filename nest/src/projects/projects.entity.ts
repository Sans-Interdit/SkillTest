import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Task } from './task/task.entity';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name : string;

  @Column()
  description: string;

  @Column()
  priority : number;

  @Column()
  progress : number;

  @ManyToMany(() => Task, {cascade : true})
  @JoinTable({
    name: 'project_task',
    joinColumn: {
      name: 'project_id', 
      referencedColumnName: 'id', 
    },
    inverseJoinColumn: {
      name: 'task_id',
      referencedColumnName: 'id',
    },
  })
  tasks: Task[];
}