<script lang="ts">
  import Welcome from '@/components/welcome/index.svelte';
  import Header from '@/components/common/Header/index.svelte';

  let initd = $state(false);
  function onSystemInitd() {
    initd = true;
  }
</script>

<Welcome onInit={onSystemInitd} />
<Header initd={initd} />
