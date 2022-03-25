<script lang="ts">
  import { slide } from 'svelte/transition';
  import { basepath } from '../../constants';
  export let data;
  export let gridView: boolean = false;

  const myTransition = (node, args) => {
    if (!gridView) {
      return slide(node, args);
    }
  };
</script>

<li class="wrapper" class:grid-view={gridView} transition:myTransition={{ duration: 330 }}>
  <a class="link" href={`${basepath}pokemons/${data.name}`}>
    <span class="poke-name">
      {data.name}
    </span>
    <img class="img" src={data.image} alt={data.name} />
  </a>
</li>

<style lang="scss">
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;

    &.grid-view {
      gap: 20px;
      margin: 0 auto;

      @media screen and (min-width: 768px) {
        width: calc(100vw / 2);
      }

      @media screen and (min-width: 1200px) {
        width: calc(100vw / 3);
      }

      .img {
        display: block;
        max-width: 100%;
      }
    }
  }
  .poke-name {
    position: absolute;
    top: 0;
    font-family: var(--font-stack);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 58px;
    max-width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    word-break: break-all;
    text-align: center;
  }
  .link {
    display: flex;
    justify-content: center;
    color: var(--color-black);
  }
</style>
