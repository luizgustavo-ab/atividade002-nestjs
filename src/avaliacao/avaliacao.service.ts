import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';  // Verifique se o caminho está correto
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';  // Certifique-se de que os DTOs estão corretos
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: Repository<Avaliacao>,  // Injeção do repositório
  ) {}

  // Criar uma nova avaliação
  create(createAvaliacaoDto: CreateAvaliacaoDto) {
    const avaliacao = this.avaliacaoRepository.create(createAvaliacaoDto);
    return this.avaliacaoRepository.save(avaliacao);  // Salvar a avaliação no banco de dados
  }

  // Buscar todas as avaliações
  findAll() {
    return this.avaliacaoRepository.find();  // Retorna todas as avaliações
  }

  // Buscar uma avaliação específica por ID
  findOne(id: number) {
    return this.avaliacaoRepository.findOne({ where: { id } });  // Busca pela avaliação com o ID fornecido
  }

  // Atualizar uma avaliação existente
  update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacaoRepository.update(id, updateAvaliacaoDto);  // Atualiza a avaliação
  }

  // Remover uma avaliação
  remove(id: number) {
    return this.avaliacaoRepository.delete(id);  // Deleta a avaliação com o ID fornecido
  }
}