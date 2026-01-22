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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Computer Engineering graduate</span> from{" "}
        <span className="font-medium">Cukurova University</span>, focused on designing{" "}
        <span className="font-medium">web-based AI solutions</span> such as{" "}
        <span className="font-medium">Retrieval Augmented Generation (RAG)</span> and{" "}
        <span className="font-medium">AI agents</span>. I build scalable systems by
        combining modern front-end frameworks with intelligent back-end services.
      </p>

      <p>
        <span className="italic">Beyond development</span>, I have hands-on experience
        in <span className="font-medium">DevRel</span> and{" "}
        <span className="font-medium">Product Management</span>. I actively create
        technical content on social media. Outside of work, I enjoy exploring history,
        philosophy, and playing the piano.
      </p>

    </motion.section>
  );
}
