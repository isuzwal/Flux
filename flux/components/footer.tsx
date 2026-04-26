"use client";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
export const Footer = () => {
  return (
    <div className=" py-8 px-2 w-full">
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
        className="w-full  md:gap-2 gap-8 grid grid-cols-2 lg:grid-cols-4 "
      >
        <div className="">
          <div className="flex items-center gap-1">
            <div className=" relative overflow-hidden h-6 w-6">
              <Image
                src="/images/logo.png"
                alt="logo"
                loading="lazy"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              href="/"
              className="text-[24px]   tracking-tight text-primary font-bold  font-sans"
            >
              enops.dev
            </Link>
          </div>
          <p className=" max-w-xs  w-full font-medium  text-left text-foreground/80 font-sans text-[12px]">
            An AI-powered platform to design, visualize, optimize, and export
            database schemas
          </p>
        </div>
        <div className="  flex flex-col   items-center gap-0.5 ">
          <h1 className="text-primary font-sans text-[14px]  flex  justify-center sm:justify-center w-full">
            /NAVIGATION/
          </h1>
          <div
            className="  flex  flex-col justify-end  items-start
              w-[6rem]   gap-2"
          >
            <Link
              href="#features"
              className=" text-xs font-sans  hover:text-foreground/50 duration-300 ease-in-out transition-all font-medium text-foreground/80 leading-none"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className=" text-xs font-sans  hover:text-foreground/50 duration-300 ease-in-out transition-all font-medium text-foreground/80 leading-none"
            >
              FAQ
            </Link>
            <Link
              href="#pricing"
              className=" text-xs font-sans  hover:text-foreground/50 duration-300 ease-in-out transition-all font-medium text-foreground/80 leading-none"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="   flex flex-col  items-center   gap-0.5">
          <h1 className="text-primary font-sans text-[14px]  flex  justify-start lg:justify-center w-full ">
            /RESOURCES/
          </h1>
          <div
            className="  flex  flex-col  justify-start items-start
             w-full  lg:w-[6rem]   gap-3"
          >
            <Link
              href="#pricing"
              className=" text-xs font-sans  hover:text-foreground/50 duration-300 ease-in-out transition-all font-medium text-foreground/80 leading-none"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className=" text-xs font-sans  hover:text-foreground/50 duration-300 ease-in-out transition-all font-medium text-foreground/80 leading-none"
            >
              404 Page
            </Link>
          </div>
        </div>
        <div className="  flex flex-col items-center gap-0.5">
          <h1 className="text-primary font-sans text-[14px]   flex  justify-center sm:justify-center w-full">
            /SOCIAL/
          </h1>
          <div
            className="  flex  flex-col  justify-center items-center 
            w-[6rem]   gap-3"
          >
            <Link
              href="#"
              className=" text-xs font-sans flex items-center gap-0.5  hover:text-foreground/50 duration-300 ease-in-out transition-all font-medium text-foreground/80 leading-none"
            >
              <Twitter className="size-3.5 fill-primary text-primary " />{" "}
              <span>Twitter</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
