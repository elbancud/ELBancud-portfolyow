/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: dogflesh (https://sketchfab.com/dogflesh)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/retro-computer-9439cb5e09cc44caa63dfbfb299df45f
title: Retro computer
*/

import { useGLTF } from "@react-three/drei";

export function RetroPc(props) {
  const { nodes, materials } = useGLTF(
    "/src/assets/3d-models/retro-computer/retroPc.gltf"
  );
  return (
    <group
      position={[-9.5, -2, -3]}
      scale={6}
      dispose={null}
      rotation={[-0.1, 1.3, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/3d-models/retro-computer/retroPc.gltf");
