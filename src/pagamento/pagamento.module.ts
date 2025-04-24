import { Module } from '@nestjs/common';
import { PagamentoController } from './pagamento.controller';
import { PagamentoService } from './pagamento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from './entities/pagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
  controllers: [PagamentoController],
  providers: [PagamentoService],
})
export class PagamentoModule {}
