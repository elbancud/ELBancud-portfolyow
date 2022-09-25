/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DoobiDooba (https://sketchfab.com/DoobiDooba)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/rubiks-cube-155420e09a124ec3a3bcca0852280672
title: rubik's cube
*/
<<<<<<< HEAD

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Rubics<T>(props: T) {
  const { nodes, materials } = useGLTF(
    "/src/assets/3d-models/rubics-cube/rubics.gltf"
  );
  const [scrollEffectRotation, setScrollEffectRotation] = useState<number>(0);
  const [scrollEffectZ, setScrollEffectZ] = useState<number>(0);
  const [scrollEffectScale, setScrollEffectScale] = useState<number>(9);

  useEffect(() => {
    const handleScroll = () => {
      setScrollEffectRotation(window.scrollY * 0.003);
      setScrollEffectZ(window.scrollY * 0.01);
      setScrollEffectScale(9 + window.scrollY * 0.03);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEffectRotation]);
=======
import { useGLTF } from '@react-three/drei/core/useGLTF';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};
export function Rubics(props: any) {
  const { nodes, materials } = useGLTF(
    'src/assets/3d-models/rubics-cube/rubics.gltf'
  ) as unknown as GLTFResult;
>>>>>>> 0b68b263652e109d5e09ebfed1b14e4758dc08c8
  return (
    <group
      scale={scrollEffectScale}
      position={[0, -3, scrollEffectZ]}
      rotation={[0, 2.5, scrollEffectRotation]}
      {...props}
<<<<<<< HEAD
      dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.15}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.RubixCube_RubixCube_0.geometry}
              material={materials.RubixCube}
            />
          </group>
=======
      dispose={null}
      position={[5, 0, -3]}
      scale={6}
      rotation={[-0.1, 1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-0.05, 0.03, 0.73]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.13}>
          <mesh
            geometry={nodes['������_0'].geometry}
            material={materials['.001']}
          />
        </group>
        <group
          position={[-0.06, 0.03, 0.73]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.06}>
          <mesh
            geometry={nodes['������001_0'].geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[0.05, 0.15, 0.62]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.88}>
          <mesh
            geometry={nodes['������002_0'].geometry}
            material={materials['.004']}
          />
        </group>
        <group
          position={[0.05, -0.08, 0.6]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={0.88}>
          <mesh
            geometry={nodes['������003_0'].geometry}
            material={materials['.005']}
          />
        </group>
        <group
          position={[-0.18, -0.08, 0.62]}
          rotation={[0, 0, -Math.PI]}
          scale={0.88}>
          <mesh
            geometry={nodes['������004_0'].geometry}
            material={materials['.006']}
          />
        </group>
        <group
          position={[0.05, -0.1, 0.84]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.88}>
          <mesh
            geometry={nodes['������005_0'].geometry}
            material={materials['.007']}
          />
        </group>
        <group
          position={[0.05, 0.14, 0.85]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.88}>
          <mesh
            geometry={nodes['������006_0'].geometry}
            material={materials['.008']}
          />
        </group>
        <group
          position={[0.06, -0.08, 0.84]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.88}>
          <mesh
            geometry={nodes['������007_0'].geometry}
            material={materials['.009']}
          />
        </group>
        <group position={[-0.06, 0.15, 0.73]} scale={0.04}>
          <mesh
            geometry={nodes['������010_0'].geometry}
            material={materials['.002']}
          />
        </group>
        <group
          position={[-0.06, 0.03, 0.6]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.04}>
          <mesh
            geometry={nodes['������008_0'].geometry}
            material={materials['.019']}
          />
        </group>
        <group
          position={[-0.06, -0.1, 0.73]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={0.04}>
          <mesh
            geometry={nodes['������009_0'].geometry}
            material={materials['.007']}
          />
        </group>
        <group
          position={[-0.06, 0.03, 0.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}>
          <mesh
            geometry={nodes['������011_0'].geometry}
            material={materials['.018']}
          />
        </group>
        <group
          position={[-0.18, 0.03, 0.73]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.04}>
          <mesh
            geometry={nodes['������012_0'].geometry}
            material={materials['.012']}
          />
        </group>
        <group
          position={[0.07, 0.03, 0.73]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.04}>
          <mesh
            geometry={nodes['������013_0'].geometry}
            material={materials['.013']}
          />
>>>>>>> 0b68b263652e109d5e09ebfed1b14e4758dc08c8
        </group>
      </group>
    </group>
  );
}

<<<<<<< HEAD
useGLTF.preload("/src/assets/3d-models/rubics-cube/rubics.gltf");
=======
useGLTF.preload('src/assets/3d-models/rubics-cube/rubics.gltf');
>>>>>>> 0b68b263652e109d5e09ebfed1b14e4758dc08c8
