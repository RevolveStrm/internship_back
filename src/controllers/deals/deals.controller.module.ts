import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsModule } from '../../services/deals/deals.module';
import { DealsControllerService } from './deals.controller.service';

@Module({
  imports: [DealsModule],
  controllers: [DealsController],
  providers: [DealsControllerService]
})
export class DealsControllerModule {}