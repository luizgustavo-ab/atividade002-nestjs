import { IsString } from "class-validator";

export class CreateRestauranteDto {
    
    @IsString()
    nome: string;

    @IsString()
    endereco: string;

    @IsString()
    telefone: string;

    @IsString()
    tipo: string;
    
}