import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  NotFoundException,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';

import { CreateUserDTO } from '../dto/user.dto';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  // add a user
  // @UseGuards(LocalAuthGuard)
  @Post('/create')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      access_token: user.access_token,
    });
  }

  // Retrieve users list
  @Get('all')
  async getAllUsers(@Res() res) {
    const users = await this.userService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  // Fetch a particular user using ID
  @Get('/:userID')
  async getUserById(@Res() res, @Param('userID') userID) {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  // Fetch a particular user using the user token
  @UseGuards(JwtAuthGuard)
  @Get('/auth/load')
  async loadUser(@Request() req, @Res() res) {
    const userID = req.user._id;
    const user = await this.userService.getUserById(userID);
    return res.status(HttpStatus.OK).json(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async Login(@Request() req) {
    return this.authService.login(req.user);
  }

  // Fetch a particular user using ID
  @Put('/:userID')
  async updateUser(
    @Res() res,
    @Param('userID') userID,
    @Body() createUserDTO: CreateUserDTO,
  ) {
    const user = await this.userService.updateUser(userID, createUserDTO);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }
}
