import React from "react";
import { Stack, Flex, Text } from "@mantine/core";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "Eskalate",
    description:
      "During my internship at A2SV, I contributed to the Eskalate project, a platform designed to connect companies with top African talent. My role involved developing features, improving user experience and user interface design",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/A2SV",
    imagepath: "/Eskalate/cover.png",
    link: "https://eskalate.io",
    direction: true,
  },
  {
    id: 2,
    title: "Guardian Muslim Marriage",
    description:
      "Guardian Muslim Marriage (GMM) is a platform designed to simplify and respect the process of finding a life partner, focusing on Islamic values and cultural norms. It aims to provide a safe, efficient, and meaningful matchmaking experience, avoiding the common frustrations of traditional apps and sites.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/jossyfresh/gmm",
    imagepath: "/GMM/cover.png",
    link: "https://guardianmuslimmarriage.com/",
    direction: false,
  },
  {
    id: 6,
    title: "Endubis Wallet",
    description:
      "Endubis is a cryptocurrency wallet for Africa that fully runs on Telegram, making crypto transactions and management accessible and seamless for users across the continent.",
    technologies: ["Node.js", "Telegram Bot API", "Web3.js", "React"],
    github: "https://github.com/jossyfresh/endubis-wallet",
    imagepath: "/Endubis/cover.png",
    link: "https://t.me/endubis_wallet_bot",
    direction: true,
  },
  {
    id: 3,
    title: "Vertex",
    description:
      "Developing an interview preparation platform, streamlining the process with interactive topics and course and also set of practice problems. Contributing to enhancing user experience and optimizing content for effective interview coaching. It is still in development.",
    technologies: ["Redux", "TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/A2SV",
    imagepath: "/Vertex/cover.png",
    link: "https://vertex-rho.vercel.app",
    direction: true,
  },
  {
    id: 4,
    title: "A2SV Community Portal",
    description:
      "Developed a community portal for A2SV, incorporating features such as forums and a blog section. Enhanced user engagement and information sharing through interactive discussions and valuable content contributions",
    technologies: ["Redux", "TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/jossyfresh/a2sv-community-portal",
    imagepath: "/CommunityPortal/cover.png",
    link: "https://a2sv-comminty-portal.vercel.app/",
    direction: false,
  },
  {
    id: 5,
    title: "YAYA Academy",
    description:
      "Designed and implemented an LMS for construction studies, enhancing learning with interactive, industry-specific courses. Improved course management and user engagement, resulting in better learning outcomes and certifications.",
    technologies: ["Redux", "TypeScript", "Next.js", "Node.js"],
    github: "https://github.com/jossyfresh/web-project",
    imagepath: "/YAYA Academy/cover.png",
    link: "https://yaya-academy.vercel.app/",
    direction: true,
  },
];

export default function Projects() {
  return (
    <Stack gap={150} id="Projects" py={120}>
      <Flex gap={20} align={"center"}>
        <Flex align={"end"} gap={12}>
          <Flex gap={0}>
            <Text c={"#64ffda"} size="20px">
              03.{" "}
              <span
                color="#e6f1ff"
                style={{
                  color: "#e6f1ff",
                  fontSize: "24px",
                }}>
                Some Things I&apos;ve Built
              </span>
            </Text>
          </Flex>
        </Flex>
        <Stack>
          <Stack
            w={400}
            style={{
              border: "0.5px solid #303C55",
            }}></Stack>
        </Stack>
      </Flex>
      {/* Contents */}
      <Stack gap={150}>
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
            direction={project.direction}
            imagepath={project.imagepath}
          />
        ))}
      </Stack>
    </Stack>
  );
}
