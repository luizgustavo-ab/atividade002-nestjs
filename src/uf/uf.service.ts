import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly repository: Repository<Uf>,
  ) {}

  create(dto: CreateUfDto) {
    try {
      const UF = this.repository.create(dto);
      return this.repository.save(UF);
    } catch (error) {
      console.error('Erro ao criar UF:', error);
      throw error;
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateUfDto) {
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}