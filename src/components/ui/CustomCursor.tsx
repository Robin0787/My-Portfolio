/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CustomCursor = () => {
  const mouseSize = 50;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothMouseOptions = { damping: 100, stiffness: 1000, mass: 0.1 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothMouseOptions),
    y: useSpring(mouse.y, smoothMouseOptions),
  };
  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - mouseSize / 2);
    mouse.y.set(clientY - mouseSize / 2);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className="customCursor"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
};

export default CustomCursor;
