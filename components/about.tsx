"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        As a <span className="font-medium">Computer Engineering student</span>{" "}
        at Cukurova University, I'm deeply involved in enhancing my skills in a
        variety of programming languages and technologies. My current role as an{" "}
        <span className="font-medium">Associate Team Member</span> at Kodluyoruz
        allows me to actively contribute to technological education and
        development. My expertise lies in{" "}
        <span className="font-medium">
          JavaScript, Java, C#, Python, Firebase, MongoDB, TypeScript, React,
          Next.js, and Node.js
        </span>
        , among others.
      </p>

      <p>
        <span className="italic">In my personal time</span>, I engage in content
        creation across various platforms, including Twitter, YouTube, Medium,
        and LinkedIn. I'm passionate about{" "}
        <span className="font-medium">blockchain and web technologies</span>, as
        well as exploring the realms of history and philosophy. Playing the
        piano and interactive gaming are my go-to activities for relaxation and
        fun.
      </p>
    </motion.section>
  );
}
