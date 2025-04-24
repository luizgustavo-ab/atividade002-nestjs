import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entregador {

    @PrimaryGeneratedColumn()
    id: number;
        
    @Column()
    name: string;
        
    @Column()
    cpf: number;
        
    @Column()
    cnh: number;
        
    @Column()
    documento_veiculo: string;

}
