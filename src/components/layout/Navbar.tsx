"use client";

import * as React from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { resolvedTheme, setTheme } = useNextTheme();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    const isDark = mounted && resolvedTheme === "dark";

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                suppressHydrationWarning
                sx={{
                    background: scrolled
                        ? alpha(theme.palette.background.default, 0.85)
                        : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled
                        ? `1px solid ${alpha(theme.palette.divider, 0.5)}`
                        : "none",
                    transition: "all 0.4s ease",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ py: 1 }}>
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                variant="h6"
                                component="a"
                                href="#hero"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("#hero");
                                }}
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                    fontSize: "1.3rem",
                                    letterSpacing: "-0.02em",
                                    cursor: "pointer",
                                }}
                            >
                                {"<AAN />"}
                            </Typography>
                        </motion.div>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop Nav */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                    <Button
                                        onClick={() => handleNavClick(link.href)}
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontWeight: 500,
                                            "&:hover": {
                                                color: theme.palette.primary.main,
                                                background: alpha(theme.palette.primary.main, 0.08),
                                            },
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <IconButton
                                    onClick={toggleTheme}
                                    suppressHydrationWarning
                                    sx={{
                                        ml: 1,
                                        color: theme.palette.text.secondary,
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                            background: alpha(theme.palette.primary.main, 0.08),
                                        },
                                    }}
                                >
                                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                                </IconButton>
                            </motion.div>
                        </Box>

                        {/* Mobile */}
                        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                            <IconButton
                                onClick={toggleTheme}
                                suppressHydrationWarning
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                            <IconButton
                                onClick={() => setMobileOpen(true)}
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 260,
                        background: alpha(theme.palette.background.paper, 0.95),
                        backdropFilter: "blur(20px)",
                        borderLeft: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
                    },
                }}
            >
                <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={() => setMobileOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map((link) => (
                        <ListItem key={link.label} disablePadding>
                            <ListItemButton
                                onClick={() => handleNavClick(link.href)}
                                sx={{
                                    py: 1.5,
                                    px: 3,
                                    "&:hover": {
                                        background: alpha(theme.palette.primary.main, 0.08),
                                        color: theme.palette.primary.main,
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={link.label}
                                    primaryTypographyProps={{ fontWeight: 500 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
