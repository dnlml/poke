<script context="module">
  let pokemonData;
  export const load = async ({ stuff, params }) => {
    const { name } = params;
    const { pokemonStore: pokemons } = stuff;
    pokemonData = pokemons.filter((pk) => pk.name === name);
    return pokemonData;
  };
</script>

<script lang="ts">
  import Paragraph from '../../components/Paragraph/Paragraph.svelte';
  const pokemon = pokemonData && pokemonData.length ? pokemonData[0] : [];
  console.log(pokemon);
</script>

{#if pokemon}
  <Paragraph headStyle={true} content={pokemon.name} />
  <img src={pokemon.image} alt={pokemon.name} />

  <dl>
    <dt>Abilities</dt>
    {#each pokemon.abilities as ab}
      <dd>{ab}</dd>
    {/each}
  </dl>

  <p>Experience: {pokemon.experience}</p>
  <p>Weight: {pokemon.weight}</p>
{/if}
