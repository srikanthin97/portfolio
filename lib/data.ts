import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import skyit from "@/public/skyit.png";
import codepath from "@/public/codepath.png";
import portfolio from "@/public/portfolio.png";

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
    title: "Backend Developer Intern at SkyIT (GBCS Group)",
    location: "Remote",
    description:
      "Collaborated on three major projects, reducing onboarding time by 40% and improving system security. Helped develop an API testing tool that increased testing accuracy by 60%.",
      icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024",
  },

  {
    title: "Georgia State University Bachelor's in CS",
    location: "Atlanta, GA",
    description:
      "Currently pursuing a degree in Computer Science with a 4.0 GPA. Recognized for academic excellence with President's List and Dean's List honors. Expected graduation: December 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Current",
  }, 
  
  {
    title: "Student Assistant at Center for Translational Research in Neuroimaging and Data Science",
    location: "Atlanta, GA",
    description:
      "Enhanced equipment troubleshooting processes, reducing support requests by 50%. Contributed to key research projects and provided daily operational support for a team of 15.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - May 2024",
  },
  {
    title: "Event Operations Technician",
    location: "Atlanta, GA",
    description:
      "Managed audiovisual setups for over 50 events, leading to a high client satisfaction rate. Trained 6 new technicians and oversaw operation inventory.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Feb 2024",
  },

] as const;


export const projectsData = [
  {
    title: "SkyIt",
    description:
      "I worked as a backend developer intern on a freight management system at SkyIT. The system is currently in production by the GBCS Group",
    tags: ["Django Rest", "SQL", "React", "Linux", "Git"],
    imageUrl: skyit,
  },
  {
    title: "Portfolio website",
    description:
      "Created this interactive portfolio website from scratch with the help of YouTube tutorials",
    tags: ["React", "TypeScript", "Next.js", "React Email", "FramerMotion", "Vercel"],
    imageUrl: portfolio,
  },
  {
    title: "CodePath Cybersecurity",
    description:"Completed 6+ projects that enhanced proficiency in key cybersecurity tools, driving improved threat detection and analysis capabilities.",
    tags: ["Splunk", "Wireshark", "SIEMs", "Catalyst", "Linux"],
    imageUrl: codepath,
  },
] as const;
/*
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
*/

export const skillsData = [
  "Python",
  "Django Rest ",
  "Flask",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Java",
  "C",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "MongoDB",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Shell Scripting",
  "MASM x86",
  "Tableau",
  "Linux",
  "Git",
  "Splunk",
  "Wireshark",
  "Catalyst"
] as const;
