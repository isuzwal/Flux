import type { Metadata } from "next";
import { Outfit, Italiana } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "sonner";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flux | Share your products",
  description: "A platform to share and discover products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${italiana.variable}  ${outfit.variable} antialiased dark:bg-black bg-neutral-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster 
          richColors
          toastOptions={{
            classNames: {
            success: 'bg-green-500 text-white border-green-600 shadow-lg shadow-green-500/50', 
            error: 'bg-red-500 text-white border-red-600 shadow-lg shadow-red-500/50',
            },
          }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
