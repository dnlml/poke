<script>
  import Poke from '../components/Icons/Poke.svelte';
  import PokeList from '../components/PokeList/PokeList.svelte';
  import { pokemonStore } from '../store/store';
</script>

<Poke />

<p class="paragraph">
  Hi there! This is POKE, a “stupid Pokemon list” that represents complex and complete Pokemons,
  allowing them to shine on local stages and beyond.
</p>

{#if $pokemonStore.length}
  <PokeList limit="10" />
{/if}

<style lang="scss">
  .paragraph {
    font-size: 68px;
    text-align: center;
    color: var(--color-text-orange);
    max-width: 1600px;
    margin: 180px auto;
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
