import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './modules/employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { SessionModule } from './modules/session/session.module';


@Module({
  imports: [EmployeeModule,MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.9rwrx.mongodb.net/usersDbs?retryWrites=true&w=majority'), AuthModule, UserModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
