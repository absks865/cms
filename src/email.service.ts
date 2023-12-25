// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ashburnscholars@gmail.com', // your Gmail email address
        pass: 'xtiu qwxj lgzc bcxo', // your Gmail password
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async sendContactFormEmail(data: any): Promise<void> {
    const mailOptions = {
      from: 'your@gmail.com', // sender address
      to: 'absks865@gmail.com', // receiver address
      subject: `${data.subject} `,
      html: `
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone}</p>
        <p>Address: ${data.address}</p>
        <p>Email: ${data.email}</p>
        <p>Time : ${Date()}</p>
        <p>Message: ${data.message}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Error sending email');
    }
  }
}
