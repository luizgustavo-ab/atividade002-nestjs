import { PartialType } from '@nestjs/mapped-types';
import { CreatePagamentoDto } from './create-pagamento.dto';
import { IsDecimal, IsEnum, IsString, IsOptional, IsInt, IsDate } from 'class-validator';

export class UpdatePagamentoDto extends PartialType(CreatePagamentoDto) {

    @IsDecimal()
    valor: number;  
  
    @IsString()
    metodoPagamento: string;  
    
    @IsDate()
    dataPagamento: Date;
}
