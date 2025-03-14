<script lang="ts">
  import gsap from 'gsap';
  import Fingerprint from '@/assets/fingerprint.svelte';

  export const play = () => {
    const tl = gsap.timeline();
    tl.to('.authorize-container', { x: 0, duration: 0.4 });
    tl.fromTo(
      '.start-btn',
      { boxShadow: '0px 0px 0px 0px #292c3320' },
      { boxShadow: '0px 0px 0px 4px #292c3338', ease: 'sine.out', repeat: -1, duration: 1.5, yoyo: true }
    );
    // tl.to('.fingerprint-base .odd', { strokeDasharray: '50px 50px', duration: 0.6, delay: 0.4 });
    // tl.to('.fingerprint-base .even', { strokeDashoffset: '0px', duration: 0.6 }, '-=0.4');
    // tl.to('.fingerprint-tips', { y: 0, duration: 0.3 });
    tl.play();
  };
</script>

<div class="authorize">
  <div class="authorize-container">
    <span class="title">WELCOME</span>
    <div class="authorize-info">
      <button class="btn start-btn">
        <div class="icon-container">
          <Fingerprint class="fingerprint fingerprint-base" />
          <Fingerprint class="fingerprint fingerprint-active" />
        </div>
        <span class="btn-text">TAP TO UNLOCK</span>
      </button>
      <div class="divider-container"><span class="divider-text">OR</span></div>
      <button class="btn download-btn">
        <div class="icon-container">
          <Fingerprint class="fingerprint fingerprint-base" />
          <Fingerprint class="fingerprint fingerprint-active" />
        </div>
        <span class="btn-text">DOWNLOAD RESUME</span>
      </button>
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
    padding: 6px;
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
      align-items: stretch;
      justify-content: flex-end;
    }
    .btn {
      width: 15svw;
      height: 4svw;
      min-width: 220px;
      min-height: 48px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-style: solid;
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;
      .btn-text {
        font-size: 14px;
        font-family: 'Ubuntu', sans-serif;
        flex: auto;
        text-align: center;
        padding-left: 3px;
      }
      .icon-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(4svw - 3px);
        height: calc(4svw - 3px);
        min-height: 42px;
        min-width: 42px;
        border-radius: 6px;
      }
    }
    .start-btn {
      background: #292c33;
      border-color: #292c33;
      border-width: 3px;
      .btn-text {
        color: #ffffff;
      }
      .icon-container {
        background: #f8f8f8;
      }
    }
    .download-btn {
      background: transparent;
      border-color: #292c3340;
      border-width: 2px;
      .btn-text {
        color: #292c3390;
      }
    }
    .divider-container {
      margin: 16px 0;
      position: relative;
      text-align: center;
      color: #292c3390;
      font-size: 12px;
      font-family: 'Ubuntu', sans-serif;
      &::before, &::after {
        content: '';
        position: absolute;
        top: 49%;
        border-top: 1px solid #292c3320;
        z-index: 0;
      }
      &::before {
        left: 0;
        right: 60%;
      }
      &::after {
        left: 60%;
        right: 0;
      }
    }
    :global(.fingerprint) {
      width: 88%;
      height: 88%;
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
    :global(.fingerprint-base .odd) {
      stroke-dasharray: 50px 50px;
      transition: stroke-dasharray 2000ms;
    }
    :global(.fingerprint-base .even) {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 2000ms;
    }
    :global(.active .fingerprint-active .odd) {
      stroke-dasharray: 50px 50px;
      transition: stroke-dasharray 2000ms;
    }
    :global(.active .fingerprint-active .even) {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 2000ms;
    }
  }
</style>
