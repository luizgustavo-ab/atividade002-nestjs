import { IsInt, IsNumber, IsString } from "class-validator";
import { IntegerType } from "typeorm";


export class CreateUfDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    sigla: string;
}
