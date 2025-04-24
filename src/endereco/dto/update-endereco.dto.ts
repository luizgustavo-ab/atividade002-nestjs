import { PartialType } from '@nestjs/mapped-types';
import { CreateEnderecoDto } from './create-endereco.dto';
import { IsString } from 'class-validator';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {
    @IsString()
    rua: string;
    
    @IsString()
    numero: string;

    @IsString()
    bairro: string;
    
    @IsString()
    cidade: string;
    
    @IsString()
    estado: string;
    
    @IsString()
    cep: string;
}
