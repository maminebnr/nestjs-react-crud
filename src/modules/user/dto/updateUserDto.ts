
import { IsString, IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {

 

    @ApiProperty({
        type: String,
        name: 'password',
        description: 'You must insert a strong password, that mixed with letters and symbols to avoid security issues',
        required: true,
        title: 'Password',
    })
    @IsString()
    newPassword: string;

    @ApiProperty({
        type: String,
        name: 'firstName',
        description: 'You must a user firstname',
        required: true,
        title: 'FirstName',
    })
    @IsString()
    firstName: string;

    @ApiProperty({
        type: String,
        name: 'lastName',
        description: 'You must a user lastName',
        required: true,
        title: 'LastName',
    })
    @IsString()
    lastName: string;
}
