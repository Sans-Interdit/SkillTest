import { NestFactory } from '@nestjs/core';
import { ProjectsModule } from './projects/projects.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectsModule);
  app.enableCors({
    origin: '*',
    methods: 'POST',
    allowedHeaders: 'Content-Type',
  });
  await app.listen(3000);
}
bootstrap();
