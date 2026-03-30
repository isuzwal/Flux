"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingImage = () => {
  return (
    <div className="w-full py-6  ">
      <motion.div
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
        initial={{
          y: -5,
          opacity: 0,
        }}
        className=" relative  overflow-hidden w-full aspect-video "
      >
        <Image
          src="/images/landing-image.png"
          alt="A Landing Image"
          fill
          sizes="100vw"
          className="object-contain w-full h-full -rotate-12 max-h-full max-w-full"
          priority
        />
      </motion.div>
    </div>
  );
};
