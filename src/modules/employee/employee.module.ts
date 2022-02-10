import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeSchema } from './employee.model';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [
    MongooseModule.forFeature([
        { name: 'Employee', schema: EmployeeSchema },
    ])
],
exports: [EmployeeService],
})
export class EmployeeModule {}
