import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// import * as THREE from "three";

import Model from "./4sepbrainwithouttex.js";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const ThreeModel = () => {
  return (
    <div className="h-screen">
      <Canvas>
        {/* <color attach="background" args={"black"} /> */}
        <color attach="background" args={["#89253e", "#3a6186"]} />
        <OrbitControls
          minZoom={10}
          maxZoom={50}
          // enabled={!isDragging}
        />
        <Model />
        <ambientLight />
        <pointLight intensity={3} position={[10, 10, 1]} />
        {/* <Box /> */}
      </Canvas>
    </div>
  );
};

export default ThreeModel;
