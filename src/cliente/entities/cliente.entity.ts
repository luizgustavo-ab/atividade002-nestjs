import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    senha: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;

    @Column()
    cpf: string;

    @OneToMany(() => Pedido, (pedido) => pedido.cliente) // Relacionamento inverso
    pedidos: Pedido[];  // Lista de pedidos do cliente
}
