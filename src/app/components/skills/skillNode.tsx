"use client";

import { Html } from "@react-three/drei";
import { useState } from "react";
import { Skill } from "../../types/skills.type";

type SkillNodeProps = {
  skill: Skill & {
    icon: React.ElementType;
  };
  position: [number, number, number];
};

export default function SkillNode({
  skill,
  position,
}: SkillNodeProps) {
  const [hovered, setHovered] = useState(false);

  const Icon = skill.icon;

  return (
    <group position={position}>
      <Html
        center
        distanceFactor={7}
        zIndexRange={[10, 0]}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`
            flex cursor-pointer flex-col items-center
            transition-all duration-300
            ${hovered ? "scale-125" : "scale-100"}
          `}
        >
          {/* Icon */}
          <div
            className={`
              flex h-14 w-14 items-center justify-center
              rounded-xl border
              bg-[#080b0c]/90
              backdrop-blur-md
              transition-all duration-300
              sm:h-16 sm:w-16
            `}
            style={{
              borderColor: `${skill.color}55`,
              boxShadow: hovered
                ? `0 0 30px ${skill.color}55`
                : `0 0 15px ${skill.color}15`,
            }}
          >
            <Icon
              size={34}
              style={{
                color: skill.color,
              }}
            />
          </div>

          {/* Name */}
          <span
            className="
              mt-2 whitespace-nowrap
              text-xs font-medium
              text-gray-300
              sm:text-sm
            "
          >
            {skill.name}
          </span>
        </div>
      </Html>
    </group>
  );
}