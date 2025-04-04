<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Engine,
    Scene,
    FreeCamera,
    DirectionalLight,
    PBRMaterial,
    ImportMeshAsync,
    HemisphericLight,
    Color3,
    Vector3,
    AxesViewer,
    Color4,
  } from '@babylonjs/core';
  import * as BABYLON from '@babylonjs/core';
  import '@babylonjs/loaders/glTF/2.0';
  import model from '@/assets/glass.glb';

  onMount(() => {
    const el: HTMLCanvasElement = document.querySelector('#projects-canvas')!;
    const engine = new Engine(el, true);
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0);

    const camera = new FreeCamera('camera', new Vector3(-4, 3, -2.8), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(el, true);
    camera.projectionPlaneTilt = -Math.PI / 8;

    ImportMeshAsync(model, scene).then((gltf) => {
      const { meshes } = gltf;
      const back = meshes.find((m) => m.name === 'end')!;
      const front = meshes.find((m) => m.name === 'front')!;
      const corner = meshes.find((m) => m.name === 'decoration_corner')!;
      const screw = meshes.find((m) => m.name === 'screw')!;

      const light = new HemisphericLight('environment_light', new Vector3(-1, 0, -1), scene);
      light.diffuse = new Color3(240 / 255, 228 / 255, 218 / 255);

      const directionalLight = new DirectionalLight('directional_light_1', new Vector3(0, 0, 0), scene);
      directionalLight.position.set(10, 10, 30);
      directionalLight.setDirectionToTarget(Vector3.Zero());
      directionalLight.diffuse = new Color3(235 / 255, 216 / 255, 202 / 255);
      directionalLight.intensity = 1.5;

      const anotherLight = new BABYLON.SpotLight(
        'spot_light',
        new Vector3(-3, 0, 0),
        new Vector3(1, 0, 0),
        Math.PI * 2,
        500,
        scene
      );
      anotherLight.diffuse = new Color3(245 / 255, 187 / 255, 139 / 255);
      anotherLight.intensity = 35;

      const transmission = new PBRMaterial('transmission')!;
      transmission.metallic = 0.2;
      transmission.alpha = 0.75;
      transmission.roughness = 0.8;
      transmission.albedoColor = new Color3(231 / 255, 225 / 255, 221 / 255);
      transmission.subSurface.isTranslucencyEnabled = true;

      back.material = transmission;
      front.material = transmission;
      // const axes = new AxesViewer(scene, 5);
    });
    engine.runRenderLoop(() => {
      scene.render();
    });
  });
</script>

<div class="projects-container">
  <div class="project-display-container">
    <canvas id="projects-canvas"></canvas>
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
