import { Injectable, HttpService } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PokemonList } from 'src/domains/pokemonList';
import pokemonFactory from 'src/factory/pokemonFactory';

@Injectable()

export class PokemonService {
  constructor(private httpService: HttpService) { }

  readonly pokeApiBaseUrl: Readonly<string> = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  readonly pokeApiDetailsUrl: Readonly<string> = "https://pokeapi.co/api/v2/pokemon/"

  async getAllPokemon(): Promise<Array<PokemonList>> {
    const { data } = await firstValueFrom(this.httpService.get(this.pokeApiBaseUrl))
    return data.results ?? [];
  }

  async getPokemonDetails(name: Readonly<string>): Promise<Readonly<any>> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.pokeApiDetailsUrl}${name}`));
    return pokemonFactory.getPokemonDetails(data);
  }
}
