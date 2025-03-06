"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function ImageSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.6, 1.16, 0.9]);

  return (
    <div ref={targetRef} className="relative h-[150vh]">
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
        <motion.div style={{ scale }} className="w-full h-full">
          <Image
            src="/imagesection.png"
            alt="Image"
            width={1376}
            height={774}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}