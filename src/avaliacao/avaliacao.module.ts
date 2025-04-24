import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';
import { Avaliacao } from './entities/avaliacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao])],  
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}