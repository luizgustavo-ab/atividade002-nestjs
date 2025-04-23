import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './entities/estudante.entity';
import { EstudanteService } from './estudante.service';
import { EstudanteController } from './estudante.controller';
import { Cidade } from 'src/cidade/entities/cidade.entity';
import { CidadeModule } from '../cidade/cidade.module';

@Module({
  imports: [TypeOrmModule.forFeature([Estudante,Cidade])],
  controllers: [EstudanteController],
  providers: [EstudanteService],
})
export class EstudanteModule {}