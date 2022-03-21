<script lang="ts">
  import { pokemonToBeShown as count } from '../../store/store';
</script>

<div class="pokemon-counter">
  <label for="showValue">Pokemon to show: &nbsp;</label>
  <input type="number" bind:value={$count} min={1} max={7} id="showValue" />
</div>

<style lang="scss">
  .pokemon-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 40px;
    font-size: 50px;
    font-family: var(--font-stack);
  }

  input {
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 50px;
    font-family: var(--font-stack);
    color: inherit;
  }
</style>
