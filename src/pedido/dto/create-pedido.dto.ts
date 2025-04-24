import { IsInt, IsNotEmpty, IsEnum, IsOptional, IsDate, IsPositive, IsNumber, IsDateString } from 'class-validator';


export class CreatePedidoDto {

    @IsNumber()
    clienteId: number;

    @IsNumber()
    restauranteId: number;

    @IsNumber()
    produtoId: number;

    @IsPositive()
    quantidade: number;

    @IsPositive()
    valorTotal: number;

    @IsDateString()
    dataPedido: Date;
}