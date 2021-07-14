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
import Card from "../Card/Card";

export default function Hero() {
  return (
    <Box
      w="full"
      h="container.sm"
      backgroundImage="url(https://bellahomes.dk/wp-content/uploads/2020/07/OrganistensHus.jpg)"
      bgPos="center"
      bgSize="cover"
    >
      <Flex align="center" pos="relative" justify="center" boxSize="full">
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Heading
            fontSize={["2xl", , "3xl"]}
            fontWeight="semibold"
            color="brand.800"
            textTransform="uppercase"
          >
            UniStack Homes
          </Heading>
        </Stack>
      </Flex>
      <Container maxW="container.xl" position="relative" top={-48}>
        <SimpleGrid columns={[1, 1, 1, 2, 3]}>
          <Box>
            <Card />
          </Box>
          <Box w="100%">
            <Card />
          </Box>
          <Box w="100%">
            <Card />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
