<script context="module">
  let pokemonStore = [];
  export const load = async ({ stuff }) => {
    pokemonStore = stuff.pokemonStore;
    return pokemonStore;
  };
</script>

<script lang="ts">
  import { pokemonToBeShown } from '../store/store';
  import Paragraph from '../components/Paragraph/Paragraph.svelte';
  import Poke from '../components/Icons/Poke.svelte';
  import PokeList from '../components/PokeList/PokeList.svelte';
  import PokeLimiter from '../components/PokeLimiter/PokeLimiter.svelte';
</script>

<Poke />
<Paragraph
  content={`
  Hi there! This is POKE, a “stupid Pokemon list” that represents complex and complete Pokemons,
  allowing them to shine on local stages and beyond.`}
/>

<PokeLimiter />

{#if pokemonStore.length}
  <PokeList {pokemonStore} limit={$pokemonToBeShown} isInHomepage={true} />
{/if}

<style lang="scss">
  .pokemon-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 40px;
    font-size: 50px;
    font-family: var(--font-stack);
  }

  input {
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 50px;
    font-family: var(--font-stack);
    color: inherit;
  }
</style>
