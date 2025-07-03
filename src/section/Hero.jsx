import React, { Suspense } from 'react';
import ParallaxBackground from '../components/ParallaxBackground';
import HeroText from '../components/HeroText';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Loader, Float } from '@react-three/drei';
import { Astronaut } from '../components/Astronaut';
import { useMediaQuery } from 'react-responsive';
import { easing } from 'maath';

export const Hero = () => {
  const mobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex ">
      {/* Loader rendered globally OUTSIDE Canvas */}
      <Loader />

      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [1, 4.3, 3] }}>
          <Suspense fallback={null}>
            <Float>
              <Astronaut
                scale={mobile ? 0.3 : 0.4}
                position={mobile ? [0, -1.5, 0] : [2, -1.5, 0]}
              />
            </Float>
            <OrbitControls />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.9,
      delta
    );
  });
  return null;
}

export default Hero;
