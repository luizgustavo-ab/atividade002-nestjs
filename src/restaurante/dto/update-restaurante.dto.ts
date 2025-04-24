import { PartialType } from '@nestjs/mapped-types';
import { CreateRestauranteDto } from './create-restaurante.dto';
import { IsString } from 'class-validator';

export class UpdateRestauranteDto extends PartialType(CreateRestauranteDto) {
    
    @IsString()
    nome: string;
    
    @IsString()
    endereco: string;
    
    @IsString()
    telefone: string;
    
    @IsString()
    tipo: string;
}
