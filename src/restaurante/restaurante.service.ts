import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { Repository } from 'typeorm';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(Restaurante)
    private restauranteRepo: Repository<Restaurante>,
  ) {}

  create(data: CreateRestauranteDto) {
    const novo = this.restauranteRepo.create(data);
    return this.restauranteRepo.save(novo);
  }

  findAll() {
    return this.restauranteRepo.find();
  }

  findOne(id: number) {
    return this.restauranteRepo.findOneBy({ id });
  }

  update(id: number, updateRestauranteDto: CreateRestauranteDto) {
    return this.restauranteRepo.update(id, updateRestauranteDto);
  }

  remove(id: number) {
    return this.restauranteRepo.delete(id);
  }
}