<script context="module">
  let pokemonStore = [];
  export const load = async ({ stuff }) => {
    pokemonStore = stuff.pokemonStore;
    return pokemonStore;
  };
</script>

<script>
  import PokeList from '../components/PokeList/PokeList.svelte';
</script>

<h1>Pokemons</h1>

{#if pokemonStore.length}
  <PokeList {pokemonStore} limit={20} />
{/if}
