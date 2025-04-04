<script lang="ts">
  import * as Three from 'three';
  import { onMount } from 'svelte';
  import { initModels, getModel } from '@/lib';
  onMount(async () => {
    const el = document.querySelector('#projects-canvas')!;
    const scene = new Three.Scene();

    const renderer = new Three.WebGLRenderer({ antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = Three.VSMShadowMap;
    el.appendChild(renderer.domElement);

    renderer.setClearColor(0xefe6e3);
    scene.fog = new Three.Fog(0xefe6e3, 2, 20);

    await initModels();
    for (let i = 0; i <= 69; i++) {
      const z = i - 35;
      const model = getModel();
      model.position.z = -0.15 * z;
      model.scale.setX(0.5);
      model.scale.setY(0.5);
      model.scale.setZ(0.75);
      // model.position.y = (35 - Math.abs(z)) * 0.01;
      scene.add(model);
    }

    const camera = new Three.PerspectiveCamera(15, el.clientWidth / el.clientHeight, 0.1, 500);
    camera.position.x = 3.5;
    camera.position.y = 3.5;
    camera.position.z = -6;
    camera.castShadow = true;
    camera.lookAt(new Three.Vector3(0, 0, 0));

    const atmosphereLight = new Three.AmbientLight(0xd0bcac);
    scene.add(atmosphereLight);

    const directionalLight = new Three.DirectionalLight(0xebd8ca, 2);
    directionalLight.position.set(0, 0, -30);
    directionalLight.castShadow = true;
    directionalLight.shadow.blurSamples = 2;
    directionalLight.shadow.intensity = 0.8;
    directionalLight.shadow.radius = 1.7;
    scene.add(directionalLight);

    const anotherLight = new Three.SpotLight(0xf9ead2, 120, 0, Math.PI / 7, 1, 2);
    anotherLight.position.set(4, -1, 0);
    anotherLight.target.position.set(0, -1, 0);
    anotherLight.castShadow = true;
    scene.add(anotherLight, anotherLight.target);

    const addLight = new Three.DirectionalLight(0xffffff, 2.5);
    addLight.position.set(0, 3, 0);
    addLight.shadow.bias = 0.1;
    scene.add(addLight);

    const axesHelper = new Three.AxesHelper(5);
    scene.add(axesHelper);
    renderer.render(scene, camera);
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
