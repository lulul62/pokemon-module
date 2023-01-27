import { Controller, Get, Query, Render } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Get()
  @Render('index')
  async showPokemonList(): Promise<Readonly<any>> {
    const pokemonList = await this.pokemonService.getAllPokemon();
    return { list: pokemonList };
  }

  @Get('/detail')
  @Render('pokemonDetail')
  async showPokemonDetail(@Query('name') name : Readonly<string>) {
    const pokemonDetail = await this.pokemonService.getPokemonDetails(name)
    return { detail: pokemonDetail }
  }

  @Get('/data')
  getAllPokemon() {
    return this.pokemonService.getAllPokemon();
  }
}
