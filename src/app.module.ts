import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfModule } from './uf/uf.module';
import { CidadeModule } from './cidade/cidade.module';
import { EstudanteModule } from './estudante/estudante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uf } from './uf/entities/uf.entity';
import { Cidade } from './cidade/entities/cidade.entity';
import { Estudante } from './estudante/entities/estudante.entity';
import { EntregadorModule } from './entregador/entregador.module';
import { Entregador } from './entregador/entities/entregador.entity';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';
import { RestauranteModule } from './restaurante/restaurante.module';
import { Restaurante } from './restaurante/entities/restaurante.entity';
import { EnderecoModule } from './endereco/endereco.module';
import { Endereco } from './endereco/entities/endereco.entity';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { Avaliacao } from './avaliacao/entities/avaliacao.entity';
import { PagamentoModule } from './pagamento/pagamento.module';
import { Pagamento } from './pagamento/entities/pagamento.entity';
import { PedidoModule } from './pedido/pedido.module';
import { Pedido } from './pedido/entities/pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:'db.nest',
      entities: [Uf,Cidade,Estudante,Entregador,Cliente,Produto,Restaurante,Endereco,Avaliacao,Pagamento,Pedido],
      synchronize: true,
    }),
    
    
    UfModule, CidadeModule, EstudanteModule, EntregadorModule, ClienteModule, ProdutoModule, RestauranteModule, EnderecoModule, AvaliacaoModule, PagamentoModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
