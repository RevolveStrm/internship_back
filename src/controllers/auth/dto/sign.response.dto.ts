import { IsNotEmpty, IsString } from 'class-validator';

export class SignResponseDto {
  @IsNotEmpty()
  @IsString()
  accessToken: string;
}
