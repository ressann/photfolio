import {
  Cog,
  Contact,
  FolderKanban,
  Github,
  House,
  Notebook,
} from "lucide-react";
import React from "react";
export const sidebarData = [
  {
    id: "home",
    label: "home",
    href: "/",
    icon: React.createElement(House),
  },
  {
    id: "about-me",
    label: "about me",
    href: "/about-me",
    icon: React.createElement(Notebook),
  },
  {
    id: "skills",
    label: "skills",
    href: "/skills",
    icon: React.createElement(Cog),
  },
  {
    id: "projects",
    label: "projects",
    href: "/projects",
    icon: React.createElement(FolderKanban),
  },
  {
    id: "github",
    label: "github",
    href: "https://www.github.com/ressann",
    icon: React.createElement(Github),
  },
  {
    id: "contact",
    label: "contact",
    href: "/contact",
    icon: React.createElement(Contact),
  },
] as const;

export const skillCategoriesProgramming = [
  {
    title: "Frontend",
    skills: [
      { id: Math.random(), name: "React", level: 85 },
      { id: Math.random(), name: "Next.js", level: 90 },
      { id: Math.random(), name: "JavaScript", level: 85 },
      { id: Math.random(), name: "TypeScript", level: 85 },
      { id: Math.random(), name: "Tailwind CSS", level: 92 },
      { id: Math.random(), name: "HTML/CSS", level: 95 },
      { id: Math.random(), name: "Shadcn UI", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { id: Math.random(), name: "Node.js & Express.js", level: 85 },
      { id: Math.random(), name: "Python & FastAPI", level: 70 },
      { id: Math.random(), name: "PostgreSQL", level: 82 },
      { id: Math.random(), name: "MongoDB", level: 78 },
      { id: Math.random(), name: "REST APIs", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { id: Math.random(), name: "Git", level: 90 },
      { id: Math.random(), name: "Docker", level: 50 },
      { id: Math.random(), name: "Drizzle ORM", level: 70 },
      { id: Math.random(), name: "VS Code", level: 95 },
      { id: Math.random(), name: "Vercel", level: 88 },
    ],
  },
];

export const skillCategoriesNetworking = [
  {
    title: "Networking",
    skills: [
      { id: Math.random(), name: "Mikrotik Router", level: 90 },
      { id: Math.random(), name: "Huawei Switch", level: 50 },
      { id: Math.random(), name: "TP-Link Router", level: 95 },
      { id: Math.random(), name: "Ruijie Access Point", level: 75 },
      { id: Math.random(), name: "UniFi Access Point", level: 70 },
      { id: Math.random(), name: "Windows Server", level: 60 },
      { id: Math.random(), name: "IPPBX", level: 65 },
      { id: Math.random(), name: "CCTV", level: 70 },
    ],
  },
];

export const projectsProgramming = [
  {
    id: Math.random(),
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    year: "2024",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    year: "2024",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Portfolio CMS",
    description:
      "Headless CMS built for creative professionals to showcase their work with customizable templates and SEO optimization.",
    technologies: ["Next.js", "Sanity", "Tailwind CSS"],
    year: "2023",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Weather Dashboard",
    description:
      "Real-time weather tracking application with interactive maps, forecasts, and historical data visualization.",
    technologies: ["React", "D3.js", "OpenWeather API"],
    year: "2023",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media performance across multiple platforms with automated reporting.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
    year: "2023",
    link: "#",
  },
];

export const networkingProjects = [
  {
    id: Math.random(),
    title: "Enterprise Network Infrastructure",
    description:
      "Designed and implemented a scalable network infrastructure for a mid-sized enterprise, including VLANs, routing protocols, and network security measures.",
    technologies: ["Cisco IOS", "OSPF", "VLANs", "ACLs", "VPN"],
    year: "2024",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Network Security Implementation",
    description:
      "Deployed comprehensive network security solution with firewall configuration, intrusion detection systems, and security policy enforcement.",
    technologies: ["pfSense", "Snort", "IPSec", "SSL/TLS"],
    year: "2024",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Cloud Network Architecture",
    description:
      "Built hybrid cloud network connecting on-premises infrastructure with AWS, implementing secure connectivity and load balancing.",
    technologies: ["AWS VPC", "Direct Connect", "Route 53", "CloudFront"],
    year: "2023",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Network Monitoring System",
    description:
      "Implemented comprehensive network monitoring and alerting system for real-time visibility into network performance and issues.",
    technologies: ["Nagios", "Grafana", "SNMP", "NetFlow"],
    year: "2023",
    link: "#",
  },
  {
    id: Math.random(),
    title: "Wireless Network Deployment",
    description:
      "Designed and deployed enterprise wireless network with seamless roaming, guest access, and centralized management.",
    technologies: ["Ubiquiti UniFi", "802.11ac/ax", "RADIUS", "Captive Portal"],
    year: "2023",
    link: "#",
  },
];
