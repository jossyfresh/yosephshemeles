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
      title: "African to Silicon Valley (A2SV)",
      value: "A2SV",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}>
          <Stack gap={5} px={4}>
            <Text style={{ lineHeight: "1.3" }} size="22px" c={"#e6f1ff"}>
              Software Developer & Head of Education{" "}
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Dec 2022 - May 2025
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
                  Led A2SV’s education track by organizing and conducting
                  technical interviews, mock sessions, and DSA mentorship for
                  dozens of students.
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
                  Mentored students in advanced algorithms and competitive
                  programming to prepare for FAANG-style interviews.
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
                  Built and maintained internal tools used by students and
                  mentors using React, Node.js, and Firebase.
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
                  Facilitated live coding sessions and mock interviews, focusing
                  on real-time problem-solving and communication.
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
                  <b>Tech Stack:</b> Python, JavaScript, React, Firebase, Git,
                  Data Structures & Algorithms
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
          }}>
          <Stack gap={5} px={4}>
            <Text size="22px" c={"#e6f1ff"}>
              Software Engineering Intern
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Apr 2023 – Nov 2023
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
                  Developed and maintained frontend components for Eskalate’s
                  platform using React.js, Tailwind CSS, and TypeScript.
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
                  Collaborated in a cross-functional agile team with designers
                  and backend developers to implement new features.
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
                  Wrote clean, modular code, and optimized UI for mobile and
                  desktop platforms.
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
                  Integrated REST APIs, handled state with React Query, and
                  improved load times across the app.
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
                  <b>Tech Stack:</b> React, Tailwind CSS, TypeScript, React
                  Query, REST APIs
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      ),
    },
    {
      title: "Endubis Blockchain Solution",
      value: "Endubis",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}>
          <Stack gap={5} px={4}>
            <Text size="22px" c={"#e6f1ff"}>
              Full-Stack & Web3 Developer
            </Text>
            <Text size="sm" c={"#64ffda"}>
              June 2024 - May 2025
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
                  Designed and developed a Telegram bot integrated with Endubis
                  Wallet to enable blockchain-based transactions, user
                  onboarding, and verification.
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
                  Built the backend using Node.js, handling wallet transactions,
                  smart contract interactions, and Cardano blockchain
                  integration via Web3 libraries.
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
                  Built lightweight admin dashboards and assisted with frontend
                  improvements using React.
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
                  Collaborated closely with the blockchain engineering team to
                  integrate with Cardano nodes and test smart contract behavior
                  in staging environments.
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
                  <b>Tech Stack:</b> Node.js, Express, Web3.js, Cardano
                  Blockchain, Telegram Bot API, React, REST APIs
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      ),
    },
    {
      title: "Freelancer (Upwork)",
      value: "Freelance",
      content: (
        <Stack
          w={500}
          h={400}
          px={10}
          gap={30}
          style={{
            borderRadius: "10px",
          }}>
          <Stack gap={5} px={4}>
            <Text style={{ lineHeight: "1.3" }} size="22px" c={"#e6f1ff"}>
              Full-Stack & Independent Software Engineer
            </Text>
            <Text size="sm" c={"#64ffda"}>
              2022 – Present
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
                  Top Rated freelancer on Upwork with 10+ successful projects
                  completed for clients across the US, Canada, Germany, and
                  more.
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
                  Delivered high-quality, scalable full-stack solutions using
                  React, Next.js, Node.js, Express, Laravel, .NET, and MongoDB.
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
                  Built and deployed RESTful APIs, admin dashboards,
                  authentication flows, and mobile-responsive UIs.
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
                  Maintained excellent client satisfaction ratings and built
                  long-term relationships by delivering clean, maintainable code
                  and consistent communication.
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
                  <b>Tech Stack:</b> JavaScript, React, Node.js, Express, .NET,
                  Laravel, Svelte, REST APIs, Git, Figma
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
