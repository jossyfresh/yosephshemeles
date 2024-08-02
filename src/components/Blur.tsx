"use client";
import BlurFade from "@/components/ui/blurfade";
import { Box, Flex, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ProjectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
  },
  {
    id: 3,
    title: "Project 2",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
  },
  {
    id: 4,
    title: "Project 2",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
  },
  {
    id: 5,
    title: "Project 2",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
  },
  {
    id: 6,
    title: "Project 2",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
  },
];

export function ProjecLists() {
  const [hovered, setHovered] = useState(10);
  return (
    <section id="photos">
      <div className="columns-2 gap-8 sm:columns-3 space-y-8 px-14">
        {ProjectsData.map((project) => (
          <BlurFade key={project.id} delay={0.25 + project.id * 0.05} inView>
            <Stack
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(10)}
              gap={40}
              w={350}
              bg={"#172a45"}
              py={15}
              px={30}
              style={{
                border: "0.5px solid #303C55",
                borderRadius: "5px",
                transition: "all 0.3s",
                transform:
                  hovered === project.id ? "scale(0.95)" : "scale(0.90)",
              }}
            >
              <Flex justify={"space-between"}>
                <Icon
                  icon="ph:folder-open"
                  style={{
                    color: "#64ffda",
                    fontSize: "50px",
                  }}
                />
                <Flex gap={10} align={"center"}>
                  <Icon
                    icon="ant-design:github-outlined"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  />

                  <Icon
                    icon="quill:link-out"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  />
                </Flex>
              </Flex>
              <Stack gap={20}>
                <Text size="20px" c={"#ccd6f6"} fw={600}>
                  Voter Registration WebApp
                </Text>
                <Text
                  w={"85%"}
                  size="16px"
                  c={"#a8b2d1"}
                  style={{
                    lineHeight: "1.5",
                  }}
                >
                  Project 4 under HTML-CSS Suven Coding Internship
                </Text>
              </Stack>
              <Flex gap={20}>
                <Text size="sm" c={"#64ffda"}>
                  HTML
                </Text>
                <Text size="sm" c={"#64ffda"}>
                  CSS
                </Text>
                <Text size="sm" c={"#64ffda"}>
                  Javascript
                </Text>
              </Flex>
            </Stack>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
