import { PartialType } from '@nestjs/mapped-types';
import { CreateUfDto } from './create-uf.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUfDto extends PartialType(CreateUfDto) {

    @IsOptional()
    @IsNumber()
    id: number;
    
    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    sigla: string;



}
