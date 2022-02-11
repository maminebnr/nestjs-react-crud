
import { IsString, IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SignUpUserDto {
    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsString()
    firstName: string;


    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    address: string;


}
