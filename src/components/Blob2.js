import { useState, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  MeshDistortMaterial,
  ContactShadows,
  Text,
  MeshTransmissionMaterial,
  Center,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { RGBELoader } from "three-stdlib";
import { useControls } from "leva";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Blob2(props) {
  const hdrUrl =
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr";

  function Camera() {
    return <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={30} />;
  }

  function Lights() {
    return (
      <>
        <Environment files={hdrUrl} />
        <spotLight position={[2, 2, 4]} angle={2} penumbra={1} castShadow />
      </>
    );
  }

  function TheBlob() {
    const config = useControls({
      transmissionSampler: false,
      backside: true,
      samples: { value: 32, min: 1, max: 32, step: 1 },
      resolution: { value: 512, min: 256, max: 2048, step: 256 },
      transmission: { value: 0.99, min: 0, max: 1 },
      roughness: { value: 0.2, min: 0, max: 1, step: 0.01 },
      thickness: { value: 0.4, min: 0, max: 10, step: 0.01 },
      ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
      chromaticAberration: { value: 0, min: 0, max: 1 },
      anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
      clearcoat: { value: 0, min: 0, max: 1 },
      attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
      attenuationColor: "#ffffff",
      color: "#ffffff",
      bg: "#ffffff",
    });

    return (
      <>
        <mesh position={[0, 0, 2]} scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            background={new THREE.Color(config.bg)}
            {...config}
          />
        </mesh>
      </>
    );
  }

  return (
    <Canvas
      shadows
      gl={{ alpha: true }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Camera />
      <Lights />
      <EffectComposer>
        <Bloom luminanceThreshold={0.9} intensity={2} levels={9} mipmapBlur />
      </EffectComposer>

      <Text color="black">Bonjour.</Text>
      <TheBlob />
    </Canvas>
  );
}
