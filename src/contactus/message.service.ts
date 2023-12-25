import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateMessageDto } from './dto';

import {Message} from './entities'

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private readonly repository: Repository<Message>) { }

  async create(createMessageDto: CreateMessageDto) {
    return await this.repository.save(createMessageDto)
  }

  async findAll() {
    return await this.repository.find()
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } })
  }


  async remove(id: number) {
    return await this.repository.delete(id)

  }
}
