<script>
  import { page } from '$app/stores';
  import { paths } from '../constants';
</script>

<nav class="nav">
  <ul class="routes">
    {#each paths as path}
      <li><a href={path.path} class:active={$page.url.pathname == path.path}>{path.title}</a></li>
    {/each}
  </ul>

  <ul class="out">
    <li>
      <a href="https://danielemeli.com">Author</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-between;
  }
  .routes {
    display: flex;
  }
  .active {
    color: gold;
    transform: translate(-10px);
  }
</style>
