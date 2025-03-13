<script lang="ts">
  import gsap from 'gsap';
  import { onMount } from 'svelte';

  const { finishCb } = $props();

  onMount(() => {
    const tl = gsap.timeline({
      onComplete() {
        finishCb();
        gsap.to('.logo-container', { x: 0, duration: 0.4 });
      },
    });
    gsap.set('#container-triangle, #outer-triangle', { transformOrigin: '66% 50%' });
    gsap.set('#inner-triangle', { transformOrigin: '33% 50%' });
    tl.to('.logo-container', { opacity: 1, duration: 0 });
    tl.fromTo('#container-triangle', { scale: 0 }, { scale: 1, duration: 0.3 });
    tl.fromTo('#outer-triangle', { rotate: 360, scale: 0 }, { rotate: 0, scale: 1, duration: 0.5 }, '-=0.1');
    tl.fromTo('#inner-triangle', { rotate: 360, scale: 0 }, { rotate: 0, scale: 1, duration: 0.5 }, '-=0.3');
    tl.to('.logo-container .title', { width: '100%', duration: 0.6, ease: 'steps(12)' }, 0.2);
    tl.play();
  });
</script>

<div class="logo-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none" class="logo">
    <g id="container-triangle">
      <path d="M114 3L8 63.3689L114 124.704V3Z" stroke="#c4c3bf" stroke-width="3" fill="#c4c3bf"></path>
    </g>
    <g id="outer-triangle">
      <path d="M112.5 63.5L87 48.5L112.5 5.5V63.5Z" fill="#404040"></path>
      <path d="M113 123L61 92.5L86.5 78.5L113 123Z" fill="#333333"></path>
      <path d="M61 63.5H10.5L61 34.5V63.5Z" fill="#4D4D4D"></path>
    </g>
    <g id="inner-triangle">
      <path d="M87 48.5L61 35L77.5 63.5L87 48.5Z" fill="#595959"></path>
      <path d="M77.5 63.5L61 92.5V63.5H77.5Z" fill="#666666"></path>
      <path d="M86.5 78.5L77.5 63.5H112.5L86.5 78.5Z" fill="#737373"></path>
    </g>
  </svg>
  <span class="title">KELEN's HOME</span>
</div>

<style lang="scss">
  .logo-container {
    padding-right: 1svw;
    transform: translateX(5svw);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    overflow: hidden;
    opacity: 0;
    .logo {
      width: 12svw;
      height: 12svw;
      min-width: 160px;
      min-height: 160px;
      margin-bottom: 16px;
    }
    .title {
      width: 0;
      color: #292c33;
      font-size: 1.4em;
      font-weight: 600;
      font-family: 'Ubuntu', sans-serif;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>
