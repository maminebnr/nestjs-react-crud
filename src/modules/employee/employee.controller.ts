import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags, ApiResponse, ApiBody, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Employee } from './employee.model';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';

@ApiTags('Employee')
@Controller('api')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOperation({ summary: 'createEmployee' })
  @Post('/create')
  async addNewEmployee(@Body() employee: CreateEmployeeDto) {
    return this.employeeService.createEmployee(employee);
  }
  
	
  @ApiOperation({ summary: 'getListEmployee' })
  @Get()
  async getEmployee() {
    return this.employeeService.getemployees();
  }

	
  @ApiOperation({ summary: 'getEmployeeById' })
  @Get('/read/:employeeId')
  getEmployeeById(@Param('employeeId') employeeId: string): Promise<Employee> {
    return this.employeeService.getEmployeeById(employeeId);
  }
 

  @ApiOperation({ summary: 'updateEmployee' })
  @Put('/update/:employeeId')
  async updateEmployee(
    @Param('employeeId') employeeId: string,
    @Body() employee: Employee): Promise<Employee> {
    return await this.employeeService.updateEmployee(employeeId, employee);
  }


 

  @ApiOperation({ summary: 'deleteEmployee' })
  @Delete('/delete/:employeeId')
  async deleteEmployee(@Param('employeeId') employeeId: string) {
    return this.employeeService.deleteEmployee(employeeId);
  }
}
