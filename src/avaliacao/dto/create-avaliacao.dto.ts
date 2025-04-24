import { IsNumber, IsString } from "class-validator";

export class CreateAvaliacaoDto {

    @IsNumber()
    restauranteId: number; 

    @IsNumber()
    clienteId: number;  

    @IsNumber()
    nota: number;  

    @IsString()
    comentario: string;  
}