"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import muffafaLogo from "@/public/muffafa-logo.png";

interface RedirectProps {
  to: string;
  timeout?: number;
}

export default function Redirect({ to, timeout = 5000 }: RedirectProps) {
  const router = useRouter();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCounter((prev) => Math.max(0, prev - 1));
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      window.location.href = to;
    }, timeout);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(countInterval);
    };
  }, [to, timeout]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="mb-8">
        <Image
          src={muffafaLogo}
          alt="Muffafa Logo"
          width="120"
          height="120"
          quality="95"
          priority={true}
          className="rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:w-[150px] sm:h-[150px]"
        />
      </div>
      
      <div className="text-center w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            Redirecting in {counter}s...
          </h1>
          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-1000 ease-linear"
              style={{ width: `${(counter / 5) * 100}%` }}
            ></div>
          </div>
        </div>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          You are being redirected to{" "}
          <a href={to} className="text-blue-500 hover:underline break-all">
            {to}
          </a>
        </p>
      </div>
    </div>
  );
} 