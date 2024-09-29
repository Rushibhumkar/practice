import { Flex, Box, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Box flex={1} backgroundColor={"pink"}>
      <Flex
        height={"115px"}
        width={"100%"}
        backgroundColor={"gray.100"}
        alignItems={"center"}
        pl={12}
        fontSize={28}
        fontWeight={"400"}
        position={"absolute"}
        top={0}
        zIndex={1}
      >
        Dashboard
      </Flex>
      {/* Components */}
      <Flex
        flex={1}
        backgroundColor={"#fff"}
        p={4}
        mt={"115px"}
        overflowY={"auto"}
      >
        <HStack
          borderWidth={0.8}
          borderColor={"gray.600"}
          px={8}
          py={6}
          borderRadius={8}
          width={"100%"}
          justifyContent={"space-around"}
        >
          <Box width={"33%"} px={4} style={{ cursor: "pointer" }}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Text fontSize={18} fontWeight={"600"} color={"#000"}>
                  Team Level
                </Text>
                <Text fontSize={13} color={"gray"}>
                  (july)
                </Text>
              </HStack>
              <ChevronDown size={20} color={"gray"} />
            </HStack>
          </Box>
          <Box height={"100%"} width={"1px"} backgroundColor={"gray.600"} />
          <Box width={"33%"} px={4} style={{ cursor: "pointer" }}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Text fontSize={18} fontWeight={"600"} color={"#000"}>
                  Revo Level
                </Text>
                <Text fontSize={13} color={"gray"}>
                  (july)
                </Text>
              </HStack>
              <ChevronDown size={20} color={"gray"} />
            </HStack>
          </Box>
          <Box height={"100%"} width={"1px"} backgroundColor={"gray.600"} />
          <Box width={"33%"} px={4} style={{ cursor: "pointer" }}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Text fontSize={18} fontWeight={"600"} color={"#000"}>
                  Level of Teams
                </Text>
                <Text fontSize={13} color={"gray"}>
                  (july)
                </Text>
              </HStack>
              <ChevronDown size={20} color={"gray"} />
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <SimpleGrid columns={3} spacing={4} width="100%" p={4}>
        {["graph1", "graph2", "graph3", "graph4", "graph5", "graph6"].map(
          (item, index) => (
            <Box
              key={index}
              width={"100%"}
              height={"300px"}
              backgroundColor={"gray"}
              borderRadius={12}
            />
          )
        )}
      </SimpleGrid>
      <Box
        height={"1200px"}
        p={4}
        width={"100%"}
        backgroundColor={"purple"}
        borderRadius={8}
      />
    </Box>
  );
};

export default Dashboard;
