interface IPokemon {
  name: string;
  url: string;
}

export const getPokemons = async (offset?: number, limit?: number) => {
  const pokemonsNamed = await getPokemonList(offset, limit);
  const urls = [];
  const pokemons = [];

  pokemonsNamed.forEach((pokemon) => {
    urls.push(fetch(pokemon.url));
  });

  await Promise.all(urls)
    .then((responses) => {
      return Promise.all(
        responses.map((resp) => {
          return resp.json();
        })
      );
    })
    .then((pokemonList) => {
      pokemonList.map((pk) => {
        pokemons.push({
          name: pk.name,
          image: pk.sprites.other['official-artwork']['front_default']
        });
      });
    });

  return pokemons;
};

const getPokemonList = async (offset?: number, limit?: number): Promise<IPokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const pokemons = await response.json();
  return pokemons.results;
};
