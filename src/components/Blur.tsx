"use client";
import BlurFade from "@/components/ui/blurfade";
import { Box, Flex, SimpleGrid, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const ProjectsData = [
  {
    id: 1,
    title: "Online Peer Mentoring",
    description:
      "a platform where students can connect with mentors and get mentorship",
    technologies: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/yidyetebeje/mavericks-online-mentoring-program",
    link: "https://github.com/yidyetebeje/mavericks-online-mentoring-program",
  },
  {
    id: 2,
    title: "YAYA Construction",
    description: "A Detailed website for a construction company called YAYA",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/jossyfresh/WebSite",
    link: "https://yaya-construction.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase my projects and skills",
    technologies: ["TypeScript", "Next.js", "Frame Motion"],
    github: "https://github.com/jossyfresh/yosephshemeles",
    link: "https://yosephshemeles.vercel.app/",
  },
  {
    id: 4,
    title: "Eathub",
    description:
      "Mobile application that allows users to view restaurants menus",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/jossyfresh/eat-hub",
    link: "https://github.com/jossyfresh/eat-hub",
  },
  {
    id: 5,
    title: "Urban AgriTech",
    description: "An IoT project that helps farmers monitor their crops",
    technologies: ["Arduino", "Python", "Scikit-learn"],
    github: "https://github.com/jossyfresh/Urban-Agri-Tech",
    link: "https://github.com/jossyfresh/Urban-Agri-Tech",
  },
  {
    id: 6,
    title: "Contest central",
    description:
      "A Dashboard for managing contests and contest results for a company",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/jossyfresh/contest-central",
    link: "https://github.com/jossyfresh/contest-central",
  },
];

export function ProjecLists() {
  const [hovered, setHovered] = useState(10);
  return (
    <section id="photos">
      <SimpleGrid cols={{ lg: 3, md: 2, sm: 2, xs: 1 }}>
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
                  <Link href={project.github}>
                    <Icon
                      icon="ant-design:github-outlined"
                      style={{
                        color: "white",
                        fontSize: "25px",
                      }}
                    />
                  </Link>
                  <Link href={project.link}>
                    <Icon
                      icon="quill:link-out"
                      style={{
                        color: "white",
                        fontSize: "25px",
                      }}
                    />
                  </Link>
                </Flex>
              </Flex>
              <Stack gap={20}>
                <Text size="20px" c={"#ccd6f6"} fw={600}>
                  {project.title}
                </Text>
                <Text
                  w={"85%"}
                  size="16px"
                  c={"#a8b2d1"}
                  style={{
                    lineHeight: "1.5",
                  }}
                >
                  {project.description}
                </Text>
              </Stack>
              <Flex gap={20}>
                {project.technologies?.map((tech, idx) => (
                  <Text key={idx} size="sm" c={"#64ffda"}>
                    {tech}
                  </Text>
                ))}
              </Flex>
            </Stack>
          </BlurFade>
        ))}
      </SimpleGrid>
    </section>
  );
}
