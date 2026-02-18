"use client";

import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                background: alpha(theme.palette.background.paper, 0.5),
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 3,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                            fontSize: "1.1rem",
                        }}
                    >
                        {"<AAN />"}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                        © {new Date().getFullYear()} AAN. Crafted with care & coffee ☕
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        {[
                            { icon: <GitHubIcon fontSize="small" />, href: "https://github.com", label: "GitHub" },
                            { icon: <LinkedInIcon fontSize="small" />, href: "https://linkedin.com", label: "LinkedIn" },
                            { icon: <EmailIcon fontSize="small" />, href: "mailto:hello@aan.dev", label: "Email" },
                        ].map((social) => (
                            <IconButton
                                key={social.label}
                                component="a"
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                size="small"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        background: alpha(theme.palette.primary.main, 0.1),
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
