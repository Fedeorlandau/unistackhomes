import React from 'react';

import { StarIcon } from '@chakra-ui/icons';
import {
  Badge, Box, Flex, Image, useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

export interface CardProps {
  title: string;
  beds: number;
  baths: number;
  price: string;
  reviewCount: number;
  rating: number;
}

const Card = ({
  title, beds, baths, price, reviewCount, rating,
}: CardProps) => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
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
          src={property.imageUrl}
          alt={property.imageAlt}
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
};

export default Card;
