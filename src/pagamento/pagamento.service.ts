import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagamento } from './entities/pagamento.entity';
import { Repository } from 'typeorm';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepo: Repository<Pagamento>,
  ) {}

  create(data: CreatePagamentoDto) {
    const novoPagamento = this.pagamentoRepo.create(data);
    return this.pagamentoRepo.save(novoPagamento);
  }

  findAll() {
    return this.pagamentoRepo.find();
  }

  findOne(id: number) {
    return this.pagamentoRepo.findOneBy({ id });
  }

  update(id: number, updatePagamentoDto: UpdatePagamentoDto) {
    return this.pagamentoRepo.update(id, updatePagamentoDto);
  }

  remove(id: number) {
    return this.pagamentoRepo.delete(id);
  }
}
