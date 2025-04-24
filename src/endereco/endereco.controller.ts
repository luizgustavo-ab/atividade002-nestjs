import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.create(createEnderecoDto);
  }

  @Get()
  findAll() {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.enderecoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.update(id, updateEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.enderecoService.remove(id);
  }
}