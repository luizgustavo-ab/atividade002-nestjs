import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @IsNumber()
    id: number;
    
    @IsString()
    name: string;
    
    @IsString()
    email: string;
    
    @IsString()
    senha: string;

    @IsString()
    telefone: string;

    @IsString()
    endereco: string;

    @IsString()
    cpf: string;
}
