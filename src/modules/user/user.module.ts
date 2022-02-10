import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user.service';
import { UserController } from './user.controller';

import { UserSchema } from './user.model';

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
        ])
    ],
    exports: [UserService],
})
export class UserModule { }
