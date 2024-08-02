import React from "react";
import { Stack, Flex, Text } from "@mantine/core";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Face Mask Detection system to automatically detect the face masks on people in real time through webcams. Own custom dataset was built using Bing Search API and Kaggle. Achieved 95% accuracy in all mask colors; managed to improve efficiency in all lighting conditions",
    technologies: ["React", "TypeScript", "Python", "Tensorflow"],
    github: "https://github.com",
    link: "https://github.com",
    direction: true,
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Built Disney+ Clone with React JS with Google account's Sign in feature. Styled to get 15+ movies made by Disney; clickable images to get details of the specific movie.Inspired by Clever Programmer's Youtube Channel.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
    direction: false,
  },
  {
    id: 3,
    title: "Project 2",
    description:
      "Designed and implemented React-based Web Application to monitor live corona cases, recoveries, and deaths(clickable tabs) in 180+ countries worldwide. Directed to display 2 features – worldwide cases and countries based report; clickable markers on the map to show country stats and line chart for fluctuations over days, on hover, gives exact figures",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
    direction: true,
  },
  {
    id: 4,
    title: "Project 2",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.Inspired by Nicholas Renotte's Youtube Tutorial.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com",
    link: "https://github.com",
    direction: false,
  },
];

export default function Projects() {
  return (
    <Stack gap={150}>
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
                }}
              >
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
            }}
          ></Stack>
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
          />
        ))}
      </Stack>
    </Stack>
  );
}
