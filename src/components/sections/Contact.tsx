"use client";

import { useRef } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    IconButton,
    Snackbar,
    Alert,
    Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

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

const socialLinks = [
    { icon: <GitHubIcon />, href: "https://github.com", label: "GitHub", color: "#333" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn", color: "#0077B5" },
    { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
    { icon: <EmailIcon />, href: "mailto:hello@aan.dev", label: "Email", color: "#EA4335" },
];

export default function Contact() {
    const theme = useTheme();
    const [snackbar, setSnackbar] = useState<{ open: boolean; type: "success" | "error" }>({
        open: false,
        type: "success",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form data:", data);
        setSnackbar({ open: true, type: "success" });
        reset();
    };

    return (
        <Box
            id="contact"
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
                            Let&apos;s work together
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.8rem" } }}>
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mt: 2, maxWidth: 480, mx: "auto" }}
                        >
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                            My inbox is always open.
                        </Typography>
                    </Box>
                </SectionReveal>

                <Grid container spacing={5} alignItems="flex-start">
                    {/* Contact Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SectionReveal delay={0.1}>
                            <Stack spacing={3}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        background: alpha(theme.palette.background.paper, 0.6),
                                        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                        borderRadius: 3,
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                                        <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
                                        <Typography variant="subtitle2" fontWeight={600}>Location</Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Indonesia 🇮🇩 · Remote Worldwide
                                    </Typography>
                                </Paper>

                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        background: alpha(theme.palette.background.paper, 0.6),
                                        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                        borderRadius: 3,
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                                        <EmailIcon sx={{ color: theme.palette.primary.main }} />
                                        <Typography variant="subtitle2" fontWeight={600}>Email</Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        component="a"
                                        href="mailto:hello@aan.dev"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            textDecoration: "none",
                                            "&:hover": { textDecoration: "underline" },
                                        }}
                                    >
                                        hello@aan.dev
                                    </Typography>
                                </Paper>

                                {/* Social Links */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        background: alpha(theme.palette.background.paper, 0.6),
                                        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                        borderRadius: 3,
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                                        Find me on
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                        {socialLinks.map((social) => (
                                            <IconButton
                                                key={social.label}
                                                component="a"
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                                    "&:hover": {
                                                        color: social.color,
                                                        borderColor: social.color,
                                                        background: alpha(social.color, 0.08),
                                                        transform: "translateY(-3px)",
                                                    },
                                                    transition: "all 0.25s ease",
                                                }}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        ))}
                                    </Box>
                                </Paper>
                            </Stack>
                        </SectionReveal>
                    </Grid>

                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <SectionReveal delay={0.2}>
                            <Paper
                                elevation={0}
                                component="form"
                                onSubmit={handleSubmit(onSubmit)}
                                sx={{
                                    p: { xs: 3, md: 5 },
                                    background: alpha(theme.palette.background.paper, 0.7),
                                    border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                                    borderRadius: 4,
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            placeholder="John Doe"
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            {...register("name", {
                                                required: "Name is required",
                                                minLength: { value: 2, message: "Name must be at least 2 characters" },
                                            })}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            placeholder="john@example.com"
                                            type="email"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            placeholder="Project Collaboration"
                                            error={!!errors.subject}
                                            helperText={errors.subject?.message}
                                            {...register("subject", {
                                                required: "Subject is required",
                                                minLength: { value: 5, message: "Subject must be at least 5 characters" },
                                            })}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            placeholder="Tell me about your project..."
                                            multiline
                                            rows={5}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            {...register("message", {
                                                required: "Message is required",
                                                minLength: { value: 20, message: "Message must be at least 20 characters" },
                                            })}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={isSubmitting}
                                            endIcon={<SendIcon />}
                                            sx={{
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                                boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.35)}`,
                                                "&:hover": {
                                                    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.45)}`,
                                                    transform: "translateY(-2px)",
                                                },
                                                "&:disabled": {
                                                    opacity: 0.7,
                                                },
                                                transition: "all 0.3s ease",
                                                px: 4,
                                            }}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </SectionReveal>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    severity={snackbar.type}
                    onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
                    sx={{ borderRadius: 3 }}
                >
                    {snackbar.type === "success"
                        ? "Message sent! I'll get back to you soon. 🎉"
                        : "Something went wrong. Please try again."}
                </Alert>
            </Snackbar>
        </Box>
    );
}
