"use client";

import { useState, useRef } from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Grid,
    Paper,
    LinearProgress,
    Tabs,
    Tab,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";

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

export default function Skills() {
    const theme = useTheme();
    const [activeCategory, setActiveCategory] = useState(0);

    const currentCategory = skillCategories[activeCategory];
    const filteredSkills = skills.filter((s) => s.category === currentCategory);

    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 10, md: 14 },
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
                            What I work with
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.8rem" } }}>
                            Skills & Technologies
                        </Typography>
                    </Box>
                </SectionReveal>

                {/* Category Tabs */}
                <SectionReveal delay={0.1}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                        <Tabs
                            value={activeCategory}
                            onChange={(_, v) => setActiveCategory(v)}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                "& .MuiTabs-indicator": {
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    height: 3,
                                    borderRadius: 2,
                                },
                                "& .MuiTab-root": {
                                    textTransform: "none",
                                    fontWeight: 500,
                                    fontSize: "0.95rem",
                                    color: theme.palette.text.secondary,
                                    "&.Mui-selected": {
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    },
                                },
                            }}
                        >
                            {skillCategories.map((cat) => (
                                <Tab key={cat} label={cat} />
                            ))}
                        </Tabs>
                    </Box>
                </SectionReveal>

                {/* Skills Grid */}
                <Grid container spacing={2}>
                    {filteredSkills.map((skill, index) => (
                        <Grid key={skill.name} size={{ xs: 12, sm: 6, md: 4 }}>
                            <SectionReveal delay={index * 0.05}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        background: alpha(theme.palette.background.paper, 0.6),
                                        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                        borderRadius: 3,
                                        backdropFilter: "blur(10px)",
                                        cursor: "default",
                                        "&:hover": {
                                            borderColor: alpha(theme.palette.primary.main, 0.4),
                                            background: alpha(theme.palette.primary.main, 0.03),
                                            transform: "translateY(-4px)",
                                            boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.12)}`,
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                        <Typography sx={{ fontSize: "1.5rem" }}>{skill.icon}</Typography>
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                                                <Typography variant="body2" fontWeight={600}>
                                                    {skill.name}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                                                >
                                                    {skill.level}%
                                                </Typography>
                                            </Box>
                                            <LinearProgress
                                                variant="determinate"
                                                value={skill.level}
                                                sx={{
                                                    height: 6,
                                                    borderRadius: 3,
                                                    background: alpha(theme.palette.primary.main, 0.1),
                                                    "& .MuiLinearProgress-bar": {
                                                        borderRadius: 3,
                                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Paper>
                            </SectionReveal>
                        </Grid>
                    ))}
                </Grid>

                {/* All Skills Chips */}
                <SectionReveal delay={0.3}>
                    <Box sx={{ mt: 8, textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontWeight: 500 }}>
                            Also familiar with
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                            {["Webpack", "Vite", "Jest", "Cypress", "Storybook", "Vercel", "Netlify", "Nginx", "PM2", "GitHub Actions"].map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        borderColor: alpha(theme.palette.divider, 0.8),
                                        color: theme.palette.text.secondary,
                                        "&:hover": {
                                            borderColor: theme.palette.primary.main,
                                            color: theme.palette.primary.main,
                                            background: alpha(theme.palette.primary.main, 0.05),
                                        },
                                        transition: "all 0.2s ease",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </SectionReveal>
            </Container>
        </Box>
    );
}
