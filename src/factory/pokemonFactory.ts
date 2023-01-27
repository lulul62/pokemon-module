import { PokemonDetails } from "src/domains/pokemonDetails";

export default {
    getPokemonDetails(rawPokemonDetails: Readonly<any>): Readonly<PokemonDetails> {
        return {
            name: rawPokemonDetails?.forms.length > 0 ? rawPokemonDetails.forms[0].name : ""
        }
    }
}