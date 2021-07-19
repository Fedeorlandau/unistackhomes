import React from 'react';

import { Container, SimpleGrid, Box } from '@chakra-ui/layout';

import { Entry } from '../../lib/contentstack';
import Card, { CardProps } from '../Card/Card';

interface ListingGridProps {
  listings?: Entry<CardProps>[],
  has_negative_margin?: boolean;
}

const ListingGrid = ({ listings, has_negative_margin }: ListingGridProps) => (

  <Container maxW="container.xl" mt={[0, has_negative_margin ? -48 : 0]}>
    <SimpleGrid columns={[1, 1, 2, 3, 3]}>
      {listings?.map((listing) => (
        <Box key={listing.uid}>
          <Card />
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

ListingGrid.defaultProps = {
  listings: [],
  has_negative_margin: false,
};

export default ListingGrid;
