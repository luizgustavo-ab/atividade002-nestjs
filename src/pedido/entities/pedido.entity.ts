import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';
import { Produto } from '../../produto/entities/produto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  @JoinColumn({ name: 'clienteId' })  
  cliente: Cliente;

  @ManyToOne(() => Restaurante, (restaurante) => restaurante.pedidos)
  @JoinColumn({ name: 'restauranteId' })  
  restaurante: Restaurante;

  @ManyToMany(() => Produto, (produto) => produto.pedidos)  
  @JoinColumn({ name: 'produtoId' })  
  produtos: Produto[];

  @Column('decimal', { precision: 10, scale: 2 })
  valorTotal: number;

  @Column()
  dataPedido: Date;
}