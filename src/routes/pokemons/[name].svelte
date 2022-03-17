<script context="module">
  let pokemonData;
  export const load = async ({ stuff, params }) => {
    const { name } = params;
    const { pokemonStore: pokemons } = stuff;
    pokemonData = pokemons.filter((pk) => pk.name === name);
    return pokemonData;
  };
</script>

<script lang="ts">
  import Paragraph from '../../components/Paragraph/Paragraph.svelte';
  const pokemon = pokemonData && pokemonData.length ? pokemonData[0] : [];
</script>

{#if pokemon}
  <Paragraph headStyle={true} content={pokemon.name} />
  <div class="content">
    <img src={pokemon.image} alt={pokemon.name} />
    <div class="content-inner">
      <dl>
        <dt>Abilities</dt>
        {#each pokemon.abilities as ab}
          <dd>{ab}</dd>
        {/each}
      </dl>

      <p><span>Experience</span> {pokemon.experience}</p>
      <p><span>Weight</span>{pokemon.weight}</p>
    </div>
  </div>
{/if}

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  img {
    margin-top: -200px;
  }
  dt,
  span {
    font-size: 50px;
    font-weight: bold;
  }
  dd {
    display: list-item;
    list-style: disc;
    margin-left: 30px;
    text-transform: capitalize;
  }
  p {
    span {
      display: block;
      font-weight: bold;
    }
  }
  .content-inner > * {
    margin-bottom: 20px;
  }
</style>
