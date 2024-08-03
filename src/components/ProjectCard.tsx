import { Flex, Image, Stack, Text } from "@mantine/core";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { link } from "fs";

interface ProjectCardProps {
  direction: boolean;
  github: string | "";
  link: string | "";
  title: string;
  description: string;
  technologies: string[];
  imagepath: string;
}
export default function ProjectCard({
  direction = false,
  link = "",
  github = "",
  title,
  description,
  technologies,
  imagepath,
}: ProjectCardProps) {
  return (
    <Stack pos={"relative"}>
      <Stack
        w={600}
        h={290}
        bg={"#303C55"}
        style={{
          placeSelf: direction ? "end" : "start",
          zIndex: 1,
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            borderRadius: "5px",
          }}
          src={imagepath}
          alt=""
          width={"100%"}
          height={300}
        />
      </Stack>
      <Stack
        gap={20}
        pos={"absolute"}
        top={-15}
        align={`${direction ? "start" : "end"}`}
        style={{
          left: direction ? 0 : "auto",
          right: direction ? "auto" : 0,
          zIndex: 1000,
        }}
      >
        <Stack gap={6} align={`${direction ? "start" : "end"}`}>
          <Text c={"#64ffda"} size="lg">
            Featured Project{" "}
          </Text>
          <Text c={"#ccd6f6"} fw={600} size="25px">
            {title}
          </Text>
        </Stack>

        <Stack
          w={500}
          px={20}
          py={20}
          gap={10}
          bg={"#172a45"}
          style={{
            borderRadius: "5px",
          }}
        >
          <Text
            style={{
              textAlign: direction ? "start" : "end",
            }}
            c={"#a8b2d1"}
          >
            {description}
          </Text>
        </Stack>
        <Flex gap={25}>
          {technologies?.map((tech, idx) => (
            <Text key={idx} size="sm" c={"#64ffda"}>
              {tech}
            </Text>
          ))}
        </Flex>
        <Flex gap={15}>
          <Link href={github}>
            <Icon
              icon="ant-design:github-outlined"
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
          </Link>
          <Link href={link} target="_blank">
            <Icon
              icon="quill:link-out"
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
}
