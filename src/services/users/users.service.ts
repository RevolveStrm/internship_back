import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly lectorRepository: Repository<User>,
  ) {}

  async create(createLectorDto: CreateUserDto): Promise<User> {
    const lector = await this.lectorRepository.findOne({
      where: {
        email: createLectorDto.email,
      },
    });

    const salt = await bcrypt.genSalt();

    createLectorDto.password = await bcrypt.hash(createLectorDto.password, salt);

    if (lector) {
      throw new BadRequestException('Email already exist');
    }

    return this.lectorRepository.save(createLectorDto);
  }

  async findOne(id: string): Promise<User> {
    const lector = this.lectorRepository.findOne({
      where: {
        id,
      },
    });

    if (!lector) {
      throw new NotFoundException('Lector not found');
    }

    return lector;
  }

  async findByEmail(email: string): Promise<User> {
    const lector = this.lectorRepository.findOne({
      where: {
        email,
      },
    });

    if (!lector) {
      throw new NotFoundException('Lector not found');
    }

    return lector;
  }

  async update(id: string, updateLectorDto: UpdateUserDto): Promise<UpdateResult> {
    await this.findOne(id);

    if (updateLectorDto.password) {
      const salt = await bcrypt.genSalt();

      updateLectorDto.password = await bcrypt.hash(updateLectorDto.password, salt);
    }

    return await this.lectorRepository.update(id, updateLectorDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);

    return await this.lectorRepository.delete(id);
  }
}
