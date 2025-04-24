import { IsDecimal, IsEnum, IsNotEmpty, IsString, IsInt, IsNumber, IsDate, IsDateString } from 'class-validator';

export class CreatePagamentoDto {
  
  @IsNumber()
  valor: number; 

  @IsString()
  metodoPagamento: string;  

  @IsDateString()
  dataPagamento: Date;  
}