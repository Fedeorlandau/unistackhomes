import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Card from "../Card/Card";

export default function Hero() {
  return (
    <Box
      w="full"
      h={[96, "container.sm"]}
      backgroundImage="url(https://bellahomes.dk/wp-content/uploads/2020/07/OrganistensHus.jpg)"
      bgPos="center"
      bgSize="cover"
    >
      <Flex align="center" pos="relative" justify="center" boxSize="full">
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Box
            backgroundColor="rgb(255,255,255,0.95)"
            d="flex"
            alignItems="center"
            p={6}
            borderRadius={8}
            maxW="85vw"
          >
            <Image src="/unistack.png" height={112} width={112} />
            <Heading
              fontSize={["2xl", , "3xl"]}
              fontWeight="semibold"
              color="brand.900"
              textTransform="uppercase"
            >
              <Text mr={4}>Unistack Homes</Text>
            </Heading>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
