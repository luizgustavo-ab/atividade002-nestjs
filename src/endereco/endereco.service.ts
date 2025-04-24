import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    const endereco = this.enderecoRepository.create(createEnderecoDto);
    return this.enderecoRepository.save(endereco);
  }

  findAll() {
    return this.enderecoRepository.find();
  }

  findOne(id: number) {
    return this.enderecoRepository.findOne({ where: { id } });
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoRepository.update(id, updateEnderecoDto);
  }

  remove(id: number) {
    return this.enderecoRepository.delete(id);
  }
}
