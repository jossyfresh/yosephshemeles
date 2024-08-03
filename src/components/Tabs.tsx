"use client";
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import { Flex, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export function TabsDemo() {
  const [active, setActive] = useState(0);
  const tabs = [
    {
      title: "African To Sillcon Valley",
      value: "A2SV",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}
        >
          <Stack gap={5} px={4}>
            <Text size="22px" c={"#e6f1ff"}>
              Software Developer and Mentor{" "}
              <span
                style={{
                  color: "#64ffda",
                }}
              >
                <a href="https://a2sv.org" target="_blank">
                  @A2SV
                </a>
              </span>
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Dec 2022 - Present
            </Text>
          </Stack>
          <Stack w={"100%"} pl={20}>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20} pt={4}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Interend in as a software developer and mentor at A2SV, a
                  company that provides opportunities for African developers to
                  learn and grow in the tech industry.
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20} pt={4}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Participated in the development of a web-based platform for
                  community of A2SV
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Delivered lectures on data structures and algorithms,
                  improving participants&apos; understanding and application of
                  core concepts.
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Facilitated workshops and discussion sessions, fostering a
                  collaborative learning environment within the community.
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      ),
    },
    {
      title: "Eskalate LLC",
      value: "Eskalate",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}
        >
          <Stack gap={5} px={4}>
            <Text size="22px" c={"#e6f1ff"}>
              Software Engineering Intern{" "}
            </Text>
            <Text size="sm" c={"#64ffda"}>
              July 2023 - Present
            </Text>
          </Stack>
          <Stack w={"100%"} pl={20}>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Led a team of web developer to build a web-based platform for
                  interview preparation purpose
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Participated in the development of a web-based platform for
                  connceting afirca&apos;s talented developers with the
                  world&apos;s top tech companies
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Learned and worked in new technologies and tools to improve my
                  skills and knowledge in software development.
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Collaborated with team members to develop new features and
                  improve existing ones.
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      ),
    },
    {
      title: "Lela Tech",
      value: "Lela",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}
        >
          <Stack gap={5} px={4}>
            <Text size="22px" c={"#e6f1ff"}>
              Front-End Web Developer
            </Text>
            <Text size="sm" c={"#64ffda"}>
              June 2024 - Present
            </Text>
          </Stack>
          <Stack w={"100%"} pl={20}>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Participated in the development of a crypto currency wallet
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Collaborated with team members to develop new features and
                  improve existing ones.
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Learned and worked in new technologies and tools to improve my
                  skills and knowledge in software development.
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      ),
    },
    {
      title: "GDSC",
      value: "GDSC",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}
        >
          <Stack gap={5} px={4}>
            <Text
              size="22px"
              c={"#e6f1ff"}
              style={{
                lineHeight: "1.3",
              }}
            >
              Google Developer Students Club Web Dev Mentor{" "}
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Nov 2023 - May 2024
            </Text>
          </Stack>
          <Stack w={"100%"} pl={20}>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Gave Lectures on Web Development and React Library to 100+
                  students
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Also mentored students on how to build projects using React
                  library and other web technologies
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Gave advices to students on how to improve their skills and
                  how to get started in the tech industry
                </Text>
              </Stack>
            </Flex>
            <Flex gap={10} w={"100%"}>
              <Stack w={"4%"} h={20}>
                <Icon
                  icon="icon-park-solid:right-one"
                  style={{ color: "#64ffda" }}
                />
              </Stack>
              <Stack w={"96%"}>
                <Text c={"#a8b2d1"} size="sm">
                  Help a group of students to build a project using React for a
                  hackathon
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      ),
    },
  ];

  return (
    <div className="[perspective:1000px] relative b flex flex-row max-w-5xl items-start">
      <Tabs tabs={tabs} setactive={setActive} />
      <Stack py={20} px={30}>
        {tabs[active].content}
      </Stack>
    </div>
  );
}
