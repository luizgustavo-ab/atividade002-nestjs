import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restauranteId: number;

  @Column()
  clienteId: number;

  @Column()
  nota: number;

  @Column()
  comentario: string;
}