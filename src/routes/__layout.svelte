<script>
  import { onMount } from 'svelte';
  import { getPokemons } from '../services/api';
  import Nav from '../components/Nav/Nav.svelte';
  import { pokemonStore } from '../store/store';

  onMount(async () => {
    $pokemonStore = await getPokemons(0, 15);
  });
  console.log('load');
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav />
<slot />

<style global lang="scss">
  @import '../styles/global.scss';
</style>
