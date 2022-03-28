<li class="wrapper">
  <a href={`/pokemons`}>
    <span class="poke-name"> Show All </span>
  </a>
</li>

<style lang="scss">
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }
  .poke-name {
    top: 0;
    font-family: var(--font-stack);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 58px;
    max-width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
  }
</style>
