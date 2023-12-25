import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';


@Controller('User')
export class MailController {
  constructor(private readonly emailService: MailService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async submitForm(@Body() formData: any): Promise<string> {
    // Handle the form submission logic (save to the database, etc.)

    // Send an email using the EmailService
  
    try {
      await this.emailService.sendRegistrationFormEmail(formData);
      
      return "Form accepted Successfuly"
    } catch (error) {
      // Handle the error (log, return an error message, etc.)
      return 'Error submitting form';
    }
  }
}
