import React from 'react';

import {
  SimpleGrid, Flex, Badge, Box, Stack,
} from '@chakra-ui/layout';
import {
  chakra, useColorModeValue, VisuallyHidden, Input, Button, InputGroup, InputRightElement, Image, Radio, RadioGroup,
} from '@chakra-ui/react';
import { useUniformTracker, useBehaviorTracking } from '@uniformdev/optimize-tracker-react';
import { setCookie } from 'nookies';

import { HeroFields, Entry } from '../../lib/contentstack';

const Hero: React.FC<Entry<HeroFields>> = ({
  unfrm_opt_intent_tag,
  title,
  description,
  button_text,
  image,
  is_registered,
}: HeroFields) => {
  useBehaviorTracking(unfrm_opt_intent_tag);
  const [value, setValue] = React.useState('tenant');

  const { tracker } = useUniformTracker();

  const updateCookie = (intent: string) => {
    setValue(intent);
  };

  const suscribe = () => {
    setCookie(null, 'unistack_registered', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    setCookie(null, 'unistack_role', value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    tracker?.reevaluateSignals();
  };

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
          {!is_registered
          && (
          <chakra.div w="full" mb={6}>

            <RadioGroup onChange={updateCookie} value={value} my={4}>
              <Stack direction="row">
                <Radio value="tenant">Tentant</Radio>
                <Radio value="landlord">Landlord</Radio>
              </Stack>
            </RadioGroup>

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
                onClick={() => suscribe()}
              >
                {button_text}
                {' '}
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
                  onClick={() => suscribe()}
                >
                  {button_text}
                  {' '}
                </Button>
              </InputRightElement>
            </InputGroup>
          </chakra.div>
          )}
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
