import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurante } from './entities/restaurante.entity';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(Restaurante)
    private readonly restauranteRepository: Repository<Restaurante>,
  ) {}

  create(nome: string, endereco: string, telefone: string, tipo: string) {
    const restaurante = this.restauranteRepository.create({
      nome,
      endereco,
      telefone,
      tipo,
    });
    return this.restauranteRepository.save(restaurante);
  }

  findAll() {
    return this.restauranteRepository.find();
  }

  findOne(id: number) {
    return this.restauranteRepository.findOne({ where: { id } });
  }

  update(id: number, nome: string, endereco: string, telefone: string, tipo: string) {
    return this.restauranteRepository.update(id, { nome, endereco, telefone, tipo });
  }

  remove(id: number) {
    return this.restauranteRepository.delete(id);
  }
}