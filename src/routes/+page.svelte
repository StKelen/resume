<script lang="ts">
  import Welcome from '@/components/pages/welcome/index.svelte';
  import Projects from '@/components/pages/projects/index.svelte';
  import Header from '@/components/common/Header/index.svelte';

 // 'initd' means the preparation animation finished, the user can begin the interaction.
  let initd = $state(false);
  // 'entered' means the user click the button and enter the page.
  let entered = $state(false);
  // this method is to set the initd status.
  function onSystemInitd() {
    initd = true;
  }
  // this method is to set the entered status.
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
