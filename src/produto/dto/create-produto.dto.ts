import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateProdutoDto {
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