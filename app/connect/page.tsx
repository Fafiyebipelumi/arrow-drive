import { Avatar, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Data } from "../data";
import Link from "next/link";

const page = () => {
  return (
    <Box>
      <Box marginY={"30px"}>
        <Text
          fontSize={["18px", "20px", "30px"]}
          color={"#1052FE"}
          textAlign={"center"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Connect with others.
        </Text>
        <Text fontSize={["10px", "12px", "15px"]} textAlign={"center"}>
          This is a meeting room where you can connect professional to seek
          consultation in different fields of specialization.
        </Text>
      </Box>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        gap={"18px"}
        flexWrap={"wrap"}
        marginTop={"40px"}
      >
        {Data.map((info) => (
          <Link href={`/details`} className="shadow-lg p-4 bg-white w-[20rem] h-[10rem] rounded-sm my-9">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"25px"}
            >
              <Avatar
                name={`${info.firstName} ${info.lastName}`}
                size={["sm", "md", "md"]}
                bg={"#1052FE"}
              />
              <Box>
                <Text fontSize={["18px", "20px", "20px"]} fontWeight={"bold"}>
                  {info.firstName} {info.lastName}
                </Text>
                <Text fontSize={["10px", "12px", "15px"]}>{info.occupation}</Text>
                {/*  */}
              </Box>
            </Box>
            <Box
              marginTop={50}
              display={"flex"}
              alignItems={"center"}
              // gap={'20px'}
              height={"10px"}
              width={"200px"}
              mx={"auto"}
              justifyContent={"space-evenly"}
            >
              <Box cursor={"pointer"}>
                <FaFacebookF style={{color: '#1052FE'}} />
              </Box>
              <Box cursor={"pointer"}>
                <FaInstagram style={{color: '#1052FE'}} />
              </Box>
              <Box cursor={"pointer"}>
                <FaXTwitter style={{color: '#1052FE'}} />
              </Box>
              <Box cursor={"pointer"}>
                <FaDiscord style={{color: '#1052FE'}} />
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default page;
