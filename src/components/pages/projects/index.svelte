<script lang="ts">
  import { onMount } from 'svelte';
  import { highlightModel, initModels, setScene } from '@/lib';
  onMount(async () => {
    const el = document.querySelector('#projects-canvas')!;

    await initModels();
    const canvas = setScene(el.clientWidth, el.clientWidth);
    el.appendChild(canvas);

    for (let i = 1; i <= 6; i++) {
      setTimeout(() => {
        highlightModel(i, 6);
      }, i * 1000);
    }
  });
</script>

<div class="projects-container">
  <div class="project-display-container">
    <div id="projects-canvas"></div>
    <div class="project-canvas-mask"></div>
  </div>
</div>

<style lang="scss">
  .projects-container {
    width: 100%;
    height: 100%;
    background: #ebe6e3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .project-display-container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  #projects-canvas {
    width: 100%;
    height: 100%;
  }
  .project-canvas-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0px 0px 40px 40px #ebe6e3;
    box-sizing: content-box;
    border: 50vw solid #ebe6e3;
    color: #cbb4a3;
  }
</style>
