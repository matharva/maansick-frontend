import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// import * as THREE from "three";

import Model from "./4sepbrainwithouttex.js";
import { OrbitControls } from "@react-three/drei";

const ThreeModel = () => {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          fov: 50,
          // position: [3.5, 3.5, 3.5],
          position: [5, 4, 0],
        }}
      >
        {/* <color attach="background" args={"black"} /> */}
        <color attach="background" args={["#89253e", "#3a6186"]} />
        <OrbitControls minZoom={10} maxZoom={50} enableZoom={false} />
        <Model />
        <ambientLight />
        <pointLight intensity={3} position={[1, 10, 1]} />
        {/* <Box /> */}
      </Canvas>
    </div>
  );
};

export default ThreeModel;
