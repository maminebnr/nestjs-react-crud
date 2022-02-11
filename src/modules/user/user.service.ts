import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async setUserBaseData(signUpUserDto: SignUpUserDto): Promise<any> {
    const { email, firstName, lastName, address } = signUpUserDto;
    let user: any = {};
    if (await this.findUserByEmail(email)) {
      throw new ConflictException(
        `Email ${email} is not available, please try another one`,
      );
    } else {
      user.email = email;
    }
    user.role = address;
    user.firstName = firstName;
    user.lastName = lastName;
    return user;
  }

  async signUpUser(signUpUserDto: SignUpUserDto): Promise<any> {
    const newDoc = new this.userModel(signUpUserDto);
    await newDoc.save();
    return newDoc.toObject({ versionKey: false });
    /* const user = await this.setUserBaseData(signUpUserDto);
		const newUser = new this.userModel(user);
		return await newUser.save(); */
  }

  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email });
    return user ? user : null;
  }

  async findUserById(userId: string) {
    const user = await this.userModel.findById(userId);
    return user ? user : null;
  }

  async updateUser(userId: string, updateUserDto) {
    let { newPassword, ...user } = updateUserDto;
   
    return await this.userModel.findByIdAndUpdate({ _id: userId }, updateUserDto, {
      new: true,
    });
  }

  async getUsersList() {
    return await this.userModel.find();
  }

  async getWaitersList() {
    return await this.userModel.find({ role: { $eq: 'WAITER' } });
  }
  async deleteUser(userId: string) {
    return await this.userModel.deleteOne({ _id: userId });
  }
}
