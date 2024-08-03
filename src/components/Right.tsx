import { Stack, Text } from "@mantine/core";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function RightSidebar() {
  return (
    <Stack
      visibleFrom="md"
      px={50}
      w={0}
      h={"100vh"}
      justify="end"
      style={{
        position: "fixed",
        right: 0,
      }}
    >
      <Stack align="center" gap={200}>
        <Stack
          style={{
            // make it vertical
            transform: "rotate(90deg)",
          }}
        >
          <Link href={"mailto:shemelesyoseph1994@gmail.com"}>
            <Text size="24px" c={"#64ffda"}>
              shemelesyoseph1994@gmail.com
            </Text>
          </Link>
        </Stack>
        <Stack
          align="center"
          h={150}
          w={1}
          style={{
            border: "1px solid #64ffda",
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
}
