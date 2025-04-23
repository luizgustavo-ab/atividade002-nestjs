import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Uf } from '../../uf/entities/uf.entity';
import { Estudante } from "../../estudante/entities/estudante.entity";

@Entity('Cidade')
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  estado: string;
  
  @ManyToOne(() => Uf, (uf) => uf.cidades)
  uf: Uf;

  @OneToMany(() => Estudante, estudante => estudante.cidade)
  estudantes: Estudante[];
}