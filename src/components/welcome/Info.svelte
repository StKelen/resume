<script lang="ts">
  import gsap from 'gsap';

  export const play = () => {
    gsap.to('.powered-by', { x: 0, duration: 0.5 });
  };
</script>

<div class="powered-by-container">
  <div class="powered-by">
    <div class="parallelogram"></div>
    <div class="parallelogram"></div>
    <div class="parallelogram"></div>
    <span class="powered-by-text">POWERED BY KELEN's HOME</span>
    <div class="parallelogram"></div>
    <div class="parallelogram"></div>
    <div class="parallelogram"></div>
  </div>
</div>

<style lang="scss">
  .powered-by-container {
    position: fixed;
    bottom: 3svw;
    right: 3.5svw;
    overflow: hidden;
    .powered-by {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: right;
      padding: 0 10px;
      transform: translateX(105%);
    }
    .parallelogram {
      width: 0.3rem;
      height: 1em;
      background: #292c33b0;
      margin-right: 0.35em;
      transform: skewX(-45deg);
    }
    .powered-by-text {
      color: #292c33;
      font-size: 12px;
      margin: 2px 1em 0;
    }
  }
</style>
