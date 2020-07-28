import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'user_name', passwordField: 'password' });
  }

  async validate(user_name: string, password: string): Promise<any> {
    const userData = { user_name: user_name, password };
    const user = await this.authService.validateUser(user_name, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
