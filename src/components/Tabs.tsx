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
                @A2SV
              </span>
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Dec 2022 - Present
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
                  Informed how MUNs enhance - Negotiation, Diplomacy,
                  Leadership, etc. for increasing the sales of the
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
                  Promoted IMUN Online Conferences in different
                  schools/universities and got 10+ registrations.
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
                  Promoted IMUN Online Conferences in different
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
                  Promoted IMUN Online Conferences in different
                  schools/universities
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
              Software Developer and Mentor{" "}
              <span
                style={{
                  color: "#64ffda",
                }}
              >
                @A2SV
              </span>
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Dec 2022 - Present
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
                  Informed how MUNs enhance - Negotiation, Diplomacy,
                  Leadership, etc. for increasing the sales of the
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
                  Promoted IMUN Online Conferences in different
                  schools/universities and got 10+ registrations.
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
                  Promoted IMUN Online Conferences in different
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
                  Promoted IMUN Online Conferences in different
                  schools/universities
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
              Software Developer and Mentor{" "}
              <span
                style={{
                  color: "#64ffda",
                }}
              >
                @A2SV
              </span>
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Dec 2022 - Present
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
                  Informed how MUNs enhance - Negotiation, Diplomacy,
                  Leadership, etc. for increasing the sales of the
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
                  Promoted IMUN Online Conferences in different
                  schools/universities and got 10+ registrations.
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
                  Promoted IMUN Online Conferences in different
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
                  Promoted IMUN Online Conferences in different
                  schools/universities
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
            <Text size="22px" c={"#e6f1ff"}>
              Software Developer and Mentor{" "}
              <span
                style={{
                  color: "#64ffda",
                }}
              >
                @A2SV
              </span>
            </Text>
            <Text size="sm" c={"#64ffda"}>
              Dec 2022 - Present
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
                  Informed how MUNs enhance - Negotiation, Diplomacy,
                  Leadership, etc. for increasing the sales of the
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
                  Promoted IMUN Online Conferences in different
                  schools/universities and got 10+ registrations.
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
                  Promoted IMUN Online Conferences in different
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
                  Promoted IMUN Online Conferences in different schools/u
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
