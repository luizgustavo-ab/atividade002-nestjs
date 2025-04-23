import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudante } from './entities/estudante.entity';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Cidade } from '../cidade/entities/cidade.entity';


@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private readonly repository: Repository<Estudante>,
    @InjectRepository(Cidade)
    private readonly cidadeRepository: Repository<Cidade>,
  ) {}

  create(dto: CreateEstudanteDto) {
    const estudante = this.repository.create(dto);
    return this.repository.save(estudante);
  }

  findAll() {
    return this.repository.find({ relations: ['cidade'] }); // Incluindo a Cidade associada
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id }, relations: ['cidade'] });
  }

  update(id: number, dto: UpdateEstudanteDto) {
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}