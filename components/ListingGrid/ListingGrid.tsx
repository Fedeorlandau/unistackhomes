import React, { useEffect, useState } from 'react';

import { Container, SimpleGrid, Box } from '@chakra-ui/layout';

import { getClient } from '../../lib/api';
import { Entry } from '../../lib/contentstack';
import Card, { CardProps } from '../Card/Card';

interface ListingGridProps {
  listings?: Entry<CardProps>[];
  has_negative_margin?: boolean;
}

const ListingGrid = ({ listings, has_negative_margin }: ListingGridProps) => {
  const [cards, setCards] = useState<Entry<CardProps>[]>([]);
  useEffect(() => {
    if (listings && listings?.length > 0) {
      const listingsIds: string[] = listings?.map((listing) => listing.uid);
      getClient().ContentType('listing').Query().containedIn('uid', listingsIds)
        .toJSON()
        .find()
        .then((res) => {
          setCards(res[0]);
        });
    }
  }, [listings]);

  return (
    <Container maxW="container.xl" mt={[0, has_negative_margin ? -48 : 0]}>
      <SimpleGrid columns={[1, 1, 2, 3, 3]}>
        {cards.map((card) => (
          <Box key={card.uid}>
            <Card {...card} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

ListingGrid.defaultProps = {
  has_negative_margin: false,
  listings: [],
};

export default ListingGrid;
