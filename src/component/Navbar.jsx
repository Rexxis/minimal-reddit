import React from "react";
import Searchbar from "../features/Search/Searchbar";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="../../public/redditFace.svg" height="30px" />
        <Image
          src="../../public/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
        <Text align="center" justify="center" fontWeight={700} mt={0.5}>
          Minimal
        </Text>
      </Flex>
      <Searchbar />
    </Flex>
  );
}
