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
];

export const skillCategoriesProgramming = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 88 },
    ],
  },
];

export const skillCategoriesNetworking = [
  {
    title: "Networking",
    skills: [
      { name: "Mikrotik Router", level: 90 },
      { name: "Huawei Switch", level: 50 },
      { name: "TP-Link Router", level: 95 },
      { name: "Ruijie Access Point", level: 75 },
      { name: "UniFi Access Point", level: 70 },
      { name: "Windows Server", level: 60 },
      { name: "IPPBX", level: 65 },
      { name: "CCTV", level: 70 },
    ],
  },
];

export const projectsProgramming = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    year: "2024",
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    year: "2024",
    link: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS built for creative professionals to showcase their work with customizable templates and SEO optimization.",
    technologies: ["Next.js", "Sanity", "Tailwind CSS"],
    year: "2023",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather tracking application with interactive maps, forecasts, and historical data visualization.",
    technologies: ["React", "D3.js", "OpenWeather API"],
    year: "2023",
    link: "#",
  },
  {
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
    title: "Enterprise Network Infrastructure",
    description:
      "Designed and implemented a scalable network infrastructure for a mid-sized enterprise, including VLANs, routing protocols, and network security measures.",
    technologies: ["Cisco IOS", "OSPF", "VLANs", "ACLs", "VPN"],
    year: "2024",
    link: "#",
  },
  {
    title: "Network Security Implementation",
    description:
      "Deployed comprehensive network security solution with firewall configuration, intrusion detection systems, and security policy enforcement.",
    technologies: ["pfSense", "Snort", "IPSec", "SSL/TLS"],
    year: "2024",
    link: "#",
  },
  {
    title: "Cloud Network Architecture",
    description:
      "Built hybrid cloud network connecting on-premises infrastructure with AWS, implementing secure connectivity and load balancing.",
    technologies: ["AWS VPC", "Direct Connect", "Route 53", "CloudFront"],
    year: "2023",
    link: "#",
  },
  {
    title: "Network Monitoring System",
    description:
      "Implemented comprehensive network monitoring and alerting system for real-time visibility into network performance and issues.",
    technologies: ["Nagios", "Grafana", "SNMP", "NetFlow"],
    year: "2023",
    link: "#",
  },
  {
    title: "Wireless Network Deployment",
    description:
      "Designed and deployed enterprise wireless network with seamless roaming, guest access, and centralized management.",
    technologies: ["Ubiquiti UniFi", "802.11ac/ax", "RADIUS", "Captive Portal"],
    year: "2023",
    link: "#",
  },
];
