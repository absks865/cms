// your.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';


@Controller('Messages')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async submitForm(@Body() formData: any): Promise<string> {
    // Handle the form submission logic (save to the database, etc.)

    // Send an email using the EmailService
    try {
      await this.emailService.sendContactFormEmail(formData);
      return 'Form submitted successfully';
    } catch (error) {
      // Handle the error (log, return an error message, etc.)
      return 'Error submitting form';
    }
  }
}
