import { Stack, Flex, Text } from "@mantine/core";
import React from "react";

export default function Navbar() {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Stack>
        <Text c={"#64ffda"} size="40px" fw={600}>
          Y
        </Text>
      </Stack>
      <Flex gap={50} align={"center"}>
        <Flex gap={5}>
          <Text c={"#64ffda"} size={"sm"}>
            01.
          </Text>
          <Text c={"#e6f1ff"} size={"sm"}>
            About
          </Text>
        </Flex>
        <Flex gap={5}>
          <Text c={"#64ffda"} size={"sm"}>
            02.
          </Text>
          <Text c={"#e6f1ff"} size={"sm"}>
            Experience
          </Text>
        </Flex>
        <Flex gap={5}>
          <Text c={"#64ffda"} size={"sm"}>
            03.
          </Text>
          <Text c={"#e6f1ff"} size={"sm"}>
            Projects
          </Text>
        </Flex>
        <Flex gap={5}>
          <Text c={"#64ffda"} size={"sm"}>
            04.
          </Text>
          <Text c={"#e6f1ff"} size={"sm"}>
            Contact
          </Text>
        </Flex>
        <Stack
          px={20}
          py={10}
          style={{
            border: "1px solid #64ffda",
            borderRadius: "5%",
          }}
        >
          <Text c={"#64ffda"} size="sm">
            Resume
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
