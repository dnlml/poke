<script context="module">
  let pokemonStore = [];
  export const load = async ({ stuff }) => {
    pokemonStore = stuff.pokemonStore;
    return pokemonStore;
  };
</script>

<script>
  import Paragraph from '../components/Paragraph/Paragraph.svelte';
  import Poke from '../components/Icons/Poke.svelte';
  import PokeList from '../components/PokeList/PokeList.svelte';
</script>

<Poke />
<Paragraph
  content={`
  Hi there! This is POKE, a “stupid Pokemon list” that represents complex and complete Pokemons,
  allowing them to shine on local stages and beyond.`}
/>

{#if pokemonStore.length}
  <PokeList {pokemonStore} limit={5} isInHomepage={true} />
{/if}
