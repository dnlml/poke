<script context="module">
  let pokemonData;
  export const load = async ({ stuff, params }) => {
    const { name } = params;
    const { pokemonStore: pokemons } = stuff;
    pokemonData = pokemons.filter((pk) => pk.name === name);
    return pokemonData;
  };
</script>

<script>
  import Paragraph from '../../components/Paragraph/Paragraph.svelte';
  const pokemon = pokemonData[0];
  console.log(pokemon);
</script>

<Paragraph headStyle={true} content={pokemon.name} />
<img src={pokemon.image} alt={pokemon.name} />
