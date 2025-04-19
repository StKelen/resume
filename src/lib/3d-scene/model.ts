import * as Three from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import model from '@/assets/glass.glb';

let _group: Three.Group;

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

export function createTag(id: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 150;
  canvas.height = 60;
  canvas.classList.add('_project_tag-container');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 150, 60);
    ctx.fillStyle = '#292c33';
    ctx.font = '600 18px Ubuntu';
    ctx.fillText(`KELEN's HOME`, 4, 24);
    ctx.font = '400 16px Ubuntu';
    ctx.fillText(`NO. ${id}`, 4, 48);
  }

  const mesh = new Three.Mesh(
    new Three.PlaneGeometry(0.75, 0.3),
    new Three.MeshBasicMaterial({ map: new Three.CanvasTexture(canvas) })
  );
  mesh.rotateY(Math.PI);
  mesh.position.copy(new Three.Vector3(0.7, 1.3, -0.1));
  return mesh;
}
