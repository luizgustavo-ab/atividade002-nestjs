import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    @IsString()
    name: string;
    
    @IsNumber()
    price: number;
    
    @IsString()
    description: string;
    
    @IsString()
    imageUrl: string;
    
    @IsOptional()
    @IsNumber()
    categoryId: number;  
}
