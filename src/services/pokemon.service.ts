import { Injectable, HttpService } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PokemonList } from 'src/domains/pokemonList';

@Injectable()

export class PokemonService {
  constructor(private httpService: HttpService) { }

  readonly pokeApiBaseUrl: Readonly<string> = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  async getAllPokemon(): Promise<Array<PokemonList>> {
    const { data } = await firstValueFrom(this.httpService.get(this.pokeApiBaseUrl))
    return data.results ?? [];
  }
}
