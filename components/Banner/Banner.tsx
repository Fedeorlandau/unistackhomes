import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Logo from '../Logo/Logo';

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  const bg = useColorModeValue('rgb(255,255,255,0.95)', 'gray.800');

  return (
    <Box
      w="full"
      h={[96, 'container.sm']}
      backgroundImage="url(https://bellahomes.dk/wp-content/uploads/2020/07/OrganistensHus.jpg)"
      bgPos="center"
      bgSize="cover"
    >
      <Flex align="center" pos="relative" justify="center" boxSize="full">
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Box
            bg={bg}
            d="flex"
            alignItems="center"
            p={6}
            borderRadius={8}
            maxW="85vw"
          >
            <Logo height={112} width={112} />
            <Heading fontWeight="semibold" textTransform="uppercase">
              <Text mr={4}>{title}</Text>
            </Heading>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
