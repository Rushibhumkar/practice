"use client";
import "./globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { ReactNode } from "react";
export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("theme", theme);
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
