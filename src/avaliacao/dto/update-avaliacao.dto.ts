import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoDto } from './create-avaliacao.dto';

export class UpdateAvaliacaoDto extends PartialType(CreateAvaliacaoDto) {
    restauranteId: number; 

    clienteId: number;  

    nota: number;  
    
    comentario: string;
}
