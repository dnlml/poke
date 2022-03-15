<script lang="ts">
  import PokeCard from '../PokeCard/PokeCard.svelte';

  export let pokemons;
  export let limit;

  const pokemosToBeShown = pokemons.slice(0, limit);
</script>

<ul class="poke-list">
  {#each pokemosToBeShown as pokemon}
    <PokeCard data={pokemon} />
  {/each}
</ul>

<style lang="scss">
  .poke-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
</style>
