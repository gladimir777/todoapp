import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from '../dto/user.dto';
import { jwtConstants } from '../auth/constants';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}
  // fetch all users
  async getAllUsers(): Promise<IUser[]> {
    const users = await this.userModel
      .find()
      .populate('taks')
      .exec();
    return users;
  }
  // Get a single user
  async getUserById(userID): Promise<IUser> {
    const user = await this.userModel
      .findById(userID)
      .populate('taks')
      .exec();
    return user;
  }

  // Login
  async getUser(userDTO: any): Promise<IUser> {
    const user = await this.userModel
      .findOne({
        user_name: userDTO.user_name,
        password: userDTO.password,
      })
      .select('-password')
      .populate('taks')
      .exec();
    return user;
  }

  // post a single user
  async addUser(createUserDTO: CreateUserDTO): Promise<any> {
    // @todo the password need to be crypted
    const newUser = await this.userModel(createUserDTO);
    let savedUser = await newUser.save();
    const access_token = this.createToken(savedUser);
    return access_token;
  }

  createToken(user) {
    const expiresIn = '1d';

    const access_token = jwt.sign(
      {
        _id: user._id,
        user_name: user.user_name,
      },
      jwtConstants.secret,
      { expiresIn },
    );
    return {
      user,
      access_token,
    };
  }

  // Edit user details
  async updateUser(userID, createUserDTO: CreateUserDTO): Promise<IUser> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }
  // Delete a user
  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}
