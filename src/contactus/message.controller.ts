import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('Message')
export class MessageController {
  constructor(private readonly messageServic: MessageService) { }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageServic.create(createMessageDto);
  }

  @Get()
  findAll() {
    return this.messageServic.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageServic.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageServic.remove(+id);
  }
}
