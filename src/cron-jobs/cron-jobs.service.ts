import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Queue } from 'bullmq';
import { StudentsService } from 'src/students/students.service';

@Injectable()
export class CronJobsService {
  private readonly logger = new Logger(CronJobsService.name)

  constructor(
    @InjectQueue('emailNotificationsQueue')
    private readonly emailNotificationsQueue: Queue,
    private readonly studentsService: StudentsService
  ) { }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async getStudentsWithBirthdayToday() {
    this.logger.debug('Cron has been fired');

    const students = await this.studentsService.getStudentsWithBirthdayToday();

    if (students) {
      students.forEach(student => {
        this.emailNotificationsQueue.add(
          'congratulateWithBirthday',
          student
        );
        this.logger.debug(`Student ${JSON.stringify(student)} is ADDED to queue`);
      });

    } else {
      this.logger.debug('No one is celebrating a birthday today');
    }
  }
}