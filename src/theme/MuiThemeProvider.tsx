"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme as useNextTheme } from "next-themes";
import { lightTheme, darkTheme } from "./theme";

export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useNextTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid hydration mismatch by using light theme until mounted
    const theme = mounted && resolvedTheme === "dark" ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
