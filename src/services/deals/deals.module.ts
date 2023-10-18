import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal])],
  providers: [DealsService],
  exports: [DealsService],
})
export class DealsModule {}