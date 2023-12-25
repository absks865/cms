import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto';

import { User } from './entities'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    return await this.repository.save(createUserDto)
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
