"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRedirectPage = pathname === '/ai' || pathname.startsWith('/go/');

  if (isRedirectPage) {
    return (
      <>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="top-right" />
        <ThemeSwitch />
      </>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <Header />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
      <Toaster position="top-right" />
      <ThemeSwitch />
    </div>
  );
} 