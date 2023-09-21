import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ethereum = () => {
  const eth_logo = useGLTF("./eth_logo/scene.gltf");
  return (
    <mesh>
      <directionalLight
        position={[0, 50, 20]}
        intensity={1.5}
        color={"#ffffff"}
        castShadow
      />
      <hemisphereLight
        intensity={0.8}
        skyColor={"#ffffff"}
        groundColor={"#444444"}
      />
      <pointLight
        position={[20, 20, 20]}
        intensity={4}
        distance={60}
        decay={2}
        color={"#FFD700"}
        castShadow
      />
      <pointLight
        position={[-20, -20, -20]}
        intensity={4}
        distance={60}
        decay={2}
        color={"#4B0082"}
        castShadow
      />
      <pointLight
        position={[0, 20, -20]}
        intensity={20}
        distance={60}
        decay={2}
        color={"#00FF00"}
        castShadow
      />
      <pointLight
        position={[0, -20, 0]}
        intensity={25}
        distance={40}
        decay={2}
        color={"#ffffff"}
        castShadow
      />
      <pointLight
        position={[10, -10, 10]}
        intensity={2}
        distance={30}
        decay={2}
        color={"#ffffff"}
        castShadow
      />
      <primitive
        object={eth_logo.scene}
        scale={2}
        position={[0, -5, 0]}
        rotation={[0, -0.7, 0]}
      />
    </mesh>
  );
};

const EthereumCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        far: 100,
        position: [0, 0, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={1}
          enableZoom={false}
        />
        <Ethereum />
      </Suspense>
    </Canvas>
  );
};

export default EthereumCanvas;
