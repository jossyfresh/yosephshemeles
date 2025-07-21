import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Stack } from "@mantine/core";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const WorkHistory = dynamic(() => import("@/components/WorkHistory"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const ProjectList = dynamic(() => import("@/components/ProjectList"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });
const RightSidebar = dynamic(() => import("@/components/Right"), {
  ssr: false,
});
const MailMe = dynamic(() => import("@/components/MailMe"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const BlurFade = dynamic(() => import("@/components/ui/blurfade"), {
  ssr: false,
});
const Achivements = dynamic(() => import("@/components/Achivements"), {
  ssr: false,
});

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack
        py={10}
        px={50}
        gap={270}
        style={{
          overflow: "hidden",
        }}>
        <BlurFade>
          <Stack
            px={{ lg: 130, md: 80, sm: 50 }}
            py={60}
            gap={300}
            pos={"relative"}>
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
          {/* <Achivements /> */}
          <MailMe />
          <Footer />
        </Stack>
      </Stack>
    </Suspense>
  );
}
