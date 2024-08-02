"use client";
import { Stack, Flex, Text, Image, Button } from "@mantine/core";
import { Link } from "react-scroll";
import React, { useRef, useState } from "react";

export default function Navbar() {
  return (
    <Flex
      px={50}
      py={30}
      w={"100%"}
      justify={"space-between"}
      align={"center"}
      style={{
        zIndex: 1000,
      }}
    >
      <Stack>
        <Image src={"/logo3.svg"} alt="" w={50} h={50} />
      </Stack>
      <Flex
        gap={50}
        align={"center"}
        style={{
          zIndex: 1000,
        }}
      >
        <Link to="/contact">
          <Flex gap={5}>
            <Text c={"#64ffda"} size={"xs"} style={{}}>
              01.
            </Text>
            <Text
              className="text-[#e6f1ff] hover:text-[#64ffda] hover:cursor-pointer"
              size={"14px"}
            >
              About
            </Text>
          </Flex>
        </Link>
        <Link to="/contact">
          <Flex gap={5}>
            <Text c={"#64ffda"} size={"xs"}>
              02.
            </Text>
            <Text
              className="text-[#e6f1ff] hover:text-[#64ffda] hover:cursor-pointer"
              size={"14px"}
            >
              Experience
            </Text>
          </Flex>
        </Link>
        <Link to="/contact">
          <Flex gap={5}>
            <Text c={"#64ffda"} size={"xs"}>
              03.
            </Text>
            <Text
              className="text-[#e6f1ff] hover:text-[#64ffda] hover:cursor-pointer"
              size={"14px"}
            >
              Projects
            </Text>
          </Flex>
        </Link>
        <Link to="#contact" smooth duration={100}>
          <Flex gap={5}>
            <Text size={"xs"} c={"#64ffda"}>
              04.
            </Text>
            <Text
              className="text-[#e6f1ff] hover:text-[#64ffda] hover:cursor-pointer"
              size={"14px"}
            >
              Contact
            </Text>
          </Flex>
        </Link>
        <Button
          h={40}
          variant="outline"
          c={"#64ffda"}
          style={{
            border: "1px solid #64ffda",
          }}
        >
          Resume
        </Button>
      </Flex>
    </Flex>
  );
}
