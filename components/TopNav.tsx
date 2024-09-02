"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const TopNav = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleToggle = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <Box bg={"black"}>
        <Box marginX={"auto"} px={4} className="sm:px-6 lg:px-8">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            height={16}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box flexShrink={0}>
                <Link href="/" className="text-white font-extrabold">
                  ARROW<span className="text-[#0AD18E]">DRIVE</span>
                </Link>
              </Box>
            </Box>
            <Box className="hidden md:block">
              <Flex className="flex items-center space-x-4">
                <Link href="/" className="text-white">
                  Flow
                </Link>
                <Link href="/" className="text-white">
                  Media
                </Link>
                <Link href="/" className="text-white">
                  Connect
                </Link>
                <Link href="/" className="text-white">
                  Settings
                </Link>
                <Link href="/" className="text-white">
                  Changelog
                </Link>
                <Link href="/" className="text-white">
                  Report Issue
                </Link>
              </Flex>
            </Box>
            <Box className="md:hidden flex items-center">
              <Button onClick={handleToggle} className="text-white">
                Menu
              </Button>
            </Box>
          </Flex>
        </Box>
        {isClick && (
          <Box className="md:hidden">
            <Box px={2} pt={3} pb={3} my={3} className="sm:px-3 space-y-4">
              <Link href="/" className="text-white text-sm block">
                Flow
              </Link>
              <Link href="/" className="text-white text-sm block">
                Media
              </Link>
              <Link href="/" className="text-white text-sm block">
                Connect
              </Link>
              <Link href="/" className="text-white text-sm block">
                Settings
              </Link>
              <Link href="/" className="text-white text-sm block">
                Changelog
              </Link>
              <Link href="/" className="text-white text-sm block">
                Report Issue
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </>
    // https://www.youtube.com/watch?v=pxxthSFvXFA
  );
};

export default TopNav;
