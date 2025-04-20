import * as Three from 'three';
import { initModels, getModel, createTag } from './model';

const DISPLAY_OFFSET = 2;

let _scene: Three.Scene;
let _renderer: Three.WebGLRenderer;
let _camera: Three.Camera;

let _highlightIndex: number | undefined;
const _interactGroups: Three.Group[][] = [];

//  create the 3D Scene
export async function initScene(width: number, height: number) {
  await initModels();

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
  _camera.position.set(-2, 6, -4);
  _camera.castShadow = true;
  _camera.lookAt(new Three.Vector3(0, 1, 0));

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

  // Init Animation
  _renderer.setAnimationLoop(animate);

  // Finish Init
  _renderer.render(_scene, _camera);
  return _renderer.domElement;
}

// Create the grid of models by given tags
export function renderModels(tagsInfo: { id: string }[]) {
  const tagStartIndex = Math.ceil((27 - tagsInfo.length) / 2) + DISPLAY_OFFSET;
  for (let row = 0; row <= 2; row++) {
    const x = row - 1;
    _interactGroups.push([]);
    for (let column = 0; column <= 27; column++) {
      const z = column - Math.ceil(27 / 2) - DISPLAY_OFFSET;
      const model = getModel();
      model.position.x = 1.3 * x;
      model.position.z = -0.15 * z;
      if (row === 1 && column < tagStartIndex + tagsInfo.length && column >= tagStartIndex) {
        model.name = tagsInfo[column - tagStartIndex].id;
        // for the middle models, create tag
        const tag = createTag(model.name);
        model.add(tag);
      }
      _interactGroups[row].push(model);
      _scene.add(model);
    }
  }
  _renderer.render(_scene, _camera);
}

// highlight specific model
export function highlightModel(key: string) {
  _highlightIndex = _interactGroups[1].findIndex((g) => g.name === key);
}

// when _highlightIndex is given, makes the specific model highlight and change corresponding position Y.
function animate() {
  if (!_highlightIndex) return;
  for (let i = 0; i < _interactGroups.length; i++) {
    const row = _interactGroups[i];
    for (let j = 0; j < row.length; j++) {
      const group = row[j];
      let targetY = 0.5;
      if (i !== 1 || j !== _highlightIndex) {
        targetY = (0.3 - Math.abs(j - _highlightIndex) * 0.08) * (1 - Math.abs(1 - i) * 0.2);
      }
      group.position.y = (targetY - group.position.y) / 12 + group.position.y;
      if (Math.abs(group.position.y - targetY) <= 0.001) group.position.y = targetY;
      group.position.y = Math.max(group.position.y, 0);
      // use emissive field to make model lighter.
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
