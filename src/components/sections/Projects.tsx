"use client";

import { useState, useRef } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Chip,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Skeleton,
    Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Fullstack", "Mobile"];

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    const theme = useTheme();
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <Paper
            elevation={0}
            onClick={onClick}
            sx={{
                overflow: "hidden",
                background: alpha(theme.palette.background.paper, 0.7),
                border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                    transform: "translateY(-6px)",
                    boxShadow: `0 20px 48px ${alpha(theme.palette.primary.main, 0.15)}`,
                },
                transition: "all 0.35s ease",
            }}
        >
            {/* Image placeholder */}
            <Box
                sx={{
                    height: 180,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {!imgLoaded && (
                    <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
                )}
                <Typography sx={{ fontSize: "3rem", opacity: imgLoaded ? 1 : 0 }} onLoad={() => setImgLoaded(true)}>
                    {project.category === "Frontend" ? "🎨" :
                        project.category === "Backend" ? "⚙️" :
                            project.category === "Mobile" ? "📱" : "🚀"}
                </Typography>
                <Chip
                    label={project.category}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: alpha(theme.palette.background.paper, 0.9),
                        backdropFilter: "blur(8px)",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        color: theme.palette.primary.main,
                    }}
                />
                {project.featured && (
                    <Chip
                        label="⭐ Featured"
                        size="small"
                        sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            background: alpha(theme.palette.primary.main, 0.9),
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                        }}
                    />
                )}
            </Box>

            {/* Content */}
            <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ fontSize: "1rem" }}>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1, lineHeight: 1.7 }}>
                    {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {project.tech.slice(0, 3).map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                                background: alpha(theme.palette.primary.main, 0.08),
                                color: theme.palette.primary.main,
                                fontSize: "0.7rem",
                                fontWeight: 500,
                            }}
                        />
                    ))}
                    {project.tech.length > 3 && (
                        <Chip
                            label={`+${project.tech.length - 3}`}
                            size="small"
                            sx={{
                                background: alpha(theme.palette.divider, 0.5),
                                color: theme.palette.text.secondary,
                                fontSize: "0.7rem",
                            }}
                        />
                    )}
                </Box>
            </Box>
        </Paper>
    );
}

function ProjectDialog({ project, open, onClose }: { project: Project | null; open: boolean; onClose: () => void }) {
    const theme = useTheme();
    if (!project) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    background: alpha(theme.palette.background.paper, 0.95),
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                    borderRadius: 4,
                },
            }}
        >
            <DialogTitle sx={{ pr: 6 }}>
                <Typography variant="h5" fontWeight={700}>{project.title}</Typography>
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", right: 12, top: 12, color: theme.palette.text.secondary }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        height: 160,
                        mb: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "4rem",
                    }}
                >
                    {project.category === "Frontend" ? "🎨" :
                        project.category === "Backend" ? "⚙️" :
                            project.category === "Mobile" ? "📱" : "🚀"}
                </Box>

                <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                    <Chip label={project.category} size="small" color="primary" />
                    {project.featured && <Chip label="⭐ Featured" size="small" sx={{ background: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main }} />}
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    {project.longDescription}
                </Typography>

                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>Tech Stack</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
                    {project.tech.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                                background: alpha(theme.palette.primary.main, 0.08),
                                color: theme.palette.primary.main,
                                fontWeight: 500,
                            }}
                        />
                    ))}
                </Box>

                <Stack direction="row" spacing={2}>
                    {project.github && (
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ borderRadius: 50, textTransform: "none" }}
                        >
                            GitHub
                        </Button>
                    )}
                    {project.demo && (
                        <Button
                            variant="contained"
                            startIcon={<OpenInNewIcon />}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ borderRadius: 50, textTransform: "none" }}
                        >
                            Live Demo
                        </Button>
                    )}
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default function Projects() {
    const theme = useTheme();
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    const handleCardClick = (project: Project) => {
        setSelectedProject(project);
        setDialogOpen(true);
    };

    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 10, md: 14 },
                background: alpha(theme.palette.background.paper, 0.4),
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <SectionReveal>
                    <Box sx={{ mb: 8, textAlign: "center" }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                letterSpacing: "0.15em",
                                mb: 1,
                                display: "block",
                            }}
                        >
                            Things I&apos;ve built
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.8rem" } }}>
                            Projects
                        </Typography>
                    </Box>
                </SectionReveal>

                {/* Filter */}
                <SectionReveal delay={0.1}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mb: 6 }}>
                        {categories.map((cat) => (
                            <Chip
                                key={cat}
                                label={cat}
                                onClick={() => setActiveCategory(cat)}
                                sx={{
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    background: activeCategory === cat
                                        ? theme.palette.primary.main
                                        : alpha(theme.palette.background.paper, 0.7),
                                    color: activeCategory === cat ? "#fff" : theme.palette.text.secondary,
                                    border: `1px solid ${activeCategory === cat ? theme.palette.primary.main : alpha(theme.palette.divider, 0.5)}`,
                                    "&:hover": {
                                        background: activeCategory === cat
                                            ? theme.palette.primary.dark
                                            : alpha(theme.palette.primary.main, 0.08),
                                    },
                                    transition: "all 0.2s ease",
                                    px: 1,
                                    py: 2.5,
                                }}
                            />
                        ))}
                    </Box>
                </SectionReveal>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Grid container spacing={3}>
                            {filteredProjects.map((project, index) => (
                                <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <SectionReveal delay={index * 0.08}>
                                        <ProjectCard project={project} onClick={() => handleCardClick(project)} />
                                    </SectionReveal>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>
            </Container>

            <ProjectDialog
                project={selectedProject}
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            />
        </Box>
    );
}
