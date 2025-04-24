import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {

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
