import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "../../cidade/entities/cidade.entity";


@Entity('UF')
export class Uf {

   @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    sigla: string;

    @OneToMany(() => Cidade, cidade => cidade.uf)
  cidades: Cidade[];
}