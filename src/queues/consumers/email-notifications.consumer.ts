
import { MailerService } from '@nestjs-modules/mailer';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { Student } from 'src/students/entities/student.entity';

@Processor('emailNotificationsQueue')
export class EmailNotificationsConsumer extends WorkerHost {
  private readonly logger = new Logger(EmailNotificationsConsumer.name);

  constructor(
    private readonly mailService: MailerService
  ) {
    super();
  }

  process(job: Job, token?: string): Promise<any> {
    switch (job.name) {
      case 'congratulateWithBirthday': {
        const student: Student = job.data;
        this.logger.debug(`letter is going to be sent to: ${student.email}`);

        this.mailService.sendMail({
          from: 'PNU <university@pnu.edu.ua>',
          to: student.email,
          subject: 'PNU wishes you a Happy Birthday!',
          html: `
            <h1>Hi ${student.firstName} ${student.lastName}!</h1>
            <p>Your university wishes you a Happy Birthday! 🥳🥳</p>
            <p>Today is your special day! ❤️</p>
          `.trim()
        });

        return;
      }
    }
  }
}
