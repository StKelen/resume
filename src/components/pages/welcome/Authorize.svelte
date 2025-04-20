<script lang="ts">
  import { animate } from 'motion';
  import AttachFile from '@/assets/attach-file.svelte';
  import Fingerprint from '@/assets/fingerprint.svelte';
  let { onEnter, play = $bindable() } = $props();

  const triggerIconAnim = (e: MouseEvent) => {
    const targetButton = e.target as HTMLElement;
    animate(targetButton.querySelectorAll('.line')!, { pathLength: [0, 1] }, { duration: 0.8 });
  };

  play = () => {
    animate('.authorize', { x: 0 }, { duration: 0.4 }).then(() => {
      animate(
        '.start-btn',
        { boxShadow: '0px 0px 0px 4px #292c3338' },
        { repeat: Infinity, repeatType: 'reverse', ease: 'easeOut', delay: 1, duration: 1 }
      );
    });
  };
</script>

<div class="authorize-container">
  <div class="authorize">
    <span class="title">WELCOME</span>
    <div class="authorize-info">
      <button class="btn start-btn" onmouseenter={triggerIconAnim} onclick={onEnter}>
        <div class="icon-container">
          <Fingerprint class="fingerprint btn-icon" />
        </div>
        <span class="btn-text">TAP TO UNLOCK</span>
      </button>
      <div class="divider-container"><span class="divider-text">OR</span></div>
      <a class="btn download-btn" href="/resume.pdf" target="_blank" onmouseenter={triggerIconAnim}>
        <div class="icon-container">
          <AttachFile class="btn-icon" />
        </div>
        <span class="btn-text">DOWNLOAD RESUME</span>
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  .authorize-container {
    overflow: hidden;
  }
  .authorize {
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
      :global(.btn-icon) {
        width: 66%;
        height: 66%;
        :global(.line) {
          stroke: #bbbbbb;
        }
      }
    }
    .start-btn {
      background: #292c33;
      border-color: #292c33;
      box-shadow: 0px 0px 0px 0px #292c3320;
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
      &::before,
      &::after {
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
  }
</style>
