"use client";
import {
  Box,
  useColorMode,
  useColorModeValue,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Dashboard from "./screens/dashboard/page";
import Leads from "./screens/leads/page";
import Users from "./screens/users/page";
import Meetings from "./screens/meetings/page";
import Bookings from "@/app/bookings/page";
import Calendar from "./screens/calendar/page";
import Conversation from "./screens/conversation/page";
import Reports from "./screens/reports/page";
import Contacts from "./screens/contacts/page";
import Payments from "./screens/payments/page";
import {
  Smile,
  Target,
  CircleUserRound,
  User,
  Headset,
  Star,
  CalendarDays,
  MessageSquare,
  Proportions,
  Wallet,
  Phone,
  Airplay,
  Bell,
  CirclePower,
  Settings,
} from "lucide-react";
import React from "react";
export default function MainScreen() {
  const [showScreen, setShowScreen] = useState("Dashboard");
  const sidebars = [
    "Dashboard",
    "Leads",
    "Users",
    "Meetings",
    "Bookings",
    "Calendar",
    "Conversation",
    "Reports",
    "Contacts",
    "Payments",
    "Medias",
  ];

  const iconMap = {
    Dashboard: <Target size={20} />,
    Leads: <User size={20} />,
    Users: <Headset size={20} />,
    Meetings: <Star size={20} />,
    Bookings: <CalendarDays size={20} />,
    Calendar: <MessageSquare size={20} />,
    Conversation: <Proportions size={20} />,
    Reports: <Wallet size={20} />,
    Contacts: <Phone size={20} />,
    Payments: <Airplay size={20} />,
    Medias: <Airplay size={20} />,
  };

  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={"#fff"} minH={"100vh"} width={"100vw"} overflow={"hidden"}>
      <HStack
        alignItems={"stretch"}
        width={"100vw"}
        spacing={0}
        position={"absolute"}
        top={0}
        left={0}
      >
        {/* Sidebar */}
        <Box
          minW={"300px"}
          height={"100vh"}
          bg={"gray.100"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          {/* Logo and Title at Top */}
          <VStack mb={8} align={"center"} justify={"center"} p={4}>
            <HStack gap={"8px"}>
              <Smile color="tomato" size={48} />
              <Text fontWeight={"bold"} fontSize={"2rem"} color={"gray.800"}>
                REVO
              </Text>
            </HStack>
          </VStack>
          {/* USER NAME AND LOGO */}
          <VStack mx={4} p={2}>
            <HStack justifyContent={"space-between"} width={"100%"}>
              <CircleUserRound size={32} color="gray" />
              <HStack>
                <Settings
                  size={24}
                  color="gray"
                  style={{ cursor: "pointer" }}
                />
                <Bell size={24} color="gray" style={{ cursor: "pointer" }} />
              </HStack>
            </HStack>
            <Text color={"#000"} alignSelf={"flex-start"} fontWeight={"600"}>
              User Name
            </Text>
          </VStack>
          {/* Sidebar Buttons */}
          <VStack align={"stretch"} width={"100%"} pl={4}>
            {sidebars.map((item, index) => (
              <HStack
                key={index}
                spacing={4}
                width={"100%"}
                onClick={() => setShowScreen(item)}
                backgroundColor={showScreen === item ? "#fff" : "gray.100"}
                cursor={"pointer"}
                paddingX={"12px"}
                paddingY={"8px"}
                borderLeftRadius={12}
              >
                {React.cloneElement(iconMap[item], {
                  color: showScreen === item ? "#D0837F" : "gray",
                })}
                <Text
                  color={showScreen === item ? "#D0837F" : "gray.800"}
                  fontSize={16}
                  fontWeight={600}
                >
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
          <HStack pl={4} mx={"12px"} my={"8px"} py={"8px"}>
            <CirclePower size={20} color="gray" />
            <Text color={"gray.800"} fontSize={16} fontWeight={600}>
              Logout
            </Text>
          </HStack>
        </Box>

        {/* Main content */}
        <Box flex={1} height="100vh" overflowY="auto" p={0} m={0}>
          {showScreen === "Dashboard" && <Dashboard />}
          {showScreen === "Leads" && <Leads />}
          {showScreen === "Users" && <Users />}
          {showScreen === "Meetings" && <Meetings />}
          {showScreen === "Bookings" && <Bookings />}
          {showScreen === "Calendars" && <Calendar />}
          {showScreen === "Conversation" && <Conversation />}
          {showScreen === "Reports" && <Reports />}
          {showScreen === "Contacts" && <Contacts />}
          {showScreen === "Payments" && <Payments />}
        </Box>
      </HStack>
    </Box>
  );
}
