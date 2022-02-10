import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateEmployeeDto {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    email: String;
    @ApiProperty()
    @IsString()
    designation :string;
    @ApiProperty()
    @IsString()
    phoneNumber : string;
}
