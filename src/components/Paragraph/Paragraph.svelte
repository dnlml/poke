<script lang="ts">
  export let content: string = undefined;
  export let short: boolean = false;
</script>

{#if content}
  <p class="p" class:short>
    {content}
  </p>
{/if}

<style lang="scss">
  .p {
    font-size: 68px;
    text-align: center;
    color: var(--color-orange);
    max-width: 1600px;
    margin: 180px auto;
    padding-left: 30px;
    padding-right: 30px;

    &.short {
      margin: 0px auto 80px;
      padding: 120px 0 120px 0;
      background-color: var(--color-orange);
      color: var(--color-cream);
      max-width: 100%;
    }
  }
</style>
