import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string; // Kept for API compatibility, spring animation manages timing now
  inactiveTransition?: string; // Kept for API compatibility
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  // Use high-performance motion values for cursor tracking to bypass React state cycles
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configure physical springs for smooth inertia and organic acceleration/deceleration
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const distanceX = mouseX - centerX;
      const distanceY = mouseY - centerY;

      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      // Check if cursor is within padding distance of the element's border
      const isWithinX = Math.abs(distanceX) < (halfWidth + padding);
      const isWithinY = Math.abs(distanceY) < (halfHeight + padding);

      if (isWithinX && isWithinY) {
        // Translate relative to mouse position, damped by strength
        x.set(distanceX / strength);
        y.set(distanceY / strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, x, y]);

  return (
    <motion.div
      ref={elementRef}
      style={{ x: springX, y: springY }}
      className={`${className} inline-block`}
    >
      {children}
    </motion.div>
  );
};
