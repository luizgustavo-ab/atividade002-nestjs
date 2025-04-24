import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;  

  @Column()
  metodoPagamento: string;  

  @Column()
  dataPagamento: Date;  
}