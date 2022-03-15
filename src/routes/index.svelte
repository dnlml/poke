<script>
  import { onMount } from 'svelte';
  import Poke from '../components/Icons/Poke.svelte';
  import { getPokemons } from '../services/api';
  import PokeList from '../components/PokeList/PokeList.svelte';

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

{#if pokemons.length}
  <PokeList {pokemons} limit="5" />
{/if}

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
</style>
