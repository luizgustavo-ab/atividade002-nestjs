# NOTAS DO PROJETO

## Integrantes
- luiz gustavo alves barros - uc24100270 
- Kalleby Rodrigues frutuoso - UC24101867
- William de Jesus Santos - UC24100992
- luan marques de oliveira - uc24101239
- nicolas oliveira de freitas - uc24102088
- tiago silva coutinho - uc24101549


Vídeo Referência

 1. 
Neste vídeo, aprendemos sobre a criação de um projeto NestJS com TypeORM e SQLite, e como construir uma API RESTful utilizando boas práticas de desenvolvimento.

2. 
Para iniciar o projeto, utilizamos o NestJS CLI para criar uma aplicação do zero:

```bash
npm i -g @nestjs/cli
nest new projeto

Utilizamos o class-validator para garantir que os dados enviados nas requisições são válidos.

Para conectar o NestJS com o SQLite, configuramos o TypeORM no arquivo

A injeção de dependência é configurada no NestJS utilizando o decorator @Injectable e @InjectRepository para injetar o repositório no serviço:

A lógica de negócio foi colocada na classe Service, com métodos como create, findAll, findOne, update e remove. Exemplo do método create: