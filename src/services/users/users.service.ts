import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = await this.repository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    const salt = await bcrypt.genSalt();

    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    if (user) {
      throw new BadRequestException('Email already exist');
    }

    return this.repository.save(createUserDto);
  }

  async findOne(id: string): Promise<User> {
    const user = this.repository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('Lector not found');
    }

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user: Promise<User> = this.repository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
