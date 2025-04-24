import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  findAll() {
    return this.produtoRepository.find();
  }

  findOne(id: number) {
    return this.produtoRepository.findOne({ where: { id } });
  }

  update(id: number, updateProdutoDto: CreateProdutoDto) {
    return this.produtoRepository.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.produtoRepository.delete(id);
  }
}