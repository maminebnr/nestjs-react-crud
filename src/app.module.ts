import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://brad123:brad123@cluster0.3f2cx.mongodb.net/usersDbs?retryWrites=true&w=majority'), UserModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
