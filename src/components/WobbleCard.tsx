"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import { Stack, Flex, Text } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";

export function WobbleCardDemo() {
  return (
    <WobbleCard>
      <div className=""></div>
    </WobbleCard>
  );
}
