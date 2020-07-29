import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
//import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user_name: string, password: string): Promise<any> {
    const userData = { user_name, password };
    const user = await this.userService.getUser(userData);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { user_name: user.user_name, _id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
