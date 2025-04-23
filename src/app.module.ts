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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:'db.nest',
      entities: [Uf,Cidade,Estudante],
      synchronize: true,
    }),
    
    
    UfModule, CidadeModule, EstudanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
