<script lang="ts">
  import { animate } from 'motion';
  const { initd } = $props();
  $effect(() => {
    if (!initd) return;
    animate('.header', { x: 0 }, { duration: 0.5 });
  });
</script>

<div class="header-container">
  <div class="header">
    <span class="title">KELEN's HOME</span>
    <span class="subtitle">INTRODUCTION SYSTEM</span>
  </div>
</div>

<style lang="scss">
  .header-container {
    position: fixed;
    top: 2svw;
    left: 2svw;
    overflow: hidden;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateX(-100%);
  }
  .title,
  .subtitle {
    color: #292c33;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 500;
  }
</style>
