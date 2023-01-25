import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonService } from './services/pokemon.service';
import { PokemonController } from './controllers/PokemonController';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokemonController],
  providers: [PokemonService],
})
export class AppModule {}
