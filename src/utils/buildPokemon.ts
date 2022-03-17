import type { IPokemon } from 'src/types/IPokemon';
import type { PokeAPI } from 'pokeapi-types';

export const buildPokemon = (fullPokemon: PokeAPI.Pokemon): IPokemon => {
  const { name, sprites, abilities, base_experience: experience, weight } = fullPokemon;

  const refactoredAbilities = abilities.map((ability) => ability.ability.name);

  const pokemon = {
    name,
    image: sprites.other['official-artwork']['front_default'],
    abilities: refactoredAbilities,
    experience,
    weight
  };
  return pokemon;
};
