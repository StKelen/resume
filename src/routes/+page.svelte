<script lang="ts">
  import Welcome from '@/components/pages/welcome/index.svelte';
  import Projects from '@/components/pages/projects/index.svelte';
  import Header from '@/components/common/Header/index.svelte';

  let initd = $state(false);
  let entered = $state(false);
  function onSystemInitd() {
    initd = true;
  }
  function onSystemEntered() {
    entered = true;
  }
</script>

<Header {initd} />
{#if entered}
  <Projects />
{:else}
  <Welcome onInit={onSystemInitd} onEnter={onSystemEntered} />
{/if}
