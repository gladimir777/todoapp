import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

//import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(user_name: string, password: string): Promise<any> {
    const userData = { user_name, password };
    const user = await this.userService.getUser(userData);
    console.log('user data', user);
    if (user) {
      // const { password, ...result } = user;
      return user;
    }
    return null;
  }
}
