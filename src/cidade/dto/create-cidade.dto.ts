import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateCidadeDto {

  @IsString()
  name: string;

  @IsString()
  estado: string;

  @IsNumber()
  ufId: number; 
}