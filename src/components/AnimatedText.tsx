import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface AnimatedWordProps {
  word: string;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index, totalWords, progress }) => {
  const start = index / totalWords;
  // Overlap of 4 words creates a smooth wave-like reveal effect
  const end = Math.min(1, (index + 4) / totalWords);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity, marginRight: '0.28em' }}
      className="inline-block my-1 select-none font-medium text-[#D7E2EA]"
    >
      {word}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Track the scroll of the paragraph element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });

  const words = text.split(" ");
  const totalWords = words.length;

  const alignmentClass = className.includes('justify-') ? '' : 'justify-center text-center';

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap ${alignmentClass} ${className}`}
    >
      {words.map((word, index) => (
        <AnimatedWord
          key={index}
          word={word}
          index={index}
          totalWords={totalWords}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
