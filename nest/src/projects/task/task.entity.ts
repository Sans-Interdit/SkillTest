import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  person : string;

  @Column()
  description: string;
}