import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudanteDto } from './create-estudante.dto';
import { IsDateString, IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateEstudanteDto extends PartialType(CreateEstudanteDto){
  
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