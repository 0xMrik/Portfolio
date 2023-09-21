import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EthereumViolet = () => {
  const { scene } = useGLTF("./eth_official/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} color="#5632FF" />{" "}
      {/* Pour lambert3 */}
      <pointLight position={[10, 0, 20]} intensity={0.5} color="#2F51FF" />{" "}
      {/* Pour lambert4 */}
      <pointLight position={[20, 10, 0]} intensity={0.5} color="#41FFDE" />{" "}
      {/* Pour lambert2 */}
      <pointLight
        position={[-20, -10, 0]}
        intensity={0.5}
        color="#808080"
      />{" "}
      <primitive object={scene} scale={7} position={[0, -3, 0]} />
    </mesh>
  );
};

const EthereumVioletCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [0, -0.5, 20],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <EthereumViolet />
      </Suspense>
    </Canvas>
  );
};

export default EthereumVioletCanvas;
