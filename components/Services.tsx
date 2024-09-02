import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaHandshakeAngle } from "react-icons/fa6";
import { VscWindow } from "react-icons/vsc";

const Services = () => {
  return (
    <Box>
      <Text
        color={"#1052FE"}
        className="md:text-[24px] text-[16px]"
        textAlign={"center"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        mt={5}
      >
        Services
      </Text>
      <Box px={4} mt={10}>
        <Flex className="items-center mt-7 md:justify-center justify-center flex-col md:flex-row">
          <Box
            marginX={10}
            marginY={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box w={40} h={40} borderRadius={"50%"} bg={"#1052FE"} display={'flex'} alignItems={'center'} justifyContent={'center'}><VscWindow style={{color: '#fff', fontSize: '2rem'}} /></Box>
            <Text marginTop={10} className="text-[14px] md:text-[18px]">
              Arrow Flow
            </Text>
            <Text className="text-[12px] md:text-[14px] text-center">
              For Money Transfer, Bill payments, Airtime, Data subscription...
            </Text>
          </Box>
          <Box
            marginX={10}
            marginY={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box w={40} h={40} borderRadius={"50%"} bg={"#1052FE"} display={'flex'} alignItems={'center'} justifyContent={'center'}><BsFillCameraVideoFill style={{color: '#fff', fontSize: '2rem' }} /></Box>
            <Text marginTop={10} className="text-[14px] md:text-[18px]">
              Arrow Media
            </Text>
            <Text className="text-[14px] md:text-[14px] text-center">
              For favourite genres of music/movie
            </Text>
          </Box>
          <Box
            marginX={10}
            marginY={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box w={40} h={40} borderRadius={"50%"} bg={"#1052FE"} display={'flex'} alignItems={'center'} justifyContent={'center'}><FaHandshakeAngle style={{color: '#fff', fontSize: '2rem'}} /></Box>
            <Text marginTop={10} className="text-[14px] md:text-[18px]">
              Arrow Connect
            </Text>
            <Text className="text-[14px] md:text-[14px] text-center">
              Meet Producers and Business Experts, share ideas and develop
              business relationships
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Services;
