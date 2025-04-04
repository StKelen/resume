import {
  Mesh,
  Color,
  Group,
  MeshLambertMaterial,
  type Material,
  MeshPhysicalMaterial,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import model from '@/assets/glass.glb';

let _group: Group;

export async function initModels() {
  return new Promise<Group>((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      model,
      (gltf) => {
        const meshes = gltf.scene.children;
        const backOriginMesh = meshes.find((m) => m.name === 'end') as Mesh;
        // const midOriginMesh = meshes.find((m) => m.name === 'mid') as Mesh;
        const frontOriginMesh = meshes.find((m) => m.name === 'front') as Mesh;
        const cornerOriginMesh = meshes.find((m) => m.name === 'decoration_corner') as Mesh;
        const screwOriginMesh = meshes.find((m) => m.name === 'screw') as Mesh;
        // const transmission = Object.assign(new MeshTransmissionMaterial(10), {
        //   thickness: 0.5,
        //   metalness: 0.1,
        //   roughness: 1,
        //   transmission: 0.9,
        //   ior: 1.2,
        //   color: new Color(0xfef4ec),
        //   depthWrite: true,
        // });
        const transmission = new MeshLambertMaterial({
          transparent: true,
          opacity: 0.7,
          depthTest: true,
          depthWrite: true,
          color: 0xffefe1,
        });
        const back = new Mesh(backOriginMesh.geometry, transmission);
        const front = new Mesh(frontOriginMesh.geometry, transmission);
        back.updateMatrix();
        front.updateMatrix();
        const corner = new Mesh(
          cornerOriginMesh.geometry,
          new MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 1,
            metalness: 0,
            reflectivity: 1,
            ior: 1,
          })
        );
        const screw = new Mesh(
          screwOriginMesh.geometry,
          new MeshPhysicalMaterial({
            color: 0xeceded,
            roughness: 0.6,
            metalness: 0.8,
            reflectivity: 1,
            ior: 1,
          })
        );
        front.receiveShadow = true;
        back.receiveShadow = true;

        _group = new Group().add(back, front, corner, screw);
        (backOriginMesh.material as Material).dispose();
        // (midOriginMesh.material as Material).dispose();
        (frontOriginMesh.material as Material).dispose();
        (cornerOriginMesh.material as Material).dispose();
        (screwOriginMesh.material as Material).dispose();
        resolve(_group);
      },
      undefined,
      (err) => reject(err)
    );
  });
}

export function getModel() {
  const newMeshes = _group.children.map((m) => m.clone());
  return new Group().add(...newMeshes);
}
