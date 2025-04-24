import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';
import { Entregador } from './entities/entregador.entity';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  create(createEntregadorDto: CreateEntregadorDto): Promise<Entregador> {
    const entregador = this.entregadorRepository.create(createEntregadorDto);
    return this.entregadorRepository.save(entregador);
  }

  findAll(): Promise<Entregador[]> {
    return this.entregadorRepository.find();
  }

  findOne(id: number): Promise<Entregador | null> {
    return this.entregadorRepository.findOneBy({ id });
  }

  update(id: number, updateEntregadorDto: UpdateEntregadorDto): Promise<Entregador | null> {
    return this.entregadorRepository.update(id, updateEntregadorDto).then(() => {
      return this.entregadorRepository.findOneBy({ id });
    });
  }

  remove(id: number): Promise<void> {
    return this.entregadorRepository.delete(id).then(() => {});
  }
}