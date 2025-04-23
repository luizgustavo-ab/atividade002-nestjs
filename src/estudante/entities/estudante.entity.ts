import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cidade } from '../../cidade/entities/cidade.entity';

@Entity('Estudante')
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  matricula: string;

  @Column()
  email: string;

  @Column({ type: 'date' })
  dataNascimento: string;

  @Column()
  idade: number;

  @ManyToOne(() => Cidade, cidade => cidade.estudantes)
  cidade: Cidade;
}