import { Skill } from "@/types";

export const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "⚛️", level: 92, category: "Frontend" },
    { name: "Next.js", icon: "▲", level: 90, category: "Frontend" },
    { name: "TypeScript", icon: "🔷", level: 88, category: "Frontend" },
    { name: "JavaScript", icon: "🟡", level: 95, category: "Frontend" },
    { name: "HTML/CSS", icon: "🎨", level: 95, category: "Frontend" },
    { name: "MUI", icon: "🎯", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", icon: "💨", level: 88, category: "Frontend" },
    { name: "Framer Motion", icon: "🎬", level: 80, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: "🟢", level: 88, category: "Backend" },
    { name: "Express.js", icon: "🚀", level: 85, category: "Backend" },
    { name: "REST API", icon: "🔗", level: 90, category: "Backend" },
    { name: "GraphQL", icon: "◈", level: 75, category: "Backend" },
    { name: "Python", icon: "🐍", level: 78, category: "Backend" },

    // Database
    { name: "PostgreSQL", icon: "🐘", level: 82, category: "Database" },
    { name: "MongoDB", icon: "🍃", level: 85, category: "Database" },
    { name: "Redis", icon: "🔴", level: 75, category: "Database" },
    { name: "Prisma", icon: "◆", level: 80, category: "Database" },

    // Tools
    { name: "Git", icon: "🌿", level: 92, category: "Tools" },
    { name: "Docker", icon: "🐳", level: 78, category: "Tools" },
    { name: "Linux", icon: "🐧", level: 82, category: "Tools" },
    { name: "Figma", icon: "🎭", level: 72, category: "Tools" },
    { name: "AWS", icon: "☁️", level: 70, category: "Tools" },

    // Mobile
    { name: "React Native", icon: "📱", level: 80, category: "Mobile" },
    { name: "Expo", icon: "⚡", level: 78, category: "Mobile" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Tools", "Mobile"] as const;
