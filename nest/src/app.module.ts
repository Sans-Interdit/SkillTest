import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [ProjectsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
