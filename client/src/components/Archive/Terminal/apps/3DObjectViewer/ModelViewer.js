import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import GltfModel from "./GltfModel";


const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  console.log(`[3D Model Viewer] Viewer started.`)
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls  />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;