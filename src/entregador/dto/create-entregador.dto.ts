import { IsNumber, IsString } from "class-validator";

export class CreateEntregadorDto {

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
