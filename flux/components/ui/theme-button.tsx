
      "use client";
        import { Moon, Sun } from "lucide-react";
        import { useTheme } from "next-themes";
        
        export const ThemeButton = () => {
            const { theme, setTheme } = useTheme();
        
            const isDark = theme === "dark";
        
            return (
                <div className="rounded-2xl border w-16 h-6 bg-slate-100 border-slate-200 dark:bg-neutral-900 dark:border-neutral-950   ">
                <button
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className={`w-6 h-6  flex justify-center  items-center rounded-md cursor-pointer  hover:rotate-12 duration-300 delay-100 transition ${
                        isDark ? "text-neutral-300   translate-x-0 duration-300" : " text-neutral-600  translate-x-10 duration-300 "
                    }`}
                    >
                    {isDark ? <Sun  className="size-4"/> : <Moon  className="size-4"/>}
                </button>
                    </div>
            );
        };
