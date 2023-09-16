import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { Projects } from './projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Projects])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}