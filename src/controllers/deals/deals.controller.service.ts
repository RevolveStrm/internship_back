import { Injectable } from '@nestjs/common';
import { DealsService } from '../../services/deals/deals.service';
import { CreateDealDto } from '../../services/deals/dto/create-deal.dto';
import { Deal } from '../../services/deals/entities/deal.entity';

@Injectable()
export class DealsControllerService {
  constructor(private readonly dealsService: DealsService) {}

  async findAll() {
    return await this.dealsService.findAll();
  }

  async create(createDealDto: CreateDealDto): Promise<Deal> {
    return await this.dealsService.create(createDealDto);
  }
}