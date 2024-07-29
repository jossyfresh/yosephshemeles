"use client";
import { Stack, Flex, Text, Tabs } from "@mantine/core";
import React from "react";
import { TabsDemo } from "./Tabs";

export default function WorkHistory() {
  return (
    <Stack>
      <Flex gap={20} align={"center"} px={30}>
        <Flex align={"end"} gap={12}>
          <Flex>
            <Text c={"#64ffda"} size="20px">
              02.{" "}
              <span
                color="#e6f1ff"
                style={{
                  paddingLeft: "7px",
                  color: "#e6f1ff",
                  fontSize: "30px",
                }}
              >
                Where I've Worked
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
      <Stack py={30}>
        <TabsDemo />
      </Stack>
    </Stack>
  );
}
