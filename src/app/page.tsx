import React from "react";
import { Stack } from "@mantine/core";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";
import ProjectList from "@/components/ProjectList";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/Right";
import MailMe from "@/components/MailMe";
import Footer from "@/components/Footer";
import { Meteors } from "@/components/ui/meteors";
import { MeteorsDemo } from "@/components/Demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ShootingStarsAndStarsBackgroundDemo";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Skills from "@/components/Skills";
import BlurFade from "@/components/ui/blurfade";
import Achivements from "@/components/Achivements";

export default function Home() {
  return (
    <Stack
      py={10}
      px={50}
      gap={270}
      style={{
        overflow: "hidden",
      }}
    >
      <BlurFade>
        <Stack
          px={{ lg: 130, md: 80, sm: 50 }}
          py={60}
          gap={300}
          pos={"relative"}
        >
          <Hero />
          <About />

          <Skills />

          <Stack justify="center" align="center">
            <WorkHistory />
          </Stack>

          <Projects />
        </Stack>
      </BlurFade>
      <ProjectList />
      <Stack align="center" gap={200}>
        <Achivements />
        <MailMe />
        <Footer />
      </Stack>
    </Stack>
  );
}
