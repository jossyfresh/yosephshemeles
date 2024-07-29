import { Flex, Stack, Text } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Stack gap={50}>
      <Flex gap={20} align={"center"}>
        <Flex align={"end"} gap={12}>
          <Flex>
            <Text c={"#64ffda"} size="20px">
              01.{" "}
              <span
                color="#e6f1ff"
                style={{
                  paddingLeft: "7px",
                  color: "#e6f1ff",
                  fontSize: "30px",
                }}
              >
                About Me
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
      {/* content */}
      <Stack>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}
        >
          Hello! I'm Yashita Namdeo, from Indore, also known as Mini Mumbai and
          the Cleanest City of India.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}
        >
          I am a creative, time punctual, dedicated, goal-oriented individual
          with decent moral Values and Ethicates along with a high-energy level,
          honed communication skills, strong organizational skills, and
          meticulous attention to detail.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}
        >
          I am pursuing my Bachelors from SVVV, Indore in Computer Science and
          Engineering (2018-2022) my current GPA is 3.7 out of 4.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}
        >
          I am a member of Developer Student Club - SVVV and have also been
          awarded 75% Merit Scholarship(Top 10%) by my college.
        </Text>
        <Text
          w={"57%"}
          c={"#8892b0"}
          size="18px"
          fw={400}
          style={{
            lineHeight: "1.5",
          }}
        >
          Here are a few of the other activities that I love to do!
        </Text>
      </Stack>
    </Stack>
  );
}
