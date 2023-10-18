import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateDealDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsNotEmpty()
  @IsNumber()
  ticketPrice: number;

  @IsNotEmpty()
  @IsNumber()
  yieldPercent: number;

  @IsNotEmpty()
  @IsNumber()
  sold_percent: number;

  @IsNotEmpty()
  @IsDate()
  startTime: Date;

  @IsNotEmpty()
  @IsDate()
  endTime: Date;
}
