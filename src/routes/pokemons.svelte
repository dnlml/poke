<script>
  import Paragraph from '../components/Paragraph/Paragraph.svelte';
  import PokeList from '../components/PokeList/PokeList.svelte';
</script>

<Paragraph headStyle={true} content="Pokemons" />

<PokeList limit={20} viewFull={true} />
