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

<PokeList limit={$pokemonToBeShown} isInHomepage={true} />
