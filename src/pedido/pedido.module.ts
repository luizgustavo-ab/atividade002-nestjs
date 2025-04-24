import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from './entities/pedido.entity';
import { Cliente } from '../cliente/entities/cliente.entity';
import { Restaurante } from '../restaurante/entities/restaurante.entity';
import { Produto } from '../produto/entities/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, Cliente, Restaurante, Produto]),
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}