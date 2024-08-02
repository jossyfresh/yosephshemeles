import { Stack, Flex, Text } from "@mantine/core";
import React from "react";
import { IconCloudDemo } from "./IconCloudDemo";

export default function Skills() {
  return (
    <Stack align="center">
      <Flex align={"start"} gap={12}>
        <Flex gap={0}>
          <Text c={"#e6f1ff"} size="40px">
            Top Skills
          </Text>
        </Flex>
      </Flex>
      <Stack>
        <IconCloudDemo />
      </Stack>
    </Stack>
  );
}
