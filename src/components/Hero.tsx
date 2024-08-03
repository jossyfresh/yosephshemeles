import React from "react";
import { Stack, Text, Button } from "@mantine/core";
import Link from "next/link";

export default function Hero() {
  return (
    <Stack gap={50}>
      <Stack gap={30}>
        <Text c={"#64ffda"} size="20px" className="font-SFMonoRegular">
          Hello, my name is
        </Text>
        <Text c={"#ccd6f6"} size="50px" fw={800}>
          Yoseph Shemeles
        </Text>
        <Text c={"#8892b0"} size="50px" fw={800}>
          I love exploring new things!
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
          }}
        >
          I&apos;m a Final Year Software Engineering Student at Addis Ababa
          Science and Technology University (AASTU) Addis Ababa, Ethiopia.
          Primarily interested in Full-Stack Web Development and ML.
        </Text>
        <Text
          w={"70%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}
        >
          I enjoy learning new skills and implementing them in real life!
        </Text>
      </Stack>
      <Link href={"mailto:shemelesyoseph1994@gmail.com"}>
        <Button
          h={60}
          variant="outline"
          w={160}
          c={"#64ffda"}
          style={{
            border: "1px solid #64ffda",
          }}
        >
          Get In Touch
        </Button>
      </Link>
    </Stack>
  );
}
