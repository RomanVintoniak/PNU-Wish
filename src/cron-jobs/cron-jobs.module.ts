import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';
import { CronJobsService } from './cron-jobs.service';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    StudentsModule,
    BullModule.registerQueue({
      name: 'emailNotificationsQueue',
    }),
  ],
  providers: [CronJobsService]
})
export class CronJobsModule { }