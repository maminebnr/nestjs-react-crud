import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiHeader } from '@nestjs/swagger';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';


@ApiTags('api')
@ApiHeader({
    name: 'Authorization',
    description: 'Authorization Token',
})
@Controller('api')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    @ApiBody({ type: AuthCredentialsDto, required: true })
    signInUser(@Body() authCredentialsDto: AuthCredentialsDto) {
        return this.authService.signInUser(authCredentialsDto);
    }


}