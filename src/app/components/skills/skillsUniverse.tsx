"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import SkillGlobe from "./skillGlobe";

export default function SkillsUniverse() {
  return (
    <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[680px]">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />

        <SkillGlobe />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>
    </div>
  );
}