import { Avatar, AvatarBadge, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const page = () => {
  return (
    <Box marginTop={16}>
      <Box className="w-full bg-white shadow-md rounded-md my-8 flex items-center justify-evenly flex-col md:flex-row gap-8">
        <Box className="flex items-center flex-col justify-center gap-4">
          <Avatar
            name="Oluwapelumi Iseoluwa Fafiyebi"
            size={["lg", "xl", "2xl"]}
            bg={"#0AD18E"}
          />
          <Text fontSize={["xl", "xl", "2xl"]} fontWeight={"bolder"}>
            Oluwapelumi Iseoluwa Fafiyebi
          </Text>
          <Text fontSize={["lg", "xl", "xl"]}>Project Manager</Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            mb={8}
          >
            <Button bg={"#0AD18E"} color={"white"}>
              <FaPlus /> Follow
            </Button>
            <Button bg={"#0AD18E"} color={"white"}>
              <IoChatbubbles /> Chat
            </Button>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'} flexDirection={'column'} gap={10} mb={5}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={4}>
            <LuHome style={{fontSize: '20px'}} />
            <Text>
              Lives in <span>Banana Ireland, Lagos</span>
            </Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={4}>
            <HiOutlineBuildingOffice2 style={{fontSize: '20px'}} />
            <Text>
              Works at <span>Arrow Flow</span>
            </Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={4}>
            <IoLocationOutline style={{fontSize: '20px'}} />
            <Text>
              From <span className="text-[#1052FE]">Akure</span>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
