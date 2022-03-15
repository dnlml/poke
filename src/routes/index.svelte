<script>
  import PokeCard from '../components/PokeCard/PokeCard.svelte';
  import { onMount } from 'svelte';
  import Poke from '../components/Icons/Poke.svelte';
  import { getPokemons } from '../services/api';

  let pokemons = [];

  onMount(async () => {
    pokemons = await getPokemons(0, 5);
  });
</script>

<Poke />
<p class="paragraph">
  Hi there! This is POKE, a “stupid Pokemon list” that represents complex and complete Pokemons,
  allowing them to shine on local stages and beyond.
</p>

<ul class="poke-list">
  {#each pokemons as pokemon}
    <PokeCard data={pokemon} />
  {/each}
</ul>

<style lang="scss">
  .paragraph {
    font-size: 72px;
    text-align: center;
    color: var(--color-text-orange);
    max-width: 1600px;
    margin: 180px auto;
    padding-left: 30px;
    padding-right: 30px;
  }
  .poke-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
</style>
