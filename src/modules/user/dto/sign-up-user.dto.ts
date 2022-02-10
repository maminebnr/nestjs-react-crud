
import { IsString, IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'src/core/enums/role.enum'
export class SignUpUserDto {
    @ApiProperty()
    @IsEmail()
    username: string;
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        name: 'password',
        description: 'You must insert a strong password, that mixed with letters and symbols to avoid security issues',
        required: true,
        title: 'Password',
    })
    @IsString()
    password: string;


}
