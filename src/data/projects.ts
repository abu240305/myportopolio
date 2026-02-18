import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce with payment integration and admin dashboard.",
        longDescription:
            "A comprehensive e-commerce solution built with Next.js and Node.js. Features include product management, cart functionality, Stripe payment integration, order tracking, and a full-featured admin dashboard with analytics.",
        category: "Fullstack",
        tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
        image: "/projects/ecommerce.jpg",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and team features.",
        longDescription:
            "A real-time collaborative task management application inspired by Trello. Built with React and Socket.io for live updates. Supports drag-and-drop boards, team collaboration, notifications, and deadline tracking.",
        category: "Frontend",
        tech: ["React", "TypeScript", "Socket.io", "Zustand", "Tailwind CSS"],
        image: "/projects/taskmanager.jpg",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "REST API Service",
        description: "Scalable REST API with authentication, rate limiting, and documentation.",
        longDescription:
            "A production-ready REST API built with Express.js and TypeScript. Features JWT authentication, role-based access control, rate limiting, request validation, comprehensive error handling, and auto-generated Swagger documentation.",
        category: "Backend",
        tech: ["Node.js", "Express", "TypeScript", "MongoDB", "JWT", "Swagger"],
        image: "/projects/api.jpg",
        github: "https://github.com",
        featured: false,
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts, maps, and location search.",
        longDescription:
            "An elegant weather dashboard that provides current conditions, 7-day forecasts, hourly breakdowns, and interactive maps. Uses OpenWeatherMap API with geolocation support and beautiful data visualizations using Chart.js.",
        category: "Frontend",
        tech: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API", "Leaflet"],
        image: "/projects/weather.jpg",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 5,
        title: "Blog CMS",
        description: "Headless CMS with markdown support, SEO optimization, and analytics.",
        longDescription:
            "A custom headless CMS built for bloggers and content creators. Features a rich markdown editor, image optimization, SEO tools, tag management, comment system, and built-in analytics dashboard.",
        category: "Fullstack",
        tech: ["Next.js", "Prisma", "PostgreSQL", "MDX", "NextAuth", "Vercel"],
        image: "/projects/blog.jpg",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 6,
        title: "Mobile Fitness App",
        description: "Cross-platform fitness tracker with workout plans and progress charts.",
        longDescription:
            "A cross-platform mobile fitness application built with React Native. Includes custom workout builder, exercise library with animations, progress tracking, nutrition logging, and social challenges with friends.",
        category: "Mobile",
        tech: ["React Native", "TypeScript", "Expo", "SQLite", "Redux Toolkit"],
        image: "/projects/fitness.jpg",
        github: "https://github.com",
        featured: false,
    },
];
