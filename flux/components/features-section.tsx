import { Database, Github, Settings, TrendingUp, Zap } from "lucide-react";

export const Features = () => {
  return (
    <div className=" w-full py-6  px-1 ">
      <div className="w-full  flex  flex-col  gap-0.5 justify-start">
        <h1 className="text-3xl lg:text-4xl font-sans font-extrabold text-start">
          Why Enops?
        </h1>
        <p className="text-sm text-foreground/80 text-start leading-normal font-medium">
          Build for modern development workflows
        </p>
      </div>
      <div className=" py-2 gap-4 mt-4  grid grid-cols-1   sm:grid-cols-2 w-full ">
        <div className="  p-1 ">
          <Zap className="size-6.5 text-primary" />
          <span className="text-primary font-sans font-medium text-sm">
            /001/
          </span>
          <h2 className="text-[20px] md:text-[22px] tracking-tight font-medium">
            Ship Faster
          </h2>
          <p className="text-[12px] md:text-[14px]   w-full  font-sans text-foreground/80 leading-normal  text-start">
            Go from idea to production-ready schema in minutes, not days. AI
            handles the complexity.
          </p>
        </div>
        <div className=" p-1">
          <TrendingUp className="size-6.5 text-primary" />
          <span className="text-primary font-sans font-medium text-sm">
            /002/
          </span>
          <h2 className=" text-[20px] md:text-[22px] tracking-tight font-medium">
            Scale easily
          </h2>
          <p className="text-[12px] md:text-[14px]  w-full font-sans text-foreground/80 leading-normal  text-start">
            Built-in optimization and best practices ensure your schema scales
            with your business.
          </p>
        </div>
        <div className=" p-1">
          <Database className="size-6.5 text-primary" />
          <span className="text-primary font-sans font-medium text-sm">
            /003/
          </span>
          <h2 className=" text-[20px]  md:text-[22px] tracking-tight font-medium">
            Own your stack{" "}
          </h2>
          <p className="text-[12px]  md:text-[14px]    font-sans text-foreground/80  leading-normal  text-start">
            Open-source core means no vendor lock-in. Self-host or go cloud,
            your choice.
          </p>
        </div>
        <div className=" p-1">
          <div>
            <Settings className="size-6.5 text-primary" />
          </div>
          <span className="text-primary font-sans font-medium text-sm">
            /004/
          </span>
          <h2 className="md:text-[22px] text-[20px] tracking-tight font-medium">
            Automate Everything
          </h2>
          <p className="text-[12px]  md:text-[14px]  w-full font-sans text-foreground/80 leading-normal  text-start">
            Reduce manual work with smart automation that keeps your workflow
            fast and efficient.
          </p>
        </div>
      </div>
      {/*Works*/}
      <div className="py-16">
        <div className="w-full  flex  flex-col  gap-0.5 justify-start">
          <h2 className="text-[20px] md:text-[22px] tracking-tight font-medium">
            How It Works?
          </h2>
          <p className="text-sm text-foreground/80 text-start leading-normal font-medium">
            From idea production in 4 simple steps
          </p>
        </div>
        <div className=" mt-4   grid grid-cols-1  sm:grid-cols-2  w-full">
          <div className="   p-1 ">
            <span className="text-primary font-sans font-medium text-sm">
              /001/
            </span>
            <h2 className="text-[20px] md:text-[22px] tracking-tight font-medium">
              Describe Your App
            </h2>
            <p className="text-[12px]  sm:text-[14px] w-full font-sans text-foreground/80 leading-normal  text-start">
              Tell you about you application needs in plain english
            </p>
          </div>
          <div className="    p-1">
            <span className="text-primary font-sans font-medium text-sm">
              /002/
            </span>
            <h2 className=" text-[20px] md:text-[22px] tracking-tight font-medium">
              Generate Schema
            </h2>
            <p className="md:text-text-[12px]  sm:text-[14px] w-fullfont-sans text-foreground/80 leading-normal  text-start">
              AI generates optimized database schema automatically
            </p>
          </div>
          <div className=" p-1">
            <span className="text-primary font-sans font-medium text-sm">
              /003/
            </span>
            <h2 className=" text-[20px] md:text-[22px]  tracking-tight font-medium">
              Optimize & Validate{" "}
            </h2>
            <p className="md:text-text-[12px]  sm:text-[14px] w-full  font-sans text-foreground/80  leading-normal  text-start">
              Review, refine, and validate with AI assistance
            </p>
          </div>
          <div className=" p-1">
            <span className="text-primary font-sans font-medium text-sm">
              /004/
            </span>
            <h2 className=" text-[20px] md:text-[22px] tracking-tight font-medium">
              Export{" "}
            </h2>
            <p className="md:text-text-[12px]  sm:text-[14px] w-full  font-sans text-foreground/80  leading-normal  text-start">
              Export to SQL, Prisma, TypeORM and other format.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-3.5 justify-center py-6">
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
      </div>
    </div>
  );
};
