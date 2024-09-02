import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box>
      <Box
        width={"100%"}
        px={4}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bottom={0}
      >
        <Flex
        //   bg="#000"
        //   p={"16"}
        //   justifyContent={"space-evenly"}
        //   alignItems={"flex-start"}
        //   mt={"24"}
        //   color={"#fff"}
        //   px={"8"}
          className="w-screen bg-black p-16 md:justify-evenly flex-col md:flex-row items-start mt-24 text-white px-8"
        >
          <Box paddingY={10}>
            <Link href="/" className="text-white md:text-[32px] text-[20px] font-extrabold">
              ARROW<span className="text-[#0AD18E]">DRIVE</span>
            </Link>
            <Text className="md:text-[16px] text-[9px] md:w-[80%] w-full">
              With you in my, our products are designed to give you an easy and
              better access to the world around you by maintaining your daily
              cost of living.
            </Text>
            <Box
              marginTop={15}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Text paddingRight={5}>Icon</Text>
              <Text paddingRight={5}>Icon</Text>
              <Text paddingRight={5}>Icon</Text>
            </Box>
          </Box>
          <Box className="flex md:items-start md:justify-evenly flex-col md:flex-row items-start justify-start">
            <Box className="md:px-10 px-0">
              <Heading fontSize={'24px'}>Information</Heading>
              <Text className="text-[12px] py-2">About</Text>
              <Text className="text-[12px] py-2">Services</Text>
              <Text className="text-[12px] py-2">Terms and Conditions</Text>
              <Text className="text-[12px] py-2">Best Price Guarantee</Text>
              <Text className="text-[12px] py-2">Privacy & Cookies Policy</Text>
            </Box>
            <Box>
              <Heading fontSize={'24px'}>Customer Support</Heading>
              <Text className="text-[12px] py-2">FAQs</Text>
              <Text className="text-[12px] py-2">Payment Option</Text>
              <Text className="text-[12px] py-2">Booking Tips</Text>
              <Text className="text-[12px] py-2">How it works</Text>
              <Text className="text-[12px] py-2">Contact Us</Text>
            </Box>
            <Box className="md:px-10 px-0" py-2>
              <Heading fontSize={'24px'}>Have a Question?</Heading>
              <Text className="text-[12px] py-2">Unit 5, SPEZ, Behind SEET, FUTA, Akure</Text>
              <Text className="text-[12px] py-2">+234 703 423 6635</Text>
              <Text className="text-[12px] py-2">WhatsApp</Text>
              <Text className="text-[12px] py-2">consult@jay25inteserve.com</Text>
            </Box>
          </Box>
          <Box className="md:hidden block text-center mt-12 md:mt-0 text-sm">
            <small>Copyright &copy;2024. All rights reserved | This is a preview Copy of the ongoing ArrowDrive project<br/> by JAY25InteServe</small>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
