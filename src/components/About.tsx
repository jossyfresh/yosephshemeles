import { Icon } from "@iconify/react/dist/iconify.js";
import { Flex, SimpleGrid, Stack, Text } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Stack gap={50}>
      <Flex gap={20} align={"center"}>
        <Flex align={"end"} gap={12}>
          <Flex gap={0}>
            <Text c={"#64ffda"} size="20px">
              01.{" "}
              <span
                color="#e6f1ff"
                style={{
                  color: "#e6f1ff",
                  fontSize: "24px",
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
          Hello! I&apos;m Yoseph Shemeles, from Addis Ababa Ethiopia, The
          capital City of Africa Union
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
          I am pursuing my Bachelors from Addis Ababa Science and Technology
          University, in Software Engineering (2021-2025) my current GPA is 3.5
          out of 4.
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
        <SimpleGrid py={20} cols={2} w={"70%"} px={0}>
          <Flex gap={10}>
            {" "}
            <Icon
              icon="icon-park-solid:right-one"
              style={{ color: "#64ffda" }}
            />
            <Text size="sm" c={"#64ffda"}>
              Coding
            </Text>
          </Flex>
          <Flex gap={10}>
            <Icon
              icon="icon-park-solid:right-one"
              style={{ color: "#64ffda" }}
            />
            <Text size="sm" c={"#64ffda"}>
              Problem Solving
            </Text>
          </Flex>
          <Flex gap={10}>
            <Icon
              icon="icon-park-solid:right-one"
              style={{ color: "#64ffda" }}
            />
            <Text size="sm" c={"#64ffda"}>
              Competitive Programming
            </Text>
          </Flex>

          <Flex gap={10}>
            <Icon
              icon="icon-park-solid:right-one"
              style={{ color: "#64ffda" }}
            />
            <Text size="sm" c={"#64ffda"}>
              Mentoring
            </Text>
          </Flex>
          <Flex gap={10}>
            <Icon
              icon="icon-park-solid:right-one"
              style={{ color: "#64ffda" }}
            />
            <Text size="sm" c={"#64ffda"}>
              Team Management
            </Text>
          </Flex>
          <Flex gap={10}>
            <Icon
              icon="icon-park-solid:right-one"
              style={{ color: "#64ffda" }}
            />
            <Text size="sm" c={"#64ffda"}>
              Leadership
            </Text>
          </Flex>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
