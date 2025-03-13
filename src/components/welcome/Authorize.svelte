<script lang="ts">
  import gsap from 'gsap';
  import Fingerprint from '@/assets/fingerprint.svelte';

  export const play = () => {
    const tl = gsap.timeline();
    tl.to('.authorize-container', { x: 0, duration: 0.4 });
    tl.to('.fingerprint-base .odd', { strokeDasharray: '50px 50px', duration: 0.6, delay: 0.4 });
    tl.to('.fingerprint-base .even', { strokeDashoffset: '0px', duration: 0.6 }, '-=0.4');
    tl.to('.fingerprint-tips', { y: 0, duration: 0.3 });
    tl.play();
  };
</script>

<div class="authorize">
  <div class="authorize-container">
    <span class="title">WELCOME</span>
    <div class="authorize-info">
      <div class="fingerprint-container">
        <Fingerprint class="fingerprint fingerprint-base" />
        <Fingerprint class="fingerprint fingerprint-active" />
      </div>
      <div class="fingerprint-tips-container">
        <span class="fingerprint-tips">TAP TO AUTHORIZE</span>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .authorize {
    overflow: hidden;
  }
  .authorize-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 200px;
    transform: translateX(-100%);
    .title {
      color: #292c33;
      font-weight: 500;
      font-size: 1.5rem;
      font-family: 'Ubuntu', sans-serif;
      margin-bottom: 54px;
    }
    .authorize-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
    .fingerprint-container {
      position: relative;
      width: 8svw;
      height: 8svw;
      max-width: 64px;
      max-height: 64px;
      margin-bottom: 8px;
    }
    :global(.fingerprint) {
      width: 8svw;
      height: 8svw;
      max-width: 64px;
      max-height: 64px;
      opacity: 1;
      position: absolute;
      stroke: #bbb;
    }
    :global(.fingerprint-active) {
      stroke: #000;
    }
    :global(.odd) {
      stroke-dasharray: 0px 50px;
      stroke-dashoffset: 1px;
      transition: stroke-dasharray 1ms;
    }
    :global(.even) {
      stroke-dasharray: 50px 50px;
      stroke-dashoffset: -41px;
      transition: stroke-dashoffset 1ms;
    }
    :global(.active .fingerprint-active .odd) {
      stroke-dasharray: 50px 50px;
      transition: stroke-dasharray 2000ms;
    }
    :global(.active .fingerprint-active .even) {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 2000ms;
    }
    .fingerprint-tips {
      display: block;
      color: #acafa6;
      font-size: 0.8rem;
      transform: translateY(-100%);
      font-family: 'Ubuntu', sans-serif;
    }
    .fingerprint-tips-container {
      overflow: hidden;
      height: fit-content;
    }
  }
</style>
