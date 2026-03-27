import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const InterVar = Inter({
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Enops - Design better database scheam ",
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
        className={`  ${InterVar.variable}   antialiased dark:bg-black bg-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
