import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box margin={"60px"} overflowX={"hidden"}>
      <Box bg={"#1052FE"} w={["100%", "100%", "50%"]} paddingX={"20px"}>
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
          <Box width={'100%'}>
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
          <Box width={'100%'}>
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
          <Box marginTop={'20px'} >
            <Button bgColor={'#0AD18E'} color={'white'} fontWeight={'300'}>Search Agent Now</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
