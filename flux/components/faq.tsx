"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";
export const FAQ = () => {
  return (
    <div
      id="faq"
      className="w-full  px-1  flex md:flex-row  flex-col justify-between gap-4 py-6"
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
        className=" flex flex-col  py-2 "
      >
        <h1
          className="text-3xl lg:text-4xl font-sans font-extrabold leading-noraml
        "
        >
          FAQ
        </h1>
        <p className="text-start  max-w-[24rem]  text-foreground/70 font-sans  text-[14px]">
          Got questions? We&apos;ve got answers.if you can&apos;t find what
          your&apos;re looking for, feel free to reach out.
        </p>
      </motion.div>

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
        className=" flex-1 py-4  "
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="enops-dev"
          className=" border bg-secondary/10 p-2 rounded-md"
        >
          <AccordionItem value="enops-dev">
            <AccordionTrigger className="text-[14px] cursor-pointer font-medium font-sans text-foreground/90">
              What is enops.dev ?
            </AccordionTrigger>
            <AccordionContent className="text-start text-[14px] font-sans text-foreground/70">
              Enops.dev is AI powerd db schema generator, visualizer and orm/odm
              exporter
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Free">
            <AccordionTrigger className="text-[14px] cursor-pointer font-medium font-sans  text-foreground/90">
              Is it free? ?
            </AccordionTrigger>
            <AccordionContent className="text-start text-[14px] font-sans text-foreground/70">
              Enops.dev is AI powerd db schema generator, visualizer and orm/odm
              exporter
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Pro">
            <AccordionTrigger className="text-[14px] cursor-pointer font-medium font-sans  text-foreground/90">
              What&apos;s include pro?
            </AccordionTrigger>
            <AccordionContent className="text-start text-[14px] font-sans text-foreground/70">
              Enops.dev is AI powerd db schema generator, visualizer and orm/odm
              exporter
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="prcing">
            <AccordionTrigger className="  text-foreground/90 text-[14px] cursor-pointer font-medium font-sans">
              How does pricing work ?
            </AccordionTrigger>
            <AccordionContent className="text-start text-[14px] font-sans text-foreground/70">
              Enops.dev is AI powerd db schema generator, visualizer and orm/odm
              exporter
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="projects">
            <AccordionTrigger className="  text-foreground/90 text-[14px] cursor-pointer font-medium font-sans">
              Can I use with existing projects ?
            </AccordionTrigger>
            <AccordionContent className="text-start text-[14px] font-sans text-foreground/70">
              Enops.dev is AI powerd db schema generator, visualizer and orm/odm
              exporter
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};
