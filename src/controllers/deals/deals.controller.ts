import { Body, Controller, Get } from '@nestjs/common';
import { CreateDealDto } from '../../services/deals/dto/create-deal.dto';
import { Deal } from '../../services/deals/entities/deal.entity';
import { DealsControllerService } from './deals.controller.service';

@Controller('deals')
export class DealsController {

  constructor(private readonly dealsControllerService: DealsControllerService) {}

  @Get()
  async findAll() {
    return this.dealsControllerService.findAll();
  }
}
