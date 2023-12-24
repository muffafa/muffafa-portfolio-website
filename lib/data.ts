import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import discordRegisterBotImg from "@/public/discord-register-bot.jpeg";
import tweetRandomProgrammerQuoteImg from "@/public/tweet-random-programmer-quote.jpeg";
import chatGptCoptItImg from "@/public/chat-gpt-copy-it.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kodluyoruz - Associate Team Member",
    location: "İstanbul, Turkey (Full Time - Remote)",
    description:
      "Kodluyoruz is a social enterprise. I am contributing to technological education and development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Present",
  },
  {
    title: "Zencir Software - Team Lead",
    location: "Adana, Turkey (Freelance)",
    description:
      "I lead our online services and work closely with clients through popular freelancer websites such as Bionluk. We specialize in web design and corporate identity services.",
    icon: React.createElement(FaReact),
    date: "Apr 2022 - Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Register Bot",
    description:
      "A open source Discord bot that allows users to register to a server using a registration code and assign roles to themselves. New registration codes can be generated, and log, moderation, and registration channels can be designated. In this project, I contributed by developing the backend commands and frontend styling.",
    tags: ["Node.js", "Javascript", "MongoDB"],
    imageUrl: discordRegisterBotImg,
  },
  {
    title: "Tweet Random Programmer Quote",
    description:
      "This project was designed with Figma and after design process end, I coded with using Next.js and Tailwind.css. It is fully responsive and open source.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Figma"],
    imageUrl: tweetRandomProgrammerQuoteImg,
  },
  {
    title: "ChatGPT CopyIt",
    description:
      "It adds a copy to clipboard button end of each answer. Also, it shows word and character counter. It is published on Chrome Web Store. I used vanilla JavaScript to do it.",
    tags: ["JavaScript"],
    imageUrl: chatGptCoptItImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Node.js",
  "Bootstrap",
  "Express",
  "PostgreSQL",
  "Python",
  "Unity",
  "C#",
  "Firebase",
  "MongoDB",
  "Framer Motion",
  "Agile",
] as const;
