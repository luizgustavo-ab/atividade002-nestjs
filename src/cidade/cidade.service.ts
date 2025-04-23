import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidade } from './entities/cidade.entity';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade)
    private readonly repository: Repository<Cidade>,
  ) {}

  create(dto: CreateCidadeDto) {
    const cidade = this.repository.create(dto);
    return this.repository.save(cidade);
  }

  findAll() {
    return this.repository.find({ relations: ['uf'] }); // Incluindo a UF associada
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id }, relations: ['uf'] });
  }

  update(id: number, dto: UpdateCidadeDto) {
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}