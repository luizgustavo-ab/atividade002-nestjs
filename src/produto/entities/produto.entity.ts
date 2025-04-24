import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  categoryId: number; 

  @ManyToMany(() => Pedido, (pedido) => pedido.produtos)  // Relacionamento ManyToMany com Pedido
  pedidos: Pedido[];
}