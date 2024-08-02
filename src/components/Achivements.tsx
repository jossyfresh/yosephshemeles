import Marquee from "react-fast-marquee";
import { Flex, Stack, Text } from "@mantine/core";
import React from "react";
import { MarqueeDemo } from "./Marquee";

export default function Achivements() {
  return (
    <Stack w={"90%"} align="center" gap={70}>
      <Flex align={"center"} gap={12}>
        <Flex align={"center"}>
          <Text c={"#e6f1ff"} size="40px">
            Achivements
          </Text>
        </Flex>
      </Flex>
      <Marquee speed={50} direction="left">
        <Stack
          mx={40}
          w={300}
          h={300}
          bg={"dark"}
          style={{
            borderRadius: "10px",
          }}
        ></Stack>
        <Stack
          mx={40}
          w={300}
          h={300}
          bg={"dark"}
          style={{
            borderRadius: "10px",
          }}
        ></Stack>
        <Stack
          mx={40}
          w={300}
          h={300}
          bg={"dark"}
          style={{
            borderRadius: "10px",
          }}
        ></Stack>
        <Stack
          mx={40}
          w={300}
          h={300}
          bg={"dark"}
          style={{
            borderRadius: "10px",
          }}
        ></Stack>
      </Marquee>
    </Stack>
  );
}
