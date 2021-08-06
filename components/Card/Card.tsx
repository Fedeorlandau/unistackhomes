import React from 'react';

import { StarIcon } from '@chakra-ui/icons';
import {
  Badge, Box, Flex, Image, useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Entry } from '../../lib/contentstack';

const MotionFlex = motion(Flex);

export interface CardProps {
  title: string;
  beds: number;
  baths: number;
  price: string;
  reviewCount: number;
  rating: number;
  image: {
    url: string;
  }
  /** Intent Tags */
  unfrm_opt_intent_tag?: Record<string, any> | undefined;
}

const Card: React.FC<Entry<CardProps>> = ({
  title, beds, baths, price, reviewCount, rating, image,
}: CardProps) => (
  <MotionFlex
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    position="relative"
  >
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      maxW="xs"
      rounded="lg"
      shadow="lg"
    >
      <Image
        src={image.url}
        alt={title}
        roundedTop="lg"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" color="brand.700">
            New
          </Badge>
          <Box
            color="brand.700"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {beds}
            {' '}
            beds &bull;
            {baths}
            {' '}
            baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>
          {price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={title + rating}
                color={i < rating ? 'brand.800' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount}
            {' '}
            reviews
          </Box>
        </Box>
      </Box>
    </Box>
  </MotionFlex>
);

export default Card;
