"use client";

import { createTheme, alpha } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Earth tone palette
const palette = {
    sage: {
        50: "#f4f7f4",
        100: "#e6ede6",
        200: "#ccdccc",
        300: "#a5c2a5",
        400: "#78a278",
        500: "#5a8a5a",
        600: "#476e47",
        700: "#3a5a3a",
        800: "#304830",
        900: "#293d29",
    },
    cream: {
        50: "#fdfcf8",
        100: "#faf7ef",
        200: "#f4edda",
        300: "#ecdfc0",
        400: "#e0cc9e",
        500: "#d4b87c",
        600: "#c4a05a",
        700: "#a8854a",
        800: "#8a6c3e",
        900: "#715935",
    },
    brown: {
        50: "#faf7f5",
        100: "#f3ede8",
        200: "#e5d8cf",
        300: "#d2bfb0",
        400: "#bba08c",
        500: "#a8856e",
        600: "#956e58",
        700: "#7c5a48",
        800: "#664b3d",
        900: "#553f34",
    },
};

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: palette.sage[600],
            light: palette.sage[400],
            dark: palette.sage[800],
            contrastText: "#ffffff",
        },
        secondary: {
            main: palette.cream[600],
            light: palette.cream[400],
            dark: palette.cream[800],
            contrastText: "#ffffff",
        },
        background: {
            default: palette.cream[50],
            paper: "#ffffff",
        },
        text: {
            primary: palette.brown[900],
            secondary: palette.brown[600],
        },
        divider: alpha(palette.brown[300], 0.3),
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: { fontWeight: 700, letterSpacing: "-0.02em" },
        h2: { fontWeight: 700, letterSpacing: "-0.01em" },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        body1: { lineHeight: 1.75 },
        body2: { lineHeight: 1.65 },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    textTransform: "none",
                    fontWeight: 600,
                    padding: "10px 28px",
                    transition: "all 0.3s ease",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 12,
                    },
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: palette.sage[400],
            light: palette.sage[300],
            dark: palette.sage[600],
            contrastText: "#ffffff",
        },
        secondary: {
            main: palette.cream[400],
            light: palette.cream[300],
            dark: palette.cream[600],
            contrastText: "#1a1a1a",
        },
        background: {
            default: "#141a14",
            paper: "#1e271e",
        },
        text: {
            primary: palette.cream[100],
            secondary: palette.cream[300],
        },
        divider: alpha(palette.sage[700], 0.4),
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: { fontWeight: 700, letterSpacing: "-0.02em" },
        h2: { fontWeight: 700, letterSpacing: "-0.01em" },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        body1: { lineHeight: 1.75 },
        body2: { lineHeight: 1.65 },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    textTransform: "none",
                    fontWeight: 600,
                    padding: "10px 28px",
                    transition: "all 0.3s ease",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 12,
                    },
                },
            },
        },
    },
});
