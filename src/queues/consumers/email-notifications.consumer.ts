
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { Student } from 'src/students/entities/student.entity';

@Processor('emailNotificationsQueue')
export class EmailNotificationsConsumer extends WorkerHost {
  private logger = new Logger(EmailNotificationsConsumer.name);

  process(job: Job, token?: string): Promise<any> {
    switch (job.name) {
      case 'congratulateWithBirthday': {
        const student: Student = job.data;
        this.logger.debug(`letter is going to be sent to: ${student.email}`);
        return;
      }
    }
  }

}
