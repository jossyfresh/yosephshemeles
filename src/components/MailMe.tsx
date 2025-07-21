import React from "react";
import { Button, Flex, Stack, Text } from "@mantine/core";
import Link from "next/link";

export default function MailMe() {
  return (
    <Stack align="center" gap={40} id="contact" py={120}>
      <Flex>
        <Flex>
          <Text c={"#64ffda"} size="20px">
            04.{" "}
            <span
              color="#64ffda"
              style={{
                paddingLeft: "7px",
                fontSize: "20px",
              }}>
              What&apos;s Next?
            </span>
          </Text>
        </Flex>
      </Flex>
      <Stack align="center">
        <Text c={"#ccd6f6"} size="45px" fw={800}>
          Get In Touch
        </Text>
      </Stack>
      <Stack align="center">
        <Text
          w={"50%"}
          c={"#a8b2d1"}
          style={{
            textAlign: "center",
          }}>
          My inbox is always open. Whether you have a question or just want to
          say hello, I&apos;ll try my best to get back to you! Feel free to mail
          me about any relevant job updates.
        </Text>
      </Stack>
      <Link href={"mailto:shemelesyoseph1994@gmail.com"}>
        <Button
          h={50}
          variant="outline"
          c={"#64ffda"}
          style={{
            fontSize: "18px",
            border: "1px solid #64ffda",
          }}>
          Mail Me
        </Button>
      </Link>
    </Stack>
  );
}
