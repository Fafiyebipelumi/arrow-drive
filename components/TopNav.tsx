"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FcMenu } from "react-icons/fc";

const TopNav = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null)

  const handleToggle = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (navRef.current) {
      if (isClick) {
        navRef.current.style.height = `${navRef.current.scrollHeight}px`
      } else {
        navRef.current.style.height = '0px'
      }
    }
  }, [isClick]);

  return (
    <>
      <Box bg={"black"} overflowX={'hidden'}>
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
                <Link href="/connect" className="text-white">
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
            <Box className="md:hidden flex items-center justify-center gap-2 cursor-pointer" onClick={handleToggle}>
              {/* <Button  className="text-white">
                Menu
              </Button> */}
              <FcMenu style={{color: '#ccc', fontSize: '15px'}} />
              <Text textTransform={'uppercase'} fontSize={'14px'} color={'#ccc'}>Menu</Text>
            </Box>
          </Flex>
        </Box>
        {isClick && (
          <Box ref={navRef} className={`md:hidden transition-all duration-500 ease-in-out transform ${isClick ? 'block opacity-100 scale-y-100 max-h-full' : 'max-h-0 opacity-0 scale-y-0'} origin-top`} style={{transformOrigin: 'top center'}}>
            <Box px={2} pt={3} pb={3} my={3} className="sm:px-3 space-y-4">
              <Link href="/" className="text-white text-sm block">
                Flow
              </Link>
              <Link href="/" className="text-white text-sm block">
                Media
              </Link>
              <Link href="/connect" className="text-white text-sm block">
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
