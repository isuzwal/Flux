import { ArrowRight, CreditCard } from "lucide-react";
export const HeroSection = () => {
  return (
    <div className=" py-20 px-0 ">
      <div className=" max-w-3xl  flex flex-col gap-1 ">
        <div className="flex justify-start ">
          <span className="px-1  border   border-dashed border-secondary-foreground/60 flex items-center font-medium   font-mono tracking-tighter  text-secondary-foreground/70">
            AI powerd DB Schema Mangement
          </span>
        </div>
        <h1 className="text-3xl   sm:text-6xl tracking-tight  font-bold">
          Design Better Database Schemas with{" "}
          <span className="text-primary">AI</span>
        </h1>
      </div>
      <p className="  text-base   py-1 max-w-2xl    text-secondary-foreground/80 leading-none  text-start font-sans">
        AI-powered platform to design, visualize, optimize and export production
        ready database schemas in minutes.
      </p>
      <div className="py-2  flex flex-col   justify-start">
        <button className="group font-medium cursor-pointer  hover:bg-primary/60 duration-300 transition-all ease-in-out font-sans text-[14px]  w-40 justify-center  flex gap-1.5 items-center bg-primary text-white px-1.5 py-1  text-center">
          <span>Try Pro Version</span>
          <ArrowRight className="size-5 group-hover:translate-x-1 duration-300 ease-in-out " />
        </button>

        <span className="flex px-0.5 gap-0.5 items-center tracking-tight text-[12px] text-secondary-foreground/60 font-medium">
          <CreditCard className="size-4" />
          <span className="mt-0.5">No Card Required</span>
        </span>
      </div>
    </div>
  );
};
