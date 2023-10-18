import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service'
import { typeOrmAsyncConfig } from '../configs/database/typeorm-config';
import { ConfigModule } from '../configs/config.module';
import { AuthControllerModule } from '../controllers/auth/auth.controller.module';
import { AuthModule } from '../services/auth/auth.module';
import { DealsControllerModule } from '../controllers/deals/deals.controller.module';
import { DealsModule } from '../services/deals/deals.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule,
    AuthModule,
    AuthControllerModule,
    DealsModule,
    DealsControllerModule,
  ],
  providers: [AppService],
})
export class AppModule {}
