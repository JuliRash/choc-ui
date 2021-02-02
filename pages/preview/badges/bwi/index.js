import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

export default function Component() {
  return (
    <Flex
      bg="gray.600"
      p={20}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <chakra.span pos="relative" display="inline-block">
        <Icon
          boxSize={6}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </Icon>
        <chakra.span
          pos="absolute"
          top={0}
          right={0}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="red.100"
          transform="translate(50%,-50%)"
          bg="red.600"
          borderRadius="full"
        >
          99
        </chakra.span>
      </chakra.span>

      <chakra.span pos="relative" display="inline-block" ml={8}>
        <Icon
          boxSize={6}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clip-rule="evenodd"
            fillRule="evenodd"
          ></path>
        </Icon>
        <chakra.span
          pos="absolute"
          top={0}
          right={0}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="red.100"
          transform="translate(50%,-50%)"
          bg="red.600"
          borderRadius="full"
        >
          6
        </chakra.span>
      </chakra.span>
    </Flex>
  );
}
