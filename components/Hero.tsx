"use client";

import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box className="bg-hero-image bg-repeat bg-cover bg-center w-full h-screen">
      <motion.div
      initial={{y: "100vh"}}
      animate={{y: 0}}
      transition={{type: "spring", stifness: 100, damping: 15, duration: 1}}
      >
        <Box overflowX={"hidden"} w={["100%", "100%", "50%"]}>
          <Box bg={"#1052FE"} paddingX={"20px"} margin={"60px"}>
            <Text
              textAlign={"start"}
              color={"white"}
              fontWeight={"bold"}
              paddingTop={"40px"}
            >
              Make your trip
            </Text>
            <Flex
              alignItems={"center"}
              flexDirection={"column"}
              gap={"20px"}
              paddingY={"40px"}
            >
              <Box width={"100%"}>
                <FormLabel
                  textTransform={"uppercase"}
                  color={"#fff"}
                  fontSize={"12px"}
                >
                  Pick-up Location
                </FormLabel>
                <Input
                  type="text"
                  placeholder="City, Airport, Station, etc"
                  color={"#fff"}
                  fontSize={"12px"}
                  outline={"none"}
                />
              </Box>
              <Box width={"100%"}>
                <FormLabel
                  textTransform={"uppercase"}
                  color={"#fff"}
                  fontSize={"12px"}
                >
                  Drop-off Location
                </FormLabel>
                <Input
                  type="text"
                  placeholder="City, Airport, Station, etc"
                  color={"#fff"}
                  fontSize={"12px"}
                  outline={"none"}
                />
              </Box>
              <Box width={"100%"}>
                <FormLabel
                  textTransform={"uppercase"}
                  color={"#fff"}
                  fontSize={"12px"}
                >
                  Pick-up time
                </FormLabel>
                <Input
                  type="time"
                  color={"#fff"}
                  fontSize={"12px"}
                  outline={"none"}
                />
              </Box>
              <Box marginTop={"20px"}>
                <Button bgColor={"#0AD18E"} color={"white"} fontWeight={"300"}>
                  Search Agent Now
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
