<script lang="ts">
  import { page } from '$app/stores';
  import Paragraph from '../../components/Paragraph/Paragraph.svelte';
  import { pokemonStore } from '../../store/store';
  const { name } = $page.params;
  const pokemonData = $pokemonStore.filter((pk) => pk.name === name);
  const pokemon = pokemonData?.length ? pokemonData[0] : [];
  const { image, abilities, experience, weight } = pokemon;
</script>

<Paragraph headStyle={true} content={pokemon.name} />
<div class="content">
  <img src={image} alt={pokemon.name} />
  <div class="content-inner">
    {#if abilities?.length}
      <dl>
        <dt>Abilities</dt>
        {#each abilities as ab, i (i)}
          <dd>{ab}</dd>
        {/each}
      </dl>
    {/if}
    <p><span>Experience</span> {experience}</p>
    <p><span>Weight</span>{weight}</p>
  </div>
</div>

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
