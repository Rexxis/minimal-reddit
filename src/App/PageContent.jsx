import React from "react";
import Post from "../features/Post/Post";
import { Flex } from "@chakra-ui/react";

export default function PageContent() {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" justify="center" maxWidth="860px">
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          <Post />
        </Flex>
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          border="1px solid orange"
        >
          rightsidecontent
        </Flex>
      </Flex>
    </Flex>
  );
}
