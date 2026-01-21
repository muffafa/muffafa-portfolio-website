"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import muffafaPhoto from "@/public/Muhammed-Mustafa-Savar.jpg";
import SafeLink from "./safe-link";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[65rem] sm:mb-0 scroll-mt-[100rem] w-full"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 px-4">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
          <motion.h1
            className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">
              Hello, I'm Muhammed Mustafa Savar.
            </span>
            <br />
            I'm a <span className="font-bold">Full Stack Developer</span> specialized in building{" "}
            <span className="italic">scalable websites with </span>
            <span className="underline">AI Agents</span>.
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <SafeLink
              href="https://linktr.ee/muffafa"
              className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              linktr.ee/muffafa{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </SafeLink>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/cv_online_muhammed_mustafa_savar.pdf"
            >
              Show CV{" "}
              <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
            </a>

            <div className="flex gap-2">
              <SafeLink
                href="https://linkedin.com/in/muffafa"
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              >
                <BsLinkedin />
              </SafeLink>

              <SafeLink
                href="https://github.com/muffafa"
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              >
                <FaGithubSquare />
              </SafeLink>
            </div>
          </motion.div>
        </div>

        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={muffafaPhoto}
              alt="Muhammed Mustafa Savar portrait"
              width="400"
              height="400"
              quality="95"
              priority={true}
              className="h-64 w-64 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] rounded-full object-cover border-[0.35rem] border-white shadow-2xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-4 right-4 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
              rotate: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.6,
              },
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </section>
  );
}
