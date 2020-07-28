import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateUserDTO } from '../dto/user.dto';
import { UserService } from '../user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // add a user
  @Post('/create')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    console.log('Datos', createUserDTO);
    const user = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been created successfully',
      user,
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
    console.log('ID', userID);
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async Login(@Request() req) {
    console.log('req', req);
    return req.user;
    //  const user = await this.userService.getUser(createUserDTO);
    // if (!user) throw new NotFoundException('User does not exist!');
    //return res.status(HttpStatus.OK).json(user);
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
