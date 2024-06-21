/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NeonCursorProps {
  el?: HTMLElement; // Optional element reference for customization
  shaderPoints?: number; // Number of shader points (default: 16)
  curvePoints?: number; // Number of curve points (default: 80)
  curveLerp?: number; // Curve lerp value (default: 0.5)
  radius1?: number; // Inner radius (default: 5)
  radius2?: number; // Outer radius (default: 30)
  velocityTreshold?: number; // Velocity threshold (default: 10)
  sleepRadiusX?: number; // Sleep radius X (default: 100)
  sleepRadiusY?: number; // Sleep radius Y (default: 100)
  sleepTimeCoefX?: number; // Sleep time coefficient X (default: 0.0025)
  sleepTimeCoefY?: number; // Sleep time coefficient Y (default: 0.0025)
}

const NeonCursor: React.FC<NeonCursorProps> = ({
  el = document.getElementById("root"),
  shaderPoints = 16,
  curvePoints = 80,
  curveLerp = 0.5,
  radius1 = 5,
  radius2 = 30,
  velocityTreshold = 10,
  sleepRadiusX = 100,
  sleepRadiusY = 100,
  sleepTimeCoefX = 0.0025,
  sleepTimeCoefY = 0.0025,
}) => {
  // State variables for cursor position
  const [mousePos, setMousePos] = useState<THREE.Vector2>(
    new THREE.Vector2(0, 0)
  );

  // Reference to hold the THREE.Mesh object
  const meshRef = useRef<THREE.Mesh>(null);

  // Handle mouse movement events to update cursor position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos(new THREE.Vector2(event.clientX, event.clientY));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop using useFrame hook
  useFrame(() => {
    if (meshRef.current && el) {
      const { x, y } = mousePos;
      const targetX = el!.clientWidth / 2 - x;
      const targetY = el!.clientHeight / 2 - y;

      // Update cursor position with lerp for smooth animation
      meshRef.current.position.x +=
        (targetX - meshRef.current.position.x) * curveLerp;
      meshRef.current.position.y +=
        (targetY - meshRef.current.position.y) * curveLerp;
    }
  });

  // Neon cursor geometry and material creation (similar to the original code)
  const geometry = new THREE.PlaneGeometry(radius2 * 2, radius2 * 2);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0.0 },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      u_mouse: { value: new THREE.Vector2(0.0, 0.0) },
      u_radius1: { value: radius1 },
      u_radius2: { value: radius2 },
      // ... rest of the uniforms and shader code from your original code
    },
    // ... rest of the material properties from your original code
  });

  // Render the cursor mesh with the material
  return <mesh ref={meshRef} geometry={geometry} material={material} />;
};

export default NeonCursor;
