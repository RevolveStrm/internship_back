import { IsNotEmpty, IsString } from 'class-validator';

export class SignRequestDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
