import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { SignRequestDto } from './dto/sign.request.dto';
import { SignResponseDto } from './dto/sign.response.dto';
import { VerifyTokenRequestDto } from './dto/verify-token.request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  public async signIn(@Body() signInDto: SignRequestDto): Promise<SignResponseDto> {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  public async signUp(@Body() signUpDto: SignRequestDto): Promise<void> {
    await this.authService.signUp(signUpDto.email, signUpDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify-token')
  public async verifyToken(@Body() verifyTokenRequestDto: VerifyTokenRequestDto): Promise<void> {
    await this.authService.verifyToken(verifyTokenRequestDto.token);
  }
}
