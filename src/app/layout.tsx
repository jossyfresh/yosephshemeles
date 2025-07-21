import "@mantine/core/styles.css";

import { ColorSchemeScript, Flex, Stack, MantineProvider } from "@mantine/core";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/Sidebar";
import RightSidebar from "@/components/Right";
import { Poppins } from "next/font/google";
import { PT_Mono } from "next/font/google";
import { Satisfy } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export const metadata: Metadata = {
  title: "Yoseph Shemeles",
  description: "Yoseph Shemeles' personal website",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

const JetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
          rel="stylesheet"
        />
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </head>
      <body
        className={JetBrains.className}
        style={{
          background: "#0a192f",
        }}
      >
        <ColorSchemeScript />
        <ShootingStars />
        <StarsBackground />
        <MantineProvider>
          <Navbar />
          <Flex>
            <LeftSidebar />
            {children}
            <RightSidebar />
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
