<script lang="ts">
  import PokeCard from '../PokeCard/PokeCard.svelte';
  import { pokemonStore } from '../../store/store';

  export let limit;

  const pokemosToBeShown = $pokemonStore.slice(0, limit);
</script>

<ul class="poke-list">
  {#each pokemosToBeShown as pokemon}
    <PokeCard data={pokemon} />
  {/each}
</ul>

<style lang="scss">
  .poke-list {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
</style>
