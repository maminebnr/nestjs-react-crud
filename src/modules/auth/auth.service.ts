import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) {
    }

    async signInUser(authCredentialsDto: AuthCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const result: any = await this.userService.validateUserPassword(email, password);
        if (result.message) {
            return new NotFoundException(result.message);
        } else {
            const token = this.generateJwtToken(result);
            return {  status:201, token: token };
        }
    }

    generateJwtToken(user: any): string {
        let data: any = {
            sub: user
        };
        return this.jwtService.sign(data);
    }
}
