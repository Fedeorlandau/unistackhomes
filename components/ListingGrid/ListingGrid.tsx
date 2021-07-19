import React from 'react';

import { Container, SimpleGrid, Box } from '@chakra-ui/layout';

import { Entry } from '../../lib/contentstack';
import Card, { CardProps } from '../Card/Card';

interface ListingGridProps {
  ref_listings?: Entry<CardProps>[];
  has_negative_margin?: boolean;
}

const ListingGrid = ({ ref_listings, has_negative_margin }: ListingGridProps) => (
  <Container maxW="container.xl" mt={[0, has_negative_margin ? -48 : 0]}>
    <SimpleGrid columns={[1, 1, 2, 3, 3]}>
      {ref_listings?.map((listing) => (
        <Box key={listing.uid}>
          <Card {...listing} />
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

ListingGrid.defaultProps = {
  ref_listings: [],
  has_negative_margin: false,
};

export default ListingGrid;
