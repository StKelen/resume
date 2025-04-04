<script lang="ts">
  import Logo from './Logo.svelte';
  import PoweredBy from './Info.svelte';
  import Authorize from './Authorize.svelte';
  const { onInit, onEnter } = $props();

  let startAuthorizePlay: () => void = $state(() => {});
  let startPoweredByPlay: () => void = $state(() => {});

  const onWelcomeFinish = () => {
    startAuthorizePlay?.();
    startPoweredByPlay?.();
    onInit?.();
  };
</script>

<div class="cover-container">
  <div class="content">
    <Logo finishCb={onWelcomeFinish} />
    <Authorize bind:play={startAuthorizePlay} {onEnter} />
  </div>
  <PoweredBy bind:play={startPoweredByPlay} />
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
