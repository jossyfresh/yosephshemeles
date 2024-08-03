import { Stack } from "@mantine/core";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <Stack
      visibleFrom="md"
      px={70}
      w={0}
      gap={50}
      h={"100vh"}
      justify="end"
      style={{
        position: "fixed",
      }}
    >
      <Stack align="center" gap={50}>
        <Stack>
          <Link href={"https://github.com/jossyfresh/"}>
            <Icon
              className="hover:-translate-y-1"
              icon="ant-design:github-outlined"
              style={{
                color: "#64ffda",
                fontSize: "30px",
                transition: "ease-in-out 0.2s",
              }}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/yosephshemeles/"}>
            <Icon
              className="hover:-translate-y-1"
              icon="jam:linkedin"
              style={{
                color: "#64ffda",
                fontSize: "30px",
                transition: "ease-in-out 0.2s",
              }}
            />
          </Link>
          <Link href={"https://t.me/My_chorus"}>
            <Icon
              className="hover:-translate-y-1"
              icon="mingcute:telegram-fill"
              style={{
                color: "#64ffda",
                fontSize: "30px",
                transition: "ease-in-out 0.2s",
              }}
            />
          </Link>
          <Link href={""}>
            <Icon
              className="hover:-translate-y-1"
              icon="hugeicons:instagram"
              style={{
                color: "#64ffda",
                fontSize: "30px",
                transition: "ease-in-out 0.2s",
              }}
            />
          </Link>
        </Stack>
        <Stack
          align="center"
          h={200}
          w={1}
          style={{
            border: "1px solid #64ffda",
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
}
