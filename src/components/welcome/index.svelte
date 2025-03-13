<script lang="ts">
  import Logo from './Logo.svelte';
  import Authorize from './Authorize.svelte';
  const { onInit } = $props();

  let startAuthorizePlay: () => {};

  const onWelcomeFinish = () => {
    startAuthorizePlay?.();
    onInit?.();
  };
</script>

<div class="cover-container">
  <div class="content">
    <Logo finishCb={onWelcomeFinish} />
    <Authorize bind:play={startAuthorizePlay} />
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: min-content;
    gap: 4svw;
  }
  .cover-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
