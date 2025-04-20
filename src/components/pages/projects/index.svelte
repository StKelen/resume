<script lang="ts">
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import { initScene, renderModels, highlightModel, projectsExperienceData } from '@/lib';

  const mdRenderer = new marked.Renderer();
  mdRenderer.link = ({ href, tokens }) => {
    return `<a target="_blank" href="${href}">${tokens?.[0]?.raw}</a>`;
  };
  marked.use({ renderer: mdRenderer });

  const ioCallback: IntersectionObserverCallback = (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLDivElement;
      const { key } = el.dataset;
      if (key) highlightModel(key);
    }
  };

  onMount(async () => {
    const el = document.querySelector('#projects-canvas')!;
    const canvas = await initScene(el.clientWidth, el.clientHeight);
    renderModels(projectsExperienceData);
    el.appendChild(canvas);

    const observer = new IntersectionObserver(ioCallback, {
      threshold: [0.25, 0.5, 0.75, 1.0],
      root: document.querySelector('.projects-list-container'),
    });
    document.querySelectorAll('.project-item').forEach((i) => observer.observe(i));
  });
</script>

<div class="projects-container">
  <div class="project-display-container">
    <div id="projects-canvas"></div>
    <div class="project-canvas-mask"></div>
  </div>
  <div class="projects-list-container">
    {#each projectsExperienceData as project}
      <div class="project-item" data-key={project.id}>
        <div class="project-header">
          <span class="project-header-id">{project.id}</span>
          <span class="project-header-title">{project.title}</span>
        </div>
        <div class="flip-container">
          <div class="project-cover">
            <img src={project.display_img} class="project-cover-img" alt="project display" />
          </div>
          <div class="project-desc">
            {#each project.desc as desc}
              <span class="project-desc-title">{desc.key}</span>
              <div class="project-desc-content">{@html marked(desc.content)}</div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .projects-container {
    width: 100%;
    height: 100%;
    background: #ebe6e3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-display-container {
    width: 50%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
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
    border-radius: 50% 30% 50% 30%;
    box-shadow: inset 0px 0px 40px 40px #ebe6e3;
    box-sizing: content-box;
    border: 50vw solid #ebe6e3;
    color: #cbb4a3;
  }

  .projects-list-container {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    scroll-snap-type: y mandatory;
    overflow-x: hidden;
    flex-grow: 1;
  }
  .project-item {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    scroll-snap-align: center;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0 0.5rem;
  }
  .project-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    &-id {
      padding-right: 0.5rem;
      margin-right: 0.5rem;
      color: #292c33;
      font-size: 2rem;
      font-weight: 800;
      border-right: 4px solid #292c33d0;
    }
    &-title {
      margin-right: 0.5rem;
      color: #292c33;
      font-size: 1.2rem;
      font-weight: 800;
    }
  }

  .flip-container {
    position: relative;
    width: 100%;
    height: max-content;
    &:hover {
      .project-cover {
        opacity: 0;
        transform: rotateY(180deg);
      }
      .project-desc {
        opacity: 1;
        transform: rotateY(0deg);
      }
    }
  }
  .project-cover,
  .project-desc {
    padding: 0.5rem;
    border-radius: 4px;
    box-shadow: 2px 2px 4px #292c3330;
    background: linear-gradient(45deg, #d8d4ce, #d5d6d1);
    transition:
      transform 0.5s ease-out,
      opacity 0.3s ease;
  }

  .project-cover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    &-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .project-desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0;
    transform: rotateY(-180deg);
    &-title {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 500;
      margin: 1rem 0 0.5rem;
      padding: 0.3rem;
      background-color: #292c33d0;
    }
    &-content {
      color: #292c33;
      font-size: 1rem;
      text-align: justify;
      line-height: 1.4rem;
    }
    :global {
      ol {
        padding-inline-start: 1.3rem;
      }
      a {
        text-decoration: underline;
      }
    }
  }
</style>
