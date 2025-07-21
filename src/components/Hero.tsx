import React from "react";
import { Stack, Text, Button } from "@mantine/core";
import Link from "next/link";

export default function Hero() {
  return (
    <Stack gap={50}>
      <Stack gap={30}>
        <Text c={"#64ffda"} size="20px" className="font-SFMonoRegular">
          Hi, I&apos;m
        </Text>
        <Text c={"#ccd6f6"} size="50px" fw={800}>
          Yoseph Shemeles
        </Text>
      </Stack>
      <Stack>
        <Text
          w={"71%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}>
          A passionate Software Engineer who loves building, learning, and
          solving real-world problems. I&apos;m especially focused on{" "}
          <b style={{ color: "#64ffda" }}>Full-Stack Web Development</b> and{" "}
          <b style={{ color: "#64ffda" }}>AI Automation</b>, and I enjoy turning
          ideas into practical, user-friendly products.
        </Text>
        <Text
          w={"70%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}>
          I thrive on fast learning, shipping real projects, and working on
          things that matter.
        </Text>
      </Stack>
      <Link href={"https://www.upwork.com/freelancers/~0102e0b85eb469f383"}>
        <Button
          h={60}
          variant="outline"
          w={160}
          c={"#64ffda"}
          style={{
            border: "1px solid #64ffda",
          }}>
          Hire Me
        </Button>
      </Link>
    </Stack>
  );
}
