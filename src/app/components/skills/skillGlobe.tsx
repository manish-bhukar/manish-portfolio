"use client";

import { Line } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import SkillNode from "./skillNode";
import { skills } from "../../data/skills.data";

const GLOBE_RADIUS = 2.6;

export default function SkillGlobe() {
  const positions = useMemo(() => {
    const points: [number, number, number][] = [];

    const offset = 2 / skills.length;
    const increment = Math.PI * (3 - Math.sqrt(5));

    skills.forEach((_, index) => {
      const y = index * offset - 1 + offset / 2;

      const radius = Math.sqrt(1 - y * y);

      const theta = index * increment;

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      points.push([
        x * GLOBE_RADIUS,
        y * GLOBE_RADIUS,
        z * GLOBE_RADIUS,
      ]);
    });

    return points;
  }, []);

  const connectionLines = useMemo(() => {
    const lines: [number, number, number][][] = [];

    for (let i = 0; i < positions.length - 1; i++) {
      lines.push([
        positions[i],
        positions[i + 1],
      ]);
    }

    return lines;
  }, [positions]);

  return (
    <group>
      {/* Main wireframe globe */}
      <mesh>
        <sphereGeometry
          args={[GLOBE_RADIUS, 32, 32]}
        />

        <meshBasicMaterial
          color="#a3e635"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry
          args={[GLOBE_RADIUS - 0.08, 32, 32]}
        />

        <meshBasicMaterial
          color="#a3e635"
          transparent
          opacity={0.025}
        />
      </mesh>

      {/* Connecting lines */}
      {connectionLines.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="#a3e635"
          transparent
          opacity={0.13}
          lineWidth={0.5}
        />
      ))}

      {/* Skills */}
      {skills.map((skill, index) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          position={positions[index]}
        />
      ))}
    </group>
  );
}