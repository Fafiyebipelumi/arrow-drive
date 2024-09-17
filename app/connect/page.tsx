"use client";

import { Avatar, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Data } from "../data";
import Link from "next/link";
import LoadingIndicator from "@/components/LoadingIndicator";
import Image from "next/image";

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }

    handleRouteChange();
    return;
  }, [pathname])

  return (
    <>
      {loading && <LoadingIndicator />}
      <Box>
        <Box marginY={"30px"}>
          <Text
            fontSize={["21px", "25px", "30px"]}
            color={"#1052FE"}
            textAlign={"center"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            Connect with others.
          </Text>
          <Text fontSize={["14px", "15px", "18px"]} textAlign={"center"}>
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
            <Link
              href={`/details`}
              className="shadow-lg p-4 bg-white w-[20rem] h-[10rem] rounded-sm my-9"
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={"25px"}
              >
                {info.image ? <Image src={info.image} alt="" width={60} height={60} className="w-14 h-14 rounded-[50%] object-cover flex items-center justify-center" /> : <Avatar
                  name={`${info.firstName} ${info.lastName}`}
                  size={["md", "lg", "lg"]}
                  bg={"#1052FE"}
                />}
                <Box>
                  <Text fontSize={["18px", "20px", "20px"]} fontWeight={"bold"}>
                    {info.firstName} {info.lastName}
                  </Text>
                  <Text fontSize={["12px", "12px", "15px"]}>
                    {info.occupation}
                  </Text>
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
                  <FaFacebookF style={{ color: "#1052FE" }} />
                </Box>
                <Box cursor={"pointer"}>
                  <FaInstagram style={{ color: "#1052FE" }} />
                </Box>
                <Box cursor={"pointer"}>
                  <FaXTwitter style={{ color: "#1052FE" }} />
                </Box>
                <Box cursor={"pointer"}>
                  <FaDiscord style={{ color: "#1052FE" }} />
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default page;
