import { Controller, Get, Post, Body, UseGuards, Delete, Param, Put, Req } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { SignUpUserDto } from './dto/sign-up-user.dto';


@ApiTags('User module')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {
	}
	@ApiOperation({ summary: 'signUpUser' })
	@Post('register')
	@ApiBody({ type: SignUpUserDto, required: true })
	signUpUser(@Body() signUpUserDto: SignUpUserDto) {
		return this.userService.signUpUser(signUpUserDto);
	}
  /*   @ApiBearerAuth('Bearer')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'getUsersList' })
	@Get()
	getUsersList() {
		return this.userService.getUsersList();
	}


	@ApiBearerAuth('Bearer')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'getWaitersList' })
	@Get('waiters')
	getWaitersList() {
		return this.userService.getWaitersList();
	}
	@ApiBearerAuth('Bearer')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'updateUser' })
	@Put(':userId')
	updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.updateUser(userId, updateUserDto);
	}

	@ApiBearerAuth('Bearer')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'findUserById' })
	@Get(':userId')
	findUserById(@Param('userId') userId: string) {
		return this.userService.findUserById(userId);
	}

	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'getData' })
	@Get('getData')
	getData() {
		return { data: 'JwtAuthGuard' }
	}
	@ApiBearerAuth('Bearer')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'deleteUser' })
	@Delete(':userId')
	async deleteUser(@Param('userId') userId: string) {
		return this.userService.deleteUser(userId);
	}

	@ApiBearerAuth('Bearer')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'getCurrentUser' })
	@Get('token/profile')
	async getCurrentUser(@Req() request: Request) {
		return await this.userService.getCurrentUser(request);
	} */
}
