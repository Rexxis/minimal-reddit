import React from "react";
import moment from "moment/moment";
import { getFormattedNumber, getFormattedComment } from "../../App/utils";
import { Flex, Icon, Text, Stack, Image } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from "@chakra-ui/icons";

export default function PostItem(props) {
  const { title, author, body, ups, time, num_comments, img, userVoteValue } =
    props;

  return (
    <Flex
      border="1px solid"
      bg="white"
      borderColor="gray.300"
      borderRadius="4"
      _hover={{ borderColor: "gray.500" }}
      cursor="pointer"
    >
      <Flex
        direction="column"
        align="center"
        bg="gray.100"
        p={2}
        width="40px"
        borderRadius={4}
      >
        <Icon
          as={ArrowUpIcon} // TODO: search for IoArrowUpDown
          color={userVoteValue === 1 ? "brand.100" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          //   TODO: onVote action
        />
        <Text>{getFormattedNumber(ups)}</Text>
        <Icon
          as={ArrowDownIcon} // TODO: search for IoArrowUpDown
          color={userVoteValue === -1 ? "#4379ff" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          //   TODO: onVote action
        />
      </Flex>
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px">
          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
            {/* TODO: HomePage Check */}
            <Text>
              Posted by u/{author} {moment(new Date(time * 1000)).fromNow()}
            </Text>
          </Stack>
          <Text fontSize="12pt" fontWeight={600}>
            {title}
          </Text>
          <Text fontSize="10pt">{body}</Text>
          {img && (
            <Flex justify="center" align="center" p={2}>
              <Image src={img} maxHeight="540px" />
            </Flex>
          )}
        </Stack>
        <Flex ml={1} mb={0.5} color="gray.500">
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={ChatIcon} mr={2} />
            <Text fontSize="9pt">{getFormattedComment(num_comments)}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
