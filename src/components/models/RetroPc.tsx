/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: dogflesh (https://sketchfab.com/dogflesh)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/retro-computer-9439cb5e09cc44caa63dfbfb299df45f
title: Retro computer
*/

import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export function RetroPc<T>(props: T) {
  const { nodes, materials } = newFunction();
  const [scrollEffectRotation, setScrollEffectRotation] = useState<number>(0);
  const [scrollEffectZ, setScrollEffectZ] = useState<number>(-3);
  const [scrollEffectScale, setScrollEffectScale] = useState<number>(6);

  useEffect(() => {
    const handleScroll = () => {
      setScrollEffectRotation(window.scrollY * -0.003);
      setScrollEffectZ(-3 + window.scrollY * 0.01);
      setScrollEffectScale(6 + window.scrollY * 0.01);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEffectRotation]);
  return (
    <group
      position={[-9.5, -2, scrollEffectZ]}
      scale={scrollEffectScale}
      dispose={null}
      rotation={[-0.1, 1.3, scrollEffectRotation]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/3d-models/retro-computer/retroPc.gltf");
function newFunction(): { nodes: any; materials: any } {
  return useGLTF("/src/assets/3d-models/retro-computer/retroPc.gltf");
}
