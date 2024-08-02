"use client";
import { Grid, Stack, Text, Flex, SimpleGrid } from "@mantine/core";
import React from "react";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { WobbleCardDemo } from "./WobbleCard";
import { Icon } from "@iconify/react";
import { WobbleCard } from "./ui/wobble-card";
import { ProjecLists } from "./Blur";

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

export default function ProjectList() {
  const [hovered, setHovered] = React.useState(10);
  return (
    <Stack gap={70} px={70}>
      {/* Title */}
      <Stack align="center" gap={10}>
        <Text size="30px" c={"#e6f1ff"} fw={600}>
          Other Noteworthy Projects
        </Text>
        <Text size="18px" c={"#64ffda"}>
          View Complete List of Projects/Codes
        </Text>
      </Stack>
      {/* Projects */}
      <ProjecLists />
    </Stack>
  );
}
