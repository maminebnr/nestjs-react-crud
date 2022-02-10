import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthConstants } from 'src/core/constants/auth-constants';
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: true }),
        JwtModule.register({
            secret: AuthConstants.secretKey,
            signOptions: {
                expiresIn: AuthConstants.expiresIn
            }
        }),
        UserModule
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }
