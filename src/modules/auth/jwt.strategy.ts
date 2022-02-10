
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConstants } from 'src/core/constants/auth-constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          //  ignoreExpiration: false,
            ignoreExpiration: true,
            secretOrKey: AuthConstants.secretKey,
        });
    }

    async validate(payload: any) {
        return { user: payload.sub };
    }
}