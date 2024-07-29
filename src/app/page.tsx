import React from "react";
import { Stack } from "@mantine/core";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Stack px={50} py={25}>
      <Navbar />
      <Stack px={130} py={60} gap={300}>
        <Hero />
        <About />
        <Stack justify="center" align="center">
          <WorkHistory />
        </Stack>
        <Projects />
      </Stack>
    </Stack>
  );
}
