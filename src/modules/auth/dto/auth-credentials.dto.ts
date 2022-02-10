import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AuthCredentialsDto {

    @ApiProperty({
        type: String,
        name: 'email',
        description: 'You must add your email, provide a valid one that can send and receive emails',
        required: true,
        title: 'Email',
    })
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
