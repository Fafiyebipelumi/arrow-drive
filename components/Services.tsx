import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Box>
        <Text color={'#1052FE'} className="md:text-[24px] text-[16px]" textAlign={'center'} fontWeight={'bold'} textTransform={'uppercase'}>Services</Text>
      <Box width={"100%"} px={4}>
        <Flex className="items-center md:justify-center justify-center flex-col md:flex-row">
          <Box margin={10} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Box w={40} h={40} borderRadius={'50%'} bg={'#1052FE'} />
            <Text marginTop={10} className="text-[10px] md:text-[18px]">Arrow Flow</Text>
            <Text className="text-[14px] md:text-[16px]">
              For Money Transfer, Bill payments, Airtime, Data subscription...
            </Text>
          </Box>
          <Box margin={10} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Box w={40} h={40} borderRadius={'50%'} bg={'#1052FE'} />
            <Text marginTop={10} className="text-[10px] md:text-[18px]">Arrow Media</Text>
            <Text className="text-[14px] md:text-[16px]">For favourite genres of music/movie</Text>
          </Box>
          <Box margin={10} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Box w={40} h={40} borderRadius={'50%'} bg={'#1052FE'}  />
            <Text marginTop={10} className="text-[10px] md:text-[18px]">Arrow Connect</Text>
            <Text className="text-[14px] md:text-[16px]">
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
