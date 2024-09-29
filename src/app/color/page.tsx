"use client"; // Ensure the component runs on the client side

import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Image, Text, Input, Button, Link } from "@chakra-ui/react";
import ColorThief from "colorthief";

interface DynamicLoginPageProps {
  imageUrl: string;
}

const DynamicLoginPage: React.FC<DynamicLoginPageProps> = ({ imageUrl }) => {
  const [bgColor, setBgColor] = useState("gray.300");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => {
        extractColor();
      };
    }
  }, [imageUrl]);

  // Function to extract dominant color
  const extractColor = () => {
    const colorThief = new ColorThief();
    const image = imgRef.current;

    if (image && image.complete && image.naturalWidth > 0) {
      const dominantColor = colorThief.getColor(image);
      setBgColor(`rgb(${dominantColor.join(",")})`);
    }
  };

  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor={bgColor}
      transition="background-color 0.5s ease"
    >
      {/* Image Section */}
      <Box
        display={{ base: "none", md: "block" }}
        width="50%"
        height="100%"
        overflow="hidden"
      >
        <Image
          src={imageUrl}
          alt="Login Image"
          ref={imgRef}
          height="400px"
          width="300px"
          objectFit="cover"
          crossOrigin="anonymous"
          borderRadius="0 0 0 20px"
        />
      </Box>

      {/* Login Form Section */}
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg="white"
        width={{ base: "100%", md: "50%" }}
        height="100%"
        p={8}
        borderRadius="20px 0 0 20px"
      >
        <Text fontSize="3xl" fontWeight="bold" mb={8}>
          Login
        </Text>
        <Box width="80%" mb={4}>
          <Text mb={2} fontSize="md" fontWeight="semibold">
            User Name
          </Text>
          <Input placeholder="Enter Your Email Address" mb={4} />
        </Box>
        <Box width="80%" mb={4}>
          <Text mb={2} fontSize="md" fontWeight="semibold">
            Password
          </Text>
          <Input type="password" placeholder="Enter Your Password" mb={4} />
        </Box>
        <Link alignSelf="flex-end" fontSize="sm" color="blue.400" mb={4}>
          Forgot Password?
        </Link>
        <Button width="80%" colorScheme="blue" mb={4}>
          Login
        </Button>
        <Text>
          Don't have an account?..{" "}
          <Link color="blue.400" fontWeight="bold">
            Sign-up Now
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Box>
      <Text fontSize="2xl" textAlign="center" m={4}>
        Dynamic Background Login Pages
      </Text>
      {/* Display both Login Pages side by side */}
      <Flex justifyContent="space-around" alignItems="center">
        <DynamicLoginPage imageUrl={require("@/page1.jpeg")} />
        <DynamicLoginPage imageUrl={require("@/page2.jpeg")} />
      </Flex>
    </Box>
  );
};

export default App;
