import React from 'react';

import { Container, SimpleGrid, Box } from '@chakra-ui/layout';

import { PageFields, TalkFields, Entry } from '../../lib/contentstack';
import Card from '../Card/Card';

export interface HomeProps {
  slug: string;
  page?: PageFields;
  talks: Entry<TalkFields>[];
}

const IndexPage = () => (
  <Container maxW="container.xl" mt={[0, -48]}>
    <SimpleGrid columns={[1, 1, 2, 3, 3]}>
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
);

const Home = ({ slug, page }: HomeProps) => {
  if (slug === '/') {
    return <IndexPage />;
  }

  return page ? JSON.stringify(page.components) : slug;
};

export default Home;
