import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsDateString, IsNumber, IsPositive } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @IsNumber()
    clienteId: number;
    
    @IsNumber()
    restauranteId: number;
    
    @IsNumber()
    produtoId: number;
    
    @IsNumber()
    @IsPositive()
    quantidade: number;
    
    @IsPositive()
    valorTotal: number;
    
    @IsDateString()
    dataPedido: Date;
}
