import { MailerOptions } from "@nestjs-modules/mailer";

export const mailerConfig: MailerOptions = {
  transport: {
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'a779a89152e4be',
      pass: 'ca21cdab12a284'
    }
  }
}