import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MuiThemeProvider } from "@/theme/MuiThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AAN — Fullstack Developer Portfolio",
  description:
    "Fullstack developer specializing in React, Next.js, and Node.js. Building calm, beautiful, and performant web experiences.",
  keywords: ["fullstack developer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "AAN" }],
  openGraph: {
    title: "AAN — Fullstack Developer Portfolio",
    description: "Building calm, beautiful, and performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <MuiThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MuiThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
