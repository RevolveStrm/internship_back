import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyTokenRequestDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}
