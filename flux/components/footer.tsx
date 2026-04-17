import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" py-8 px-2 w-full">
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
          <p className=" max-w-xs  w-full  text-left text-foreground/80 font-sans text-[12px]">
            An AI-powered platform to design, visualize, optimize, and export
            database schemas
          </p>
        </div>
        <div className="   flex flex-col  items-start sm:items-center gap-0.5">
          <h1 className="text-primary font-sans text-[14px] ">/NAVIGATION/</h1>
          <div
            className="  flex  flex-col  justify-start items-start
              w-full  sm:w-[6rem]   gap-3"
          >
            <Link
              href="#features"
              className=" text-xs font-sans  font-medium text-foreground/80 leading-none"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className=" text-xs  font-medium font-sans text-foreground/80  leading-none"
            >
              FAQ
            </Link>
            <Link
              href="#pricing"
              className=" text-xs font-sans   font-medium  text-foreground/80 leading-0"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="   flex flex-col  items-start sm:items-center gap-0.5">
          <h1 className="text-primary font-sans text-[14px] ">/RESOURCES/</h1>
          <div
            className="  flex  flex-col  justify-start items-start
             w-full  sm:w-[6rem]   gap-4"
          >
            <Link
              href="#pricing"
              className="text-xs font-sans   font-medium  text-foreground/80  leading-none"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className=" text-xs font-sans   font-medium  text-foreground/80 leading-0"
            >
              404 Page
            </Link>
          </div>
        </div>
        <div className="  flex flex-col items-start md:items-center gap-0.5">
          <h1 className="text-primary font-sans text-[16px] ">/SOCIAL/</h1>
          <div
            className="  flex  flex-col  justify-start items-start
              w-full sm:w-[5rem]   gap-3"
          >
            <Link
              href="#"
              className="  flex  items-center text-xs    text-foreground/80  gap-1 font-sans  font-medium leading-0"
            >
              <Twitter className="size-4 fill-primary text-primary " />{" "}
              <span>Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
