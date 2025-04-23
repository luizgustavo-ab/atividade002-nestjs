import { PartialType } from '@nestjs/mapped-types';
import { CreateCidadeDto } from './create-cidade.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCidadeDto {
  
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()  
  @IsString()
  estado: string;

  @IsOptional()  
  @IsNumber()
  ufId: number; 
}
