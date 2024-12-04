import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CronJobsService } from './cron-jobs/cron-jobs.service';

@Module({
  imports: [StudentsModule],
  controllers: [AppController],
  providers: [
    AppService,
    CronJobsService
  ],
})
export class AppModule { }
