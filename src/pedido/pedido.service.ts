
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
  ) {}

  create(data: CreatePedidoDto) {
    const novo = this.pedidoRepo.create(data);
    return this.pedidoRepo.save(novo);
  }

  findAll() {
    return this.pedidoRepo.find();
  }

  findOne(id: number) {
    return this.pedidoRepo.findOneBy({ id });
  }

  update(id: number, data: UpdatePedidoDto) {
    return this.pedidoRepo.update(id, data);
  }

  remove(id: number) {
    return this.pedidoRepo.delete(id);
  }
}