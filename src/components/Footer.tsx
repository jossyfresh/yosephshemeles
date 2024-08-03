import { Icon } from "@iconify/react/dist/iconify.js";
import { Flex, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Stack pb={10} gap={5} align="center">
      <Stack>
        <Link href="/">
          <Text className="text-[#a8b2d1] hover:text-[#64ffda]">
            Built by Yoseph Shemeles
          </Text>
        </Link>
      </Stack>
      <Flex gap={14}>
        <Link href={"https://github.com/jossyfresh/"}>
          <Icon
            icon="ant-design:github-outlined"
            style={{
              color: "#64ffda",

              fontSize: "25px",
            }}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/yosephshemeles/"}>
          <Icon
            icon="jam:linkedin"
            style={{
              color: "#64ffda",
              fontSize: "25px",
            }}
          />
        </Link>
        <Link href={"https://t.me/My_chorus"}>
          <Icon
            icon="mingcute:telegram-fill"
            style={{
              color: "#64ffda",
              fontSize: "25px",
            }}
          />
        </Link>
        <Icon
          icon="hugeicons:instagram"
          style={{
            color: "#64ffda",
            fontSize: "25px",
          }}
        />
      </Flex>
    </Stack>
  );
}
