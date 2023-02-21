import React from "react";
import { Flex, Image } from "@chakra-ui/react";

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
      </Flex>
    </Flex>
  );
}
