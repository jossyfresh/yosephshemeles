import { Flex, Stack, Text } from "@mantine/core";
import React from "react";

export default function ProjectCard() {
  return (
    <Stack pos={"relative"}>
      <Stack
        w={600}
        h={300}
        bg={"#303C55"}
        style={{
          zIndex: 1,
          borderRadius: "10px",
        }}
      ></Stack>
      <Stack
        gap={20}
        pos={"absolute"}
        top={-15}
        right={0}
        align="end"
        style={{
          zIndex: 1000,
        }}
      >
        <Stack gap={6} align="end">
          <Text c={"#64ffda"} size="lg">
            Featured Project{" "}
          </Text>
          <Text c={"#ccd6f6"} fw={600} size="25px">
            AI Face Landmark Detection
          </Text>
        </Stack>

        <Stack w={500} pr={20} py={20} gap={10} bg={"#172a45"}>
          <Text
            style={{
              textAlign: "end",
            }}
            c={"#a8b2d1"}
          >
            Facial landmark recognition allows you to detect a number of
            different points on your face that together make up your eyes,
            mouth, ears, nose and so on.
          </Text>
          <Text
            style={{
              textAlign: "end",
            }}
            c={"#a8b2d1"}
          >
            Inspired by Nicholas Renotte's Youtube Tutorial.
          </Text>
        </Stack>
        <Flex gap={25}>
          <Text size="sm" c={"#64ffda"}>
            ReactJS
          </Text>
          <Text size="sm" c={"#64ffda"}>
            Redux
          </Text>
          <Text size="sm" c={"#64ffda"}>
            Styled Components
          </Text>
          <Text size="sm" c={"#64ffda"}>
            Firebase
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
}
