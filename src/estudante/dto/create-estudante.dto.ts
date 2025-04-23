import { IsDateString, IsEmail, IsInt, IsNumber, isNumber, IsString } from 'class-validator';

export class CreateEstudanteDto {

  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  matricula: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dataNascimento: string;

  @IsNumber()
  idade: number;

  @IsNumber()
  cidadeId: number;
}