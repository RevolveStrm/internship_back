import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignResponseDto } from '../../controllers/auth/dto/sign.response.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from "bcrypt";
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async signUp(email: string, pass: string): Promise<SignResponseDto> {
    const user: User = await this.usersService.create({ email, password: pass });

    const payload = { userId: user.id, email: user.email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  public async signIn(email: string, pass: string): Promise<SignResponseDto> {
    const user: User = await this.usersService.findByEmail(email);

    const checkPassword = await bcrypt.compare(pass, user.password);

    if (!checkPassword) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      accessToken: token
    };
  }

  public async verifyToken(token: string): Promise<boolean> {
    return !!(await this.jwtService.verifyAsync(token));
  }
}
