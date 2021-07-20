import React from 'react';

import {
  SimpleGrid, Flex, Badge, Box,
} from '@chakra-ui/layout';
import {
  chakra, useColorModeValue, VisuallyHidden, Input, Button, InputGroup, InputRightElement, Image,
} from '@chakra-ui/react';
import { useBehaviorTracking } from '@uniformdev/optimize-tracker-react';

import { HeroFields, Entry } from '../../lib/contentstack';

const Hero: React.FC<Entry<HeroFields>> = ({
  unfrm_opt_intent_tag,
  title,
  description,
  button_text,
  image,
}: HeroFields) => {
  useBehaviorTracking(unfrm_opt_intent_tag);

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={0}
        _after={{
          bg: 'brand.500',
          opacity: 0.25,
          pos: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          content: '" "',
        }}
      >
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, lg: 20 }}
          py={24}
        >
          <Badge
            color="white"
            px={3}
            py={1}
            mb={3}
            variant="solid"
            colorScheme="brand"
            rounded="full"
          >
            Pre Beta
          </Badge>
          <chakra.h1
            mb={6}
            fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color={useColorModeValue('brand.600', 'gray.300')}
            lineHeight="shorter"
          >
            {title}
          </chakra.h1>
          <chakra.form w="full" mb={6}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Box display={{ base: 'block', lg: 'none' }}>
              <Input
                size="lg"
                color="brand.900"
                type="email"
                placeholder="Enter your email..."
                bg="white"
              />
              <Button
                w="full"
                mt={2}
                color="brand.700"
                variant="solid"
                size="lg"
                type="submit"
              >
                {button_text}
              </Button>
            </Box>
            <InputGroup size="lg" w="full" display={{ base: 'none', lg: 'flex' }}>
              <Input
                size="lg"
                color="brand.900"
                type="email"
                placeholder="Enter your email..."
                bg="white"
              />
              <InputRightElement w="auto">
                <Button
                  color="brand.700"
                  variant="solid"
                  size="lg"
                  type="submit"
                  roundedLeft={0}
                >
                  {button_text}
                </Button>
              </InputRightElement>
            </InputGroup>
          </chakra.form>
          <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="sm"
            color={useColorModeValue('brand.600', 'gray.400')}
            letterSpacing="wider"
          >
            {description}
          </chakra.p>
        </Flex>
        <Box>

          {image && (
          <Image
            src={image.url}
            alt={button_text}
            w="full"
            h={{ base: 64, md: 'full' }}
            bg="gray.100"
            loading="lazy"
          />
          ) }

        </Box>
      </SimpleGrid>

    </>
  );
};

export default Hero;
