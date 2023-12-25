import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProgramsModule } from './programs/programs.module';
import { MessageModule } from './contactus/message.module';
import { AdminModule } from './admin/admin.module';
import { EmailService } from './email.service';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { EmailController } from './email.controller';

@Module({
  imports: [
    UsersModule,
    ProgramsModule,
    MessageModule,
    

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      ...(process.env.NODE_ENV === 'prod'
        ? {
            ssl: {
              rejectUnauthorized: false,
            },
          }
        : {}),
    }),

    AdminModule,
  ],
  controllers: [EmailController,AppController,MailController],
  providers: [EmailService,AppService,MailService],
  
})
export class AppModule {}
