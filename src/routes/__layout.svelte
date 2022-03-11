<script>
  import { page } from '$app/stores';
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about" class:active={$page.url.pathname == '/about'}>About</a>
</nav>
<ul>
  <li>{$page.url.pathname}</li>
</ul>
<slot />
