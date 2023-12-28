// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {

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
  async sendRegistrationFormEmail(data: any): Promise<void> {
    const mailOptions = {
      from: `your@gmail.com`, // sender address
      to: 'nehalpallaki@gmail.com', // receiver address
      subject: `New Request for ${data.programs} Program`,
      html: `
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone} <p>Email: ${data.email}</p></p>
        <p>DOB: ${data.dob}</p>
        <p>Address: ${data.address}</p>
        <p>School : ${data.school} <p> Grade : ${data.grade}</p></p>
        <p>Time : ${Date()}</p>
        <p>Program to Study: ${data.programs}</p>
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
