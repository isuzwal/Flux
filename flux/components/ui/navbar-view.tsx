import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex  justify-between items-center px-2 py-1 ">
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
      <div className="  hidden sm:flex  gap-10  px-4 justify-between   items-center">
        <Link
          href={"#"}
          className="text-[14px] hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium "
        >
          Features
        </Link>
        <Link
          href={"#"}
          className="text-[14px] hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium"
        >
          Pricing
        </Link>
        <Link
          href={"#"}
          className="text-[14px]  hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium"
        >
          Roadmap
        </Link>
        <Link
          href={"#"}
          className="text-[14px] hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium "
        >
          FAQ
        </Link>
      </div>

      <button className="  cursor-pointer text-[13px] font-medium  items-center   bg-primary   font-sans  px-4 py-1 text-white border border-primary/80  ">
        Try Pro
      </button>
    </nav>
  );
};
