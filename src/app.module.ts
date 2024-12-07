import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CronJobsService } from './cron-jobs/cron-jobs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    StudentsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CronJobsService
  ],
})
export class AppModule { }
