import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Biography = () => (
  <Container maxW="container.md" py={5}>
    <Heading as="h1" size="xl" mb={4}>Biography</Heading>
    <Text fontSize="lg">
      James Polk was born in 1795. He was the 11th President of the United States.
      He led the country during the Mexican-American War and sought to expand the boundaries of the United States.
    </Text>
  </Container>
);

export default Biography;