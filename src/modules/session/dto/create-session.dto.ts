import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSessionDto {


    @ApiProperty()
    @IsString()
    title: string;
    @ApiProperty()
    @IsString()
    start: String;
    @ApiProperty()
    @IsString()
    end :string;
}
