<script lang="ts">
  import PokeCard from '../PokeCard/PokeCard.svelte';
  import ShowAll from '../ShowAll/ShowAll.svelte';
  export let pokemonStore;
  export let limit = 0;
  export let viewFull: boolean = false;
  export let isInHomepage: boolean = false;
  const pokemosToBeShown = limit > 0 ? pokemonStore.slice(0, limit) : pokemonStore;
</script>

<ul class="poke-list" class:view-full={viewFull}>
  {#each pokemosToBeShown as pokemon}
    <PokeCard data={pokemon} gridView={viewFull} />
  {/each}

  {#if isInHomepage}
    <ShowAll />
  {/if}
</ul>

<style lang="scss">
  .poke-list {
    display: grid;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    grid-template-columns: repeat(auto-fill, minmax(475px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(475px, 1fr);

    &.view-full {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
