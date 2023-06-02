import { useState, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

export default function Blob(props) {
  const { theme, toggleTheme } = props;
  const [hovered, setHovered] = useState(false);

  const { wobble } = useSpring({
    from: {
      wobble: 1.5,
    },
    to: {
      wobble: hovered ? 1.1 : theme === "dark" ? 1.05 : 1,
    },
    config: { mass: 2, tension: 1000, friction: 10 },
  });

  function Camera() {
    return <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={30} />;
  }

  function Lights() {
    return (
      <>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[2, 2, 4]}
          angle={2}
          penumbra={1}
          intensity={2}
          castShadow
        />
      </>
    );
  }

  function TheBlob() {
    const blob = useRef();
    const light = useRef();
    useFrame((state) => {
      light.current.position.x = state.mouse.x * 10;
      light.current.position.y = state.mouse.y * 10;
      light.current.rotation.y = state.mouse.y * 10;
      if (blob.current) {
        blob.current.position.x = THREE.MathUtils.lerp(
          blob.current.position.x,
          hovered ? state.mouse.x / 3 : 0,
          0.2
        );
        blob.current.position.y = THREE.MathUtils.lerp(
          blob.current.position.y,
          hovered ? state.mouse.y / 3 : 0,
          0.2
        );
      }
    });
    return (
      <>
        <pointLight
          ref={light}
          position={[0, 0, -1]}
          color={"white"}
          intensity={1}
          distance={10}
        />
        <a.mesh
          ref={blob}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => toggleTheme()}
          scale={wobble}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={theme === "dark" ? "black" : "white"}
            distort={0.6}
            reflectivity={theme === "dark" ? 0.1 : 1}
            speed={1}
            roughness={theme === "dark" ? 0.5 : 0.2}
          />
        </a.mesh>
      </>
    );
  }

  return (
    <Canvas
      shadows
      gl={{ alpha: true }}
      style={{ width: "300px", height: "300px", userSelect: "none" }}
    >
      <Camera />
      <Lights />
      <TheBlob />
      {false && (
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.2, 0]}
          scale={10}
          blur={4}
          opacity={0.1}
        />
      )}
    </Canvas>
  );
}
