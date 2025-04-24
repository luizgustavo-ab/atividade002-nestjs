import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregadorDto } from './create-entregador.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateEntregadorDto extends PartialType(CreateEntregadorDto) {

    @IsNumber()
    id: number;
    
    @IsString()
    name: string;
    
    @IsNumber()
    cpf: number;
    
    @IsNumber()
    cnh: number;
    
    @IsString()
    documento_veiculo: string;
}
