import * as Three from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import model from '@/assets/glass.glb';

let _group: Three.Group;
let _camera: Three.Camera;
let _scene: Three.Scene;
let _renderer: Three.WebGLRenderer;
let _highlightIndex: number | undefined;
const DISPLAY_OFFSET = 1;
const _interactGroups: Three.Group[][] = [];

export async function initModels() {
  return new Promise<Three.Group>((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      model,
      (gltf) => {
        const meshes = gltf.scene.children;
        const bodyOriginMesh = meshes.find((m) => m.name === 'body') as Three.Mesh;
        const cornerOriginMesh = meshes.find((m) => m.name === 'corner') as Three.Mesh;
        const screwOriginMesh = meshes.find((m) => m.name === 'screw') as Three.Mesh;
        const body = new Three.Mesh(
          bodyOriginMesh.geometry,
          new Three.MeshLambertMaterial({
            transparent: true,
            opacity: 0.9,
            color: 0xfaeedb,
            depthWrite: true,
          })
        );
        const corner = new Three.Mesh(
          cornerOriginMesh.geometry,
          new Three.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 1,
            metalness: 0,
            reflectivity: 1,
            ior: 1,
          })
        );
        const screw = new Three.Mesh(
          screwOriginMesh.geometry,
          new Three.MeshPhysicalMaterial({
            color: 0xeceded,
            roughness: 0.6,
            metalness: 0.8,
            reflectivity: 1,
            ior: 1,
          })
        );
        body.castShadow = true;
        body.receiveShadow = true;
        body.name = 'body';
        screw.name = 'screw';
        corner.name = 'corner';

        _group = new Three.Group().add(body, corner, screw);
        (bodyOriginMesh.material as Three.Material).dispose();
        (cornerOriginMesh.material as Three.Material).dispose();
        (screwOriginMesh.material as Three.Material).dispose();
        resolve(_group);
      },
      undefined,
      (err) => reject(err)
    );
  });
}

export function getModel() {
  const newMeshes = _group.children.map((m) => {
    const newMesh = m.clone() as Three.Mesh<Three.BufferGeometry, Three.MeshLambertMaterial>;
    newMesh.material = (m as Three.Mesh<Three.BufferGeometry, Three.MeshLambertMaterial>).material.clone();
    return newMesh;
  });
  const model = new Three.Group().add(...newMeshes);
  model.scale.set(0.5, 0.5, 0.5);
  return model;
}

export function setScene(width: number, height: number) {
  // Init Engine
  _scene = new Three.Scene();
  _renderer = new Three.WebGLRenderer({ antialias: true });

  // Init Environment
  _renderer.setSize(width, height);
  _renderer.shadowMap.enabled = true;
  _renderer.shadowMap.type = Three.PCFSoftShadowMap;
  _renderer.setClearColor(0xefe6e3);
  _scene.fog = new Three.Fog(0xefe6e3, 2, 20);

  // Init Camera
  _camera = new Three.PerspectiveCamera(20, width / height, 0.1, 500);
  _camera.position.set(4, 6, -5);
  _camera.castShadow = true;
  _camera.lookAt(new Three.Vector3(0, 0, 0));

  // Init Lights
  const atmosphereLight = new Three.AmbientLight(0xe6bcac);

  const mainLight = new Three.DirectionalLight(0xf1e4da, 2);
  mainLight.position.set(0, 10, -30);
  mainLight.castShadow = true;
  mainLight.shadow.intensity = 0.9;

  const minorLight = new Three.DirectionalLight(0xf4e9e1, 2.5);
  minorLight.position.set(0, 3, -0.2);

  const frontLight = new Three.SpotLight(0xf4e9e1, 20, 0, Math.PI / 6, 0.4);
  frontLight.position.set(3, -0.5, -3);
  frontLight.target.position.set(-2, -1.5, 1);

  _scene.add(atmosphereLight, mainLight, minorLight, frontLight, frontLight.target);
  renderModels();
  _scene.add(new Three.AxesHelper());
  _renderer.setAnimationLoop(animate);
  _renderer.render(_scene, _camera);
  return _renderer.domElement;
}

export function renderModels() {
  for (let j = 0; j <= 2; j++) {
    const x = j - 1;
    _interactGroups.push([]);
    for (let i = 0; i <= 27; i++) {
      const z = i - Math.ceil(27 / 2) - DISPLAY_OFFSET;
      const model = getModel();
      model.position.x = 1.3 * x;
      model.position.z = -0.15 * z;
      _interactGroups[j].push(model);
      _scene.add(model);
    }
  }
}

export function highlightModel(highlightIndex: number, totalHighlights: number) {
  const midIndex = Math.ceil(_interactGroups[1].length / 2) + DISPLAY_OFFSET;
  _highlightIndex = highlightIndex - Math.ceil(totalHighlights / 2) + midIndex;
}

function animate() {
  if (!_highlightIndex) return;
  for (let i = 0; i < _interactGroups.length; i++) {
    const row = _interactGroups[i];
    for (let j = 0; j < row.length; j++) {
      const group = row[j];
      const targetY = (0.5 - Math.abs(j - _highlightIndex) * 0.08) * (1 - Math.abs(1 - i) * 0.2);
      group.position.y = (targetY - group.position.y) / 12 + group.position.y;
      if (Math.abs(group.position.y - targetY) <= 0.001) group.position.y = targetY;
      group.position.y = Math.max(group.position.y, 0);
      const body = group.children.find((c) => c.name === 'body')! as Three.Mesh<
        Three.BufferGeometry,
        Three.MeshLambertMaterial
      >;
      if (i === 1)
        body.material.emissive = j === _highlightIndex ? new Three.Color(0xa3630f) : new Three.Color(0x00000000);
    }
  }
  _renderer.render(_scene, _camera);
}
