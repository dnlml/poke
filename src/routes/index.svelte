<script context="module">
  let pokemonStore = [];
  export const load = async ({ stuff }) => {
    pokemonStore = stuff.pokemonStore;
    return pokemonStore;
  };
</script>

<script lang="ts">
  import Paragraph from '../components/Paragraph/Paragraph.svelte';
  import Poke from '../components/Icons/Poke.svelte';
  import PokeList from '../components/PokeList/PokeList.svelte';

  let pokemonToBeShown: number = 5;
</script>

<Poke />
<Paragraph
  content={`
  Hi there! This is POKE, a “stupid Pokemon list” that represents complex and complete Pokemons,
  allowing them to shine on local stages and beyond.`}
/>

<div class="pokemon-counter">
  <label for="showValue">Pokemon to show: &nbsp;</label>
  <input type="number" bind:value={pokemonToBeShown} min={1} max={7} id="showValue" />
</div>

{#if pokemonStore.length}
  <PokeList {pokemonStore} limit={pokemonToBeShown} isInHomepage={true} />
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
