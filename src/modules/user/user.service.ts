import { Injectable, ConflictException, } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { UpdateUserDto } from './dto/updateUserDto';


@Injectable()
export class UserService {

	constructor(@InjectModel('User') private userModel: Model<User>) {

	}
	async setUserBaseData(signUpUserDto: SignUpUserDto): Promise<any> {
		const { email, password } = signUpUserDto;
		let user: any = {};
		if ((await this.findUserByEmail(email))) {
			throw new ConflictException(`Email ${email} is not available, please try another one`);
		} else {
			user.email = email;
		}
		user.password = await bcrypt.hash(password, 10);
		/* user.role = role;
		user.firstName = firstName;
		user.lastName = lastName; */
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
		return (user) ? user : null;
	}

	async findUserById(userId: string) {
		const user = await this.userModel.findById(userId);
		return (user) ? user : null;
	}

	 async updateUser(userId: string, updateUserDto) {
		let { newPassword, ...user } = updateUserDto;
		if (updateUserDto.newPassword) {
			user.password = await bcrypt.hash(updateUserDto.newPassword, 10);
		}
		return await this.userModel.findByIdAndUpdate(
			{ _id: userId },
			user, { new: true });
	} 

	async validateUserPassword(email: string, password: string): Promise<any> {
		let user: any = await this.findUserByEmail(email);
		if (!user) { return { message: `Email n'existe pas!` }; }
	/* 	if ((await this.comparePassword(password, user.password))) {
			return user;
		} */ else {
			return user;
		}
	}
 
	 async comparePassword(passwordDto: string, userPassword: string): Promise<boolean> {
		return await bcrypt.compare(passwordDto, userPassword);
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
	async getCurrentUser(req: any) {
		return await this.userModel.findById(req.user.user._id).lean();
	}
}