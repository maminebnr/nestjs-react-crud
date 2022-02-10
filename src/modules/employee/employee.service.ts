import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private employeeModel: Model<Employee>) { }

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const newDoc = new this.employeeModel(createEmployeeDto);
    await newDoc.save();
    return newDoc.toObject({ versionKey: false });
  }

  async getemployees(): Promise<Employee[]> {
    return await this.employeeModel.find();
  };

  async getEmployeeById(employeeId: string) {
    return await this.employeeModel.findById(employeeId);
  }

  async updateEmployee(employeeId: string, employee: Employee) {
    return await this.employeeModel.findByIdAndUpdate(
      { _id: employeeId },
      employee, { new: true });
  }


  async deleteEmployee(employeeId: string) {
    return this.employeeModel.deleteOne({ _id: employeeId });
}
}
