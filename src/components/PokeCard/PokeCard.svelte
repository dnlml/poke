<script lang="ts">
  export let data;
</script>

<li class="wrapper">
  <span class="poke-name">
    {data.name}
  </span>
  <img src={data.image} alt={data.name} />
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
    position: absolute;
    top: 0;
    font-family: var(--font-stack);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 58px;
  }
</style>
