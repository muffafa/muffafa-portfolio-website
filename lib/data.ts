import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import discordRegisterBotImg from "@/public/discord-register-bot.jpeg";
import tweetRandomProgrammerQuoteImg from "@/public/tweet-random-programmer-quote.jpeg";
import chatGptCoptItImg from "@/public/chat-gpt-copy-it.jpeg";
import chainiversityImg from "@/public/chainiversity.jpeg";
import tycheImg from "@/public/tyche.jpeg";

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
    title: "Borda Tech - Product Manager",
    location: "Istanbul, Turkey (Intern)",
    description:
      "During my internship at Borda Tech, I played a crucial role in the development of an AI-powered assistant for their healthcare product, Quattro. I gained hands-on experience in product management, including defining product vision, conducting competitor analysis, and engaging in cross-functional collaboration. My work involved stakeholder management, roadmapping, and establishing KPIs, ensuring a comprehensive approach to product development. I also developed a deep understanding of IoT applications in healthcare, software testing, and UX design, which enhanced my ability to contribute effectively to the project.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Present",
  },
  {
    title: "Kodluyoruz - Associate Team Member",
    location: "İstanbul, Turkey (Full Time - Remote)",
    description: `During my tenure at Kodluyoruz, I played a key role in planning and managing free software training programs for youth, leading the design and implementation of events and curricula. I ensured effective communication and follow-up with participants, contributing to their job placement process and certificate distribution. I also enhanced productivity through tools like Google Docs and Drive and managed technical aspects of face-to-face events. I actively participated in significant collaborations with organizations such as IBM and Microsoft, and led projects like "Kodluyoruz Açık Kaynak" and "Kodluyoruz Harekete Geç," demonstrating my ability to handle both strategic and technical responsibilities effectively.`,
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Jul 2024",
  },
  {
    title: "Zencir Software - Team Lead",
    location: "Adana, Turkey (Freelance)",
    description:
      "As the Founder and Project Manager of Zencir Software, I built and led a freelance team that specialized in creating customized websites tailored to clients' needs. I managed the full project lifecycle, from analyzing client requirements to delivering projects on time and within budget. My focus on maintaining high customer satisfaction and continuously improving service quality through feedback contributed to the success of our projects. I demonstrated expertise across various web and design technologies, ensuring that our solutions effectively supported clients' corporate identities.",
    icon: React.createElement(FaReact),
    date: "Apr 2022 - Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Chainiversity",
    description:
      "Chainiversity is an interactive, quest-based platform for developers aiming to excel in Solidity and Chainlink. Developers pass levels and submit solutions on-chain to earn NFT certificates. I gained experience with Wagmi Hooks and Rainbowkit, while also honing my skills in Next.js and Tailwind CSS.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Wagmi Hooks",
      "Rainbowkit",
      "Solidity",
      "Chainlink",
    ],
    imageUrl: chainiversityImg,
    link: "https://devpost.com/software/chainiversity",
    ribbon: {
      text: "Second Place ($4000)",
      type: "winner",
      competitionName: "Chainlink Hackathon",
      awardDate: "June 2023",
    },
  },
  {
    title: "Tyche",
    description:
      "As the team lead for Tyche, I managed the development of an innovative platform for monitoring addresses and transactions across multiple blockchain networks (Bitcoin, Ethereum, Solana, etc.). I designed the UI/UX and developed the front-end interface. Tyche simplifies blockchain tracking with user-friendly features like assigning temporary nicknames to wallet addresses and providing real-time updates on transaction fees and network status.",
    tags: ["React", "Blockchain", "UI/UX", "Front-end"],
    imageUrl: tycheImg,
    link: "https://github.com/cukurovablock/tyche",
    ribbon: {
      text: "Best Presentation",
      type: "winner",
      competitionName: "Teknofest - Blockchain Competition",
      awardDate: "September 2023",
    },
  },
  {
    title: "Discord Register Bot",
    description:
      "A open source Discord bot that allows users to register to a server using a registration code and assign roles to themselves. New registration codes can be generated, and log, moderation, and registration channels can be designated. In this project, I contributed by developing the backend commands and frontend styling.",
    tags: ["Node.js", "Javascript", "MongoDB"],
    imageUrl: discordRegisterBotImg,
    link: "https://github.com/muffafa/discord-register-bot",
    ribbon: { text: "Featured", type: "featured" },
  },
  {
    title: "Tweet Random Programmer Quote",
    description:
      "This project was designed with Figma and after design process end, I coded with using Next.js and Tailwind.css. It is fully responsive and open source.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Figma"],
    imageUrl: tweetRandomProgrammerQuoteImg,
    link: "https://tweet-random-programming-quote.vercel.app/",
    ribbon: null,
  },
  {
    title: "ChatGPT CopyIt",
    description:
      "It adds a copy to clipboard button end of each answer. Also, it shows word and character counter. It is published on Chrome Web Store. I used vanilla JavaScript to do it.",
    tags: ["JavaScript"],
    imageUrl: chatGptCoptItImg,
    link: "https://chromewebstore.google.com/detail/chatgpt-copyit/ogakgacjkoojmdahpelppalilhhplnbe",
    ribbon: { text: "Popular", type: "popular" },
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
