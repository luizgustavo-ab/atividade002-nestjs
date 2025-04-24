import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Restaurante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  tipo: string;

  @OneToMany(() => Pedido, (pedido) => pedido.restaurante)  // Relacionamento OneToMany
  pedidos: Pedido[];
}