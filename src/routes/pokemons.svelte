<script context="module">
  let pokemonStore = [];
  export const load = async ({ stuff }) => {
    pokemonStore = stuff.pokemonStore;
    return pokemonStore;
  };
</script>

<script>
  import Paragraph from '../components/Paragraph/Paragraph.svelte';
  import PokeList from '../components/PokeList/PokeList.svelte';
</script>

<Paragraph headStyle={true} content="Pokemons" />

{#if pokemonStore.length}
  <PokeList {pokemonStore} limit={20} viewFull={true} />
{/if}
