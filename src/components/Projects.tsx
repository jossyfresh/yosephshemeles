import React from "react";
import { Stack, Flex, Text } from "@mantine/core";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Stack gap={100}>
      <Flex gap={20} align={"center"}>
        <Flex align={"end"} gap={12}>
          <Flex>
            <Text c={"#64ffda"} size="20px">
              03.{" "}
              <span
                color="#e6f1ff"
                style={{
                  paddingLeft: "7px",
                  color: "#e6f1ff",
                  fontSize: "30px",
                }}
              >
                Some Things I've Built
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
      <ProjectCard />
    </Stack>
  );
}
