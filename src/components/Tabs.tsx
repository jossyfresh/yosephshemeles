"use client";
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import { Stack, Text } from "@mantine/core";

export function TabsDemo() {
  const tabs = [
    {
      title: "African To Sillcon Valley",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
        </div>
      ),
    },
    {
      title: "Eskalate LLC",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Lela Tech",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: "GDSC",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className=" relative b flex flex-row max-w-5xl items-start">
      <Tabs tabs={tabs} />
      <Stack py={30} px={30}>
        <Stack
          w={500}
          h={400}
          bg={"#172a45"}
          style={{
            borderRadius: "10px",
          }}
        ></Stack>
      </Stack>
    </div>
  );
}
