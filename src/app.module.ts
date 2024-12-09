import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { CronJobsModule } from './cron-jobs/cron-jobs.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';
import { EmailNotificationsConsumer } from './queues/consumers/email-notifications.consumer';
import { bullConfig } from './shared/configs/bull-config';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './shared/configs/mailer-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    BullModule.forRoot(bullConfig),
    MailerModule.forRoot(mailerConfig),
    ScheduleModule.forRoot(),
    StudentsModule,
    CronJobsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    EmailNotificationsConsumer
  ]
})
export class AppModule { }
