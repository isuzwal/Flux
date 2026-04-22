"use client";
import { Github } from "lucide-react";
import { motion, useAnimation, Variants } from "motion/react";

export const Features = () => {
  const controls = useAnimation();
  const handleHoverStart = () => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const handleHoverEnd = async () => {
    // Smoothly finish current rotation then stop
    await controls.start({
      rotate: 360,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    });
    controls.set({ rotate: 0 });
  };

  const MainAnimation: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.18,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      id="features"
      className=" w-full py-12  px-1 scroll-padding-top "
    >
      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="w-full  flex  flex-col  gap-0.5 justify-start"
      >
        <h1 className="text-3xl lg:text-4xl font-sans font-extrabold text-start">
          Why Enops?
        </h1>
        <p className="text-sm text-foreground/80 text-start leading-normal font-medium">
          Build for modern development workflows
        </p>
      </motion.div>
      <motion.div
        variants={MainAnimation}
        initial="hidden"
        whileInView="show"
        className=" py-2  mt-4 gap-1  grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 w-full "
      >
        <motion.div
          whileHover="hovered"
          initial="initial"
          variants={itemVariants}
          className="border group hover:bg-neutral-100/40 duration-300 ease-in-out transition-all border-neutral-300 border-dashed"
        >
          <div className="p-2">
            <span className="text-primary font-sans font-medium text-sm">
              /001/
            </span>
          </div>

          {/* Icon */}
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="162"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500"
            >
              {/* Rocket body */}
              <motion.path
                d="M12 2 C12 2 17 6 17 12 L12 22 L7 12 C7 6 12 2 12 2Z"
                variants={{
                  initial: { y: 0 },
                  hovered: {
                    y: -2,
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }}
              />

              {/* Rocket window */}
              <motion.circle
                cx="12"
                cy="10"
                r="1.5"
                variants={{
                  initial: { fill: "transparent" },
                  hovered: {
                    fill: "#d4d4d4",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
              />

              {/* Left wing */}
              <motion.path
                d="M7 12 L4 15 L7 15Z"
                variants={{
                  initial: { opacity: 0.4 },
                  hovered: {
                    opacity: 1,
                    x: -0.5,
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }}
              />

              {/* Right wing */}
              <motion.path
                d="M17 12 L20 15 L17 15Z"
                variants={{
                  initial: { opacity: 0.4 },
                  hovered: {
                    opacity: 1,
                    x: 0.5,
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }}
              />

              {/* Flame 1 — center */}
              <motion.path
                d="M12 22 Q12 26 12 24"
                fill="none"
                variants={{
                  initial: { opacity: 0, scaleY: 0 },
                  hovered: {
                    opacity: 1,
                    scaleY: [1, 1.4, 0.9, 1.2, 1],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }}
                style={{ transformOrigin: "12px 22px" }}
              />

              {/* Flame 2 — left */}
              <motion.path
                d="M10.5 21.5 Q10 24 10.5 23"
                fill="none"
                variants={{
                  initial: { opacity: 0 },
                  hovered: {
                    opacity: [0.6, 1, 0.5, 0.9, 0.6],
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  },
                }}
              />

              {/* Flame 3 — right */}
              <motion.path
                d="M13.5 21.5 Q14 24 13.5 23"
                fill="none"
                variants={{
                  initial: { opacity: 0 },
                  hovered: {
                    opacity: [0.6, 0.9, 1, 0.5, 0.6],
                    transition: {
                      duration: 0.45,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.15,
                    },
                  },
                }}
              />

              {/* Speed lines — left */}
              <motion.line
                x1="4"
                y1="9"
                x2="6"
                y2="9"
                variants={{
                  initial: { opacity: 0, x: 0 },
                  hovered: {
                    opacity: [0, 1, 0],
                    x: -1.5,
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0,
                    },
                  },
                }}
              />
              <motion.line
                x1="3"
                y1="11"
                x2="6"
                y2="11"
                variants={{
                  initial: { opacity: 0, x: 0 },
                  hovered: {
                    opacity: [0, 1, 0],
                    x: -1.5,
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.15,
                    },
                  },
                }}
              />
              <motion.line
                x1="4"
                y1="13"
                x2="6"
                y2="13"
                variants={{
                  initial: { opacity: 0, x: 0 },
                  hovered: {
                    opacity: [0, 1, 0],
                    x: -1.5,
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    },
                  },
                }}
              />

              {/* Speed lines — right */}
              <motion.line
                x1="18"
                y1="9"
                x2="20"
                y2="9"
                variants={{
                  initial: { opacity: 0, x: 0 },
                  hovered: {
                    opacity: [0, 1, 0],
                    x: 1.5,
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  },
                }}
              />
              <motion.line
                x1="18"
                y1="11"
                x2="21"
                y2="11"
                variants={{
                  initial: { opacity: 0, x: 0 },
                  hovered: {
                    opacity: [0, 1, 0],
                    x: 1.5,
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.25,
                    },
                  },
                }}
              />
              <motion.line
                x1="18"
                y1="13"
                x2="20"
                y2="13"
                variants={{
                  initial: { opacity: 0, x: 0 },
                  hovered: {
                    opacity: [0, 1, 0],
                    x: 1.5,
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  },
                }}
              />
            </svg>
          </div>

          {/* Card footer */}
          <div className="w-full border-t px-1 border-neutral-300 border-dashed">
            <h2 className="md:text-[22px] text-[20px] tracking-tight font-semibold">
              Ship Faster
            </h2>
            <p className="text-xs w-full font-sans text-foreground/80 leading-normal text-start">
              Go from idea to production-ready schema in minutes, not days. AI
              handles the complexity.
            </p>
          </div>
        </motion.div>
        {/*Second */}
        <motion.div
          variants={itemVariants}
          whileHover="hovered"
          initial="initial"
          className="border group hover:bg-neutral-100/40 duration-300 ease-in-out transition-all border-neutral-300 border-dashed"
        >
          <div className="p-2">
            <span className="text-primary font-sans font-medium text-sm">
              /002/
            </span>
          </div>

          {/* Icon */}
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="162"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500"
            >
              {/* Base line */}
              <motion.line
                x1="3"
                y1="20"
                x2="21"
                y2="20"
                stroke="currentColor"
                strokeWidth="0.2"
                style={{ transformOrigin: "3px 20px" }}
                variants={{
                  initial: { scaleX: 0 },
                  hovered: {
                    scaleX: 0.88,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              />

              {/* Bar 1 — short, animates taller */}
              <motion.rect
                x="4"
                rx="0.5"
                width="3"
                variants={{
                  initial: { y: 16, height: 4, fill: "transparent" },
                  hovered: {
                    y: 12,
                    height: 8,
                    fill: "#d4d4d4",
                    transition: { duration: 0.4, ease: "easeOut", delay: 0 },
                  },
                }}
              />

              {/* Bar 2 — medium */}
              <motion.rect
                x="9"
                rx="0.5"
                width="3"
                variants={{
                  initial: { y: 13, height: 7, fill: "transparent" },
                  hovered: {
                    y: 8,
                    height: 12,
                    fill: "#d4d4d4",
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.08 },
                  },
                }}
              />

              {/* Bar 3 — tall */}
              <motion.rect
                x="14"
                rx="0.5"
                width="3"
                variants={{
                  initial: { y: 10, height: 10, fill: "transparent" },
                  hovered: {
                    y: 5,
                    height: 15,
                    fill: "#d4d4d4",
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.16 },
                  },
                }}
              />

              {/* Bar 4 — tallest */}
              <motion.rect
                x="19"
                rx="0.5"
                width="2"
                variants={{
                  initial: { y: 7, height: 13, fill: "transparent" },
                  hovered: {
                    y: 3,
                    height: 17,
                    fill: "#d4d4d4",
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.24 },
                  },
                }}
              />

              {/* Trend arrow going up-right */}
              <motion.path
                d="M3 16 Q8 12 13 10 L17 8"
                fill="none"
                variants={{
                  initial: { pathLength: 0, opacity: 0 },
                  hovered: {
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                  },
                }}
              />

              {/* Arrow head */}
              <motion.path
                d="M14.5 6.5 L17 8 L15 10"
                fill="none"
                variants={{
                  initial: { opacity: 0 },
                  hovered: {
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut", delay: 0.7 },
                  },
                }}
              />
            </svg>
          </div>

          {/* Card footer */}
          <div className="w-full border-t px-1 border-neutral-300 border-dashed">
            <h2 className="md:text-[22px] text-[20px] tracking-tight font-semibold">
              Scale easily
            </h2>
            <p className="text-xs w-full font-sans text-foreground/80 leading-normal text-start">
              Built-in optimization and best practices ensure your schema scales
              with your business.
            </p>
          </div>
        </motion.div>
        {/*Third */}
        <motion.div
          variants={itemVariants}
          whileHover="animate"
          initial="initial"
          className=" border group hover:bg-neutral-100/40 duration-300 ease-in-out  transition-all border-neutral-300 border-dashed"
        >
          <div className=" p-2 ">
            <span className="  mt-2 text-primary font-sans font-medium text-base">
              /003/
            </span>
          </div>
          <div className="w-full flex p-0    justify-center ">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 198 178"
              width="200"
              height="162"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500  flex justify-center items-center"
            >
              {/* Edge connectors */}
              <line strokeWidth="1.2" x1="30" y1="72" x2="30" y2="120" />
              <line strokeWidth="1.2" x1="170" y1="72" x2="170" y2="120" />
              <line strokeWidth="1.2" x1="100" y1="100" x2="100" y2="148" />

              {/* BOTTOM layer */}
              <motion.path
                strokeWidth="1"
                d="M100 96 Q135 96 170 120 Q135 144 100 148 Q65 144 30 120 Q65 96 100 96 Z"
              />

              {/* TOP layer */}
              <motion.path
                variants={{
                  animate: {
                    translateY: -10,
                    fill: "var(--color-neutral-200)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "var(--color-neutral-100)",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 48 Q135 48 170 72 Q135 96 100 100 Q65 96 30 72 Q65 48 100 48 Z"
              />

              {/* INNER small diamond inside top layer */}
              <motion.path
                // animate="initial"
                variants={{
                  animate: {
                    translateY: -18,
                    fill: "var(--color-neutral-300)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "white",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 58 Q118 58 130 72 Q118 86 100 90 Q82 86 70 72 Q82 58 100 58 Z"
              />
            </motion.svg>
          </div>
          <div className="w-full border-t  px-1 border-neutral-300 border-dashed">
            <h2 className=" text-[20px]  tracking-tighter md:text-[24px]  font-semibold">
              Own your stack{" "}
            </h2>
            <p className="text-xs       max-w-xs w-full  font-sans  font-medium text-foreground/70  leading-normal tracking-tight  text-start">
              Open-source core means no vendor lock-in. Self-host or go cloud,
              your choice.
            </p>
          </div>
        </motion.div>
        {/*Fourth */}
        <motion.div
          variants={itemVariants}
          animate="animate"
          initial="initial"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          className="border group hover:bg-neutral-100/40 duration-300 ease-in-out transition-all border-neutral-300 border-dashed"
        >
          <div className="p-2">
            <span className="text-primary font-sans font-medium text-sm">
              /004/
            </span>
          </div>

          {/* Icon */}
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="162"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="0.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide  text-neutral-500 lucide-settings-icon lucide-settings"
            >
              <motion.g
                style={{ transformOrigin: "12px 12px" }}
                animate={controls}
              >
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
              </motion.g>

              <motion.circle
                variants={{
                  animate: {
                    fill: "var(--color-neutral-300)",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                  initial: {
                    fill: "white",
                  },
                }}
                cx="12"
                cy="12"
                r="3"
              />
            </svg>
          </div>

          {/* Card footer */}
          <div className="w-full border-t px-1 border-neutral-300 border-dashed">
            <h2 className="md:text-[22px] text-[20px] tracking-tight font-semibold">
              Automate Everything
            </h2>
            <p className="text-xs w-full font-sans text-foreground/80 leading-normal text-start">
              Reduce manual work with smart automation that keeps your workflow
              fast and efficient.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/*Works*/}

      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="w-full  mt-12 py-32   flex flex-col items-center gap-3.5 justify-center"
      >
        <div className=" max-w-xl ">
          <h2 className=" tracking-tight text-3xl  lg:text-4xl text-center font-bold font-sans leading-normal">
            Open Source & Community Drive
          </h2>
          <p className="text-center  text-foreground/70 font-sans   tracking-tight text-[14px] lg:text-base ">
            Built in the open, powered by the community. Join thousands of
            developers shaping the future of database schema design.
          </p>
        </div>
        <div className="flex  justify-center">
          <div className=" flex gap-1 items-center border  hover:bg-primary/10  hover:border-primary/10 duration-300 ease-in-out transition-all cursor-pointer rounded-md border-primary/30 px-3 py-1">
            <Github className=" text-primary fill-primary size-4.5" />{" "}
            <button className=" cursor-pointer text-[14px] font-sans font-medium  text-primary  ">
              Star On Github
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
