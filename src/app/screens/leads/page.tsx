import { Flex, Box, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import { SquarePlus, Filter } from "lucide-react";
import React from "react";

type Props = {};

const Leads = (props: Props) => {
  return (
    <Box flex={1} backgroundColor={"pink"}>
      <HStack
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
        justifyContent={"space-between"}
      >
        <Flex>Leads</Flex>
      </HStack>
    </Box>
  );
};

export default Leads;
