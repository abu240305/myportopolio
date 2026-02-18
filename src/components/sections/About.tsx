"use client";

import {
    Box,
    Container,
    Grid,
    Typography,
    Avatar,
    Paper,
    Chip,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timelineItems } from "@/data/timeline";

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

export default function About() {
    const theme = useTheme();

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 10, md: 14 },
                background: alpha(theme.palette.background.paper, 0.4),
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
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
                            Get to know me
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.8rem" } }}>
                            About Me
                        </Typography>
                    </Box>
                </SectionReveal>

                <Grid container spacing={6} alignItems="flex-start">
                    {/* Profile */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SectionReveal delay={0.1}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                                <Box sx={{ position: "relative" }}>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: -6,
                                            borderRadius: "50%",
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            opacity: 0.3,
                                            filter: "blur(12px)",
                                        }}
                                    />
                                    <Avatar
                                        sx={{
                                            width: 160,
                                            height: 160,
                                            fontSize: "4rem",
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                            border: `4px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                            position: "relative",
                                        }}
                                    >
                                        👨‍💻
                                    </Avatar>
                                </Box>

                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="h5" fontWeight={700} gutterBottom>
                                        AAN
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Fullstack Developer
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center", mt: 2 }}>
                                        {["Open to Work", "Remote Friendly", "Based in Indonesia"].map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    background: alpha(theme.palette.primary.main, 0.1),
                                                    color: theme.palette.primary.main,
                                                    fontWeight: 500,
                                                    fontSize: "0.7rem",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>

                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        width: "100%",
                                        background: alpha(theme.palette.primary.main, 0.05),
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                                        borderRadius: 3,
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                        I&apos;m a passionate fullstack developer with 4+ years of experience building
                                        web applications. I love creating calm, beautiful, and performant digital
                                        experiences that make people&apos;s lives easier.
                                    </Typography>
                                </Paper>
                            </Box>
                        </SectionReveal>
                    </Grid>

                    {/* Timeline */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <SectionReveal delay={0.2}>
                            <Typography variant="h5" fontWeight={600} sx={{ mb: 4 }}>
                                Career Journey
                            </Typography>
                        </SectionReveal>

                        <Box sx={{ position: "relative" }}>
                            {/* Timeline line */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: 20,
                                    top: 0,
                                    bottom: 0,
                                    width: 2,
                                    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.1)})`,
                                    borderRadius: 1,
                                }}
                            />

                            {timelineItems.map((item, index) => (
                                <SectionReveal key={item.id} delay={0.1 * (index + 1)}>
                                    <Box sx={{ display: "flex", gap: 3, mb: 4, position: "relative" }}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                background: item.type === "work"
                                                    ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                                                    : `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                                                zIndex: 1,
                                            }}
                                        >
                                            {item.type === "work"
                                                ? <WorkIcon sx={{ fontSize: 18, color: "#fff" }} />
                                                : <SchoolIcon sx={{ fontSize: 18, color: "#fff" }} />
                                            }
                                        </Box>

                                        {/* Content */}
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                flex: 1,
                                                background: alpha(theme.palette.background.paper, 0.7),
                                                border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                                borderRadius: 3,
                                                backdropFilter: "blur(10px)",
                                                "&:hover": {
                                                    borderColor: alpha(theme.palette.primary.main, 0.3),
                                                    transform: "translateX(4px)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 1 }}>
                                                <Typography variant="h6" fontWeight={600} sx={{ fontSize: "1rem" }}>
                                                    {item.title}
                                                </Typography>
                                                <Chip
                                                    label={item.year}
                                                    size="small"
                                                    sx={{
                                                        background: alpha(theme.palette.primary.main, 0.1),
                                                        color: theme.palette.primary.main,
                                                        fontWeight: 600,
                                                        fontSize: "0.7rem",
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: theme.palette.primary.main, fontWeight: 500, mb: 1 }}
                                            >
                                                {item.company}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </Paper>
                                    </Box>
                                </SectionReveal>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
