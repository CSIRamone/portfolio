import { Module } from '@nestjs/common';
import { ProjetoPrisma} from './projeto.prisma';
import { DbModule } from 'src/db/db.module';
import { ProjetoController } from './projeto.controller';

@Module({
  providers: [ProjetoPrisma],
  controllers: [ProjetoController],
  imports: [DbModule],
})
export class ProjetoModule {}
