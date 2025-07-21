"use client";
import { Stack, Flex, Text, Tabs } from "@mantine/core";
import React from "react";
import { TabsDemo } from "./Tabs";

export default function WorkHistory() {
  return (
    <Stack id="Experience" py={120}>
      <Flex gap={20} align={"center"} px={30}>
        <Flex align={"end"} gap={12}>
          <Flex gap={0}>
            <Text c={"#64ffda"} size="20px">
              02.{" "}
              <span
                color="#e6f1ff"
                style={{
                  color: "#e6f1ff",
                  fontSize: "24px",
                }}>
                Where I&apos;ve Worked
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
      <Stack py={30}>
        <TabsDemo />
      </Stack>
    </Stack>
  );
}
