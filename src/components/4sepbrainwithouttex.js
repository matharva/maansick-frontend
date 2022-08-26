import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

export default function Model() {
  const { nodes, materials } = useGLTF("/4sepbrainwithouttex.glb");
  const brainRef = useRef();
  const topRightRef = useRef();
  const topLeftRef = useRef();
  const bottomRightRef = useRef();
  const bottomLeftRef = useRef();
  const PINK = new Color("#E75480");
  const DARK_PINK = new Color("#960365");

  const [rotationRate, setRotationRate] = useState(0.002);

  let state = 0;

  useFrame((state, delta) => {
    brainRef.current.rotation.y -= rotationRate;
  });

  useEffect(() => {
    topRightRef.current.material.color = DARK_PINK;
    topLeftRef.current.material.color = PINK;
    bottomLeftRef.current.material.color = PINK;
    bottomRightRef.current.material.color = PINK;
    brainRef.current.rotation.y = -1.5;
  }, [brainRef]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        clearInterval(timer);
        setRotationRate(0);
        topRightRef.current.material.color = PINK;
        topLeftRef.current.material.color = DARK_PINK;
        bottomLeftRef.current.material.color = PINK;
        bottomRightRef.current.material.color = PINK;
      }, 10000);

      topRightRef.current.material.color = PINK;
      topLeftRef.current.material.color = PINK;
      bottomLeftRef.current.material.color = PINK;
      bottomRightRef.current.material.color = PINK;
      if (state == 0) {
        topLeftRef.current.material.color = DARK_PINK;
      } else if (state == 1) {
        bottomLeftRef.current.material.color = DARK_PINK;
      } else if (state == 2) {
        bottomRightRef.current.material.color = DARK_PINK;
      } else if (state == 3) {
        topRightRef.current.material.color = DARK_PINK;
      }
      state = (state + 1) % 4;
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <group dispose={null} scale={0.02} ref={brainRef}>
      {/* Top right */}
      <mesh
        ref={topRightRef}
        geometry={nodes.right_front.geometry}
        material={nodes.right_front.material}
      >
        <meshStandardMaterial color={"#E75480"} />
      </mesh>
      {/* Top right */}

      {/* Bottom Right */}
      <mesh
        ref={bottomRightRef}
        geometry={nodes.right_back.geometry}
        material={nodes.right_back.material}
      >
        <meshStandardMaterial color={"#E75480"} />
      </mesh>
      {/* Bottom Right */}

      {/* Bottom Left */}
      <mesh
        ref={bottomLeftRef}
        geometry={nodes.left_back.geometry}
        material={nodes.left_back.material}
      >
        <meshStandardMaterial color={"#E75480"} />
      </mesh>
      {/* Bottom Left */}

      {/* Top Left */}
      <mesh
        geometry={nodes.mybrain003.geometry}
        material={nodes.mybrain003.material}
        ref={topLeftRef}
      >
        <meshStandardMaterial color={"#960365"} />
      </mesh>
      {/* Top Left */}
      <lineSegments
        geometry={nodes.mybrain003_1.geometry}
        material={nodes.mybrain003_1.material}
      />
    </group>
  );
}

useGLTF.preload("/4sepbrainwithouttex.glb");
