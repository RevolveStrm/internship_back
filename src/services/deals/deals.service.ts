import { InjectRepository } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';

@Injectable()
export class DealsService {
  constructor(@InjectRepository(Deal) private readonly repository: Repository<Deal>) {
  }

  async findAll(): Promise<Deal[]> {
    return await this.repository.find();
  }

  async create(dto: CreateDealDto): Promise<Deal> {
    const deal = this.repository.find({
      where: {
        name: dto.name
      }
    });

    if (deal)
      throw new BadRequestException('Deal already exist');

    return this.repository.save(dto);
  }
}