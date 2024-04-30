import { Box, Heading, Button, Container, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">James Polk</Heading>
        <Link to="/biography"><Button colorScheme="teal">Biography</Button></Link>
        <Link to="/achievements"><Button colorScheme="teal">Achievements</Button></Link>
        <Link to="/contact"><Button colorScheme="teal">Contact</Button></Link>
      </VStack>
    </Container>
  );
};

export default Index;