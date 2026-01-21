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
    title: "Entalpi - Full Stack Developer",
    location: "Istanbul, Turkey (Remote)",
    description:
      "Played a role in the development and maintenance of a secure, enterprise-grade data warehouse web application, implementing Role-Based Access Control (RBAC) and Row-Level Security (RLS). Contributed to AI chatbot capabilities expansion by implementing OCR for PDF document analysis and enabling natural language data interaction using Amazon Bedrock & Knowledge Bases. Supported the migration from Amazon Redshift to the Snowflake cloud database and developed a responsive website using the Django (Python) MVT architecture on AWS Elastic Beanstalk.",
    icon: React.createElement(FaReact),
    date: "Apr 2025 - Present",
  },
  {
    title: "Rise In (Patika.dev) - DevRel Specialist",
    location: "Pennsylvania, US (Remote)",
    description:
      "Facilitated developer ecosystem growth by organizing events, hackathons, and meetups. Produced technical documentation, tutorials, and blog content to accelerate adoption of partner technologies. Delivered technical support and hands-on workshops, enabling developers to integrate partner products efficiently. Analyzed community feedback to bridge communication between developers and partners.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Jan 2025",
  },
  {
    title: "Borda Tech - Product Manager (Intern)",
    location: "Istanbul, Turkey",
    description:
      "Defined product vision, strategy, and problem statements for the Quattro AI Assistant. Researched and evaluated AI technologies, including RAG, to support architectural decisions. Developed user personas and performed competitive analysis to guide feature positioning. Managed stakeholder communication between the product team and executive leadership.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Sep 2024",
  },
  {
    title: "Kodluyoruz - Associate Team Member",
    location: "Istanbul, Turkey (Hybrid)",
    description:
      "Planned, organized, and managed free software training programs for youth. Designed and executed training curricula and community events. Supported certificate distribution and job placement processes for program graduates. Improved operational efficiency using digital collaboration tools for program coordination.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Jun 2024",
  },
  {
    title: "Zencir Software - Founder & Project Manager",
    location: "Adana, Turkey",
    description:
      "Led a freelance development team to deliver custom web and branding solutions. Managed end-to-end project lifecycles, including scope definition, timeline planning, and delivery. Translated business requirements into technical specifications for web and corporate identity projects.",
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
      "As the team lead for Tyche, I managed the development of an innovative platform for monitoring addresses and transactions across multiple blockchain networks (Bitcoin, Ethereum, Solana, etc.). I designed the UI/UX and developed the front-end interface.",
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
  "Django",
  "SQL",
  "AWS",
  "Snowflake",
  "Docker",
  "Linux",
  "RAG",
  "LangChain",
  "LLM",
  "AI Agents",
  "n8n",
  "Jira",
  "Postman",
  "Figma",
  "Adobe Photoshop",
  "Canva",
] as const;
