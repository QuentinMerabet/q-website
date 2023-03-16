import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState, useMemo } from "react";
import React from "react";

import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Sphere,
  Stars,
  Html,
  PerspectiveCamera,
  TransformControls,
  useHelper,
  SoftShadows,
  Stats,
  MeshTransmissionMaterial,
  MeshRefractionMaterial,
} from "@react-three/drei";
import { RGBELoader } from "three-stdlib";
import { Attractor, Physics, RigidBody, Debug } from "@react-three/rapier";
import { Camera } from "three";
import {
  EffectComposer,
  Bloom,
  Noise,
  SSAO,
} from "@react-three/postprocessing";
import { useSpring, animated, config } from "@react-spring/three";
import { useControls } from "leva";
import { degToRad } from "three/src/math/MathUtils";

export default function Home() {
  function Ball(props) {
    const materialRef = useRef();

    // Animate the sheenTint value to change the color of the iridescence

    return (
      <RigidBody
        colliders="ball"
        restitution={0.6}
        scale={Math.random() * 0.25 + 0.75}
      >
        <Sphere
          args={[1, 32, 32]}
          position={[0, 0, 3]}
          castShadow
          receiveShadow
          {...props}
        >
          <meshPhysicalMaterial ref={materialRef} iridescence={5} sheen={0.5} />
        </Sphere>
      </RigidBody>
    );
  }

  function Balls() {
    const ballPositions = [
      [2, 2, 7],
      [-2, -2, 10],
      [0, 0, 8],
      [4, -4, 10],
      [-4, 4, 12],
      [-3, 3, 6],
      [-1, -1, 2],
      [1, 1, 4],
    ];
    return (
      <>
        {ballPositions.map((pos, index) => (
          <Ball key={index} position={pos} />
        ))}
      </>
    );
  }

  function Wall(props) {
    return (
      <RigidBody
        type="static"
        position={props.position}
        rotation={props.rotation}
      >
        <mesh>
          <planeBufferGeometry args={[props.width, props.height]} />
          <meshStandardMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    );
  }

  function Ground() {
    return (
      <RigidBody type="static">
        <mesh receiveShadow>
          <planeBufferGeometry args={[100, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </RigidBody>
    );
  }

  function Camera() {
    const refCam = useRef();
    useFrame(({ camera }) => {
      camera.lookAt(0, 0, 0);
    });

    const { anim1 } = useControls({ anim1: { value: false } });
    const camAnim = useSpring({
      x: anim1 ? 0 : 0,
      y: anim1 ? -15 : 0,
      z: anim1 ? 5 : 15,
      config: { mass: 1, tension: 100, friction: 20 },
    });
    return (
      <animated.group
        position-x={camAnim.x}
        position-y={camAnim.y}
        position-z={camAnim.z}
      >
        <PerspectiveCamera
          ref={refCam}
          position={[0, 0, 0]}
          fov={30}
          makeDefault
        />
      </animated.group>
    );
  }

  function Lights() {
    const refSpot = useRef();
    useHelper(refSpot, THREE.SpotLightHelper, "red");

    return (
      <>
        <ambientLight intensity={0.9} />
        <spotLight
          position={[3, 3, 6]}
          angle={2}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Quentin Merabet | developer + Cultural Worker</title>
        <meta
          name="description"
          content="My eclectic background in art direction, directing movies, and teaching code and design has instilled in me a unique perspective on interactivity and user experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Canvas
          shadows
          className="bg"
          //gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        >
          <Camera />
          <Lights />
          <fog attach="fog" args={["white", 10, 60]} />

          <Physics gravity={[0, 0, -1]}>
            <Attractor
              range={40}
              strength={2}
              type="linear"
              position={[0, 0, -5]}
            />
            <Balls />
            <Wall
              position={[0, 5, 0]}
              rotation={[degToRad(90), 0, 0]}
              width={10}
              height={10}
            />
            <Wall
              position={[0, -5, 0]}
              rotation={[degToRad(90), 0, 0]}
              width={10}
              height={10}
            />
            <Wall
              position={[-8, 0, 2]}
              rotation={[degToRad(90), degToRad(90), 0]}
              width={10}
              height={10}
            />
            <Wall
              position={[8, 0, 2]}
              rotation={[degToRad(90), degToRad(90), 0]}
              width={10}
              height={10}
            />
            <Ground />
          </Physics>
          <SoftShadows samples={6} size={12} focus={10} />

          <EffectComposer></EffectComposer>
        </Canvas>

        <section className="w-screen h-screen flex justify-center items-center">
          <div className="container mx-auto">
            <h1 className="mb-5">
              Bonjour,
              <br />
              I'm Quentin Merabet.
            </h1>
            <div className="tag">Developer + Cultural Worker</div>
            <p className="mt-10">
              My eclectic background in art direction, directing movies, and
              teaching code and design has instilled in me a unique perspective
              on interactivity and user experience.
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
