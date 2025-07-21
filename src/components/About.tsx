import { Icon } from "@iconify/react/dist/iconify.js";
import { Flex, SimpleGrid, Stack, Text } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Stack gap={50} id="about" py={120}>
      <Flex gap={20} align={"center"}>
        <Flex align={"end"} gap={12}>
          <Flex gap={0}>
            <Text c={"#64ffda"} size="20px">
              01.{" "}
              <span
                color="#e6f1ff"
                style={{
                  color: "#e6f1ff",
                  fontSize: "24px",
                }}>
                About Me
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
      {/* content */}
      <Stack>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}>
          Hey! I&apos;m Yoseph Shemeles, a software engineer based in Addis
          Ababa, Ethiopia.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}>
          I&apos;m passionate about building real-world solutions through code.
          Over the years, I&apos;ve worked across web development, automation,
          and problem-solving — always focused on writing clean, efficient, and
          scalable code.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}>
          I love working with great teams, learning new tools, and turning ideas
          into working products. Whether it&apos;s a solo build or a team
          collaboration, I&apos;m all about delivering with clarity and
          consistency.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}>
          Some things I enjoy:
        </Text>
        <SimpleGrid py={20} cols={2} w={"70%"} px={0}>
          <Flex gap={10}>
            <span role="img" aria-label="brain">
              🧠
            </span>
            <Text size="sm" c={"#64ffda"}>
              Solving problems and optimizing workflows
            </Text>
          </Flex>
          <Flex gap={10}>
            <span role="img" aria-label="globe">
              🌐
            </span>
            <Text size="sm" c={"#64ffda"}>
              Full-stack web development
            </Text>
          </Flex>
          <Flex gap={10}>
            <span role="img" aria-label="magnifying glass">
              🔍
            </span>
            <Text size="sm" c={"#64ffda"}>
              Debugging and refactoring legacy systems
            </Text>
          </Flex>
          <Flex gap={10}>
            <span role="img" aria-label="tools">
              🛠
            </span>
            <Text size="sm" c={"#64ffda"}>
              Working on real-world client projects
            </Text>
          </Flex>
          <Flex gap={10}>
            <span role="img" aria-label="speech bubble">
              💬
            </span>
            <Text size="sm" c={"#64ffda"}>
              Mentoring and collaborating with developers
            </Text>
          </Flex>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
