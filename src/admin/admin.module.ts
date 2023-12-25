import { Module } from '@nestjs/common';

import { AdminController } from './admin.controller';
import { ProgramsModule } from '../programs/programs.module'
import { UsersModule } from '../users/users.module'
import {MessageModule} from '../contactus/message.module'


@Module({
  imports: [
    ProgramsModule,
    UsersModule,
    MessageModule
  ],
  controllers: [AdminController],
})
export class AdminModule { }
