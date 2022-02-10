import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { SessionSchema } from './session.model';


@Module({
  controllers: [SessionController],
  providers: [SessionService],
  imports: [
    MongooseModule.forFeature([
        { name: 'Session', schema: SessionSchema },
    ])
],
exports: [SessionService],
})
export class SessionModule {}
