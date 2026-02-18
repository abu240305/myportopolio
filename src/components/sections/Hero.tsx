"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { motion, Variants } from "framer-motion"; // Tambahkan Variants di sini

// Tambahkan tipe Variants dan gunakan 'as const' untuk properti ease
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" as const // Tambahkan 'as const' di sini untuk memperbaiki error
        } 
    },
};

export default function Hero() {
    const theme = useTheme();

    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Box
            id="hero"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                background: `radial-gradient(ellipse at 20% 50%, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 60%),
                     radial-gradient(ellipse at 80% 20%, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 50%)`,
            }}
        >
            {/* Decorative blobs */}
            <Box
                sx={{
                    position: "absolute",
                    top: "15%",
                    right: "10%",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.12)}, transparent)`,
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "20%",
                    left: "5%",
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)}, transparent)`,
                    filter: "blur(30px)",
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                mb: 2,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontSize: "0.85rem",
                            }}
                        >
                            👋 Hello, I&apos;m
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "2.8rem", sm: "4rem", md: "5.5rem" },
                                fontWeight: 800,
                                lineHeight: 1.1,
                                mb: 2,
                                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            AAN
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
                                fontWeight: 500,
                                color: theme.palette.text.secondary,
                                mb: 3,
                            }}
                        >
                            Fullstack Developer &{" "}
                            <Box
                                component="span"
                                sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                            >
                                UI Craftsman
                            </Box>
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                maxWidth: 520,
                                mb: 5,
                                fontSize: "1.1rem",
                            }}
                        >
                            I build calm, beautiful, and performant web experiences. Passionate about clean
                            code, thoughtful design, and meaningful user interactions.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<OpenInNewIcon />}
                                onClick={() => handleScroll("#projects")}
                                sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.35)}`,
                                    "&:hover": {
                                        boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.45)}`,
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => handleScroll("#contact")}
                                sx={{
                                    borderColor: alpha(theme.palette.primary.main, 0.5),
                                    color: theme.palette.primary.main,
                                    "&:hover": {
                                        borderColor: theme.palette.primary.main,
                                        background: alpha(theme.palette.primary.main, 0.06),
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                Get In Touch
                            </Button>
                        </Stack>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)" }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 0.5,
                                cursor: "pointer",
                                color: theme.palette.text.secondary,
                                opacity: 0.6,
                                "&:hover": { opacity: 1 },
                                transition: "opacity 0.2s",
                            }}
                            onClick={() => handleScroll("#about")}
                        >
                            <Typography variant="caption" sx={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                Scroll
                            </Typography>
                            <ArrowDownwardIcon fontSize="small" />
                        </Box>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}