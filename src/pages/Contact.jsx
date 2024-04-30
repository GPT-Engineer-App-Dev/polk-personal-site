import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, Container } from '@chakra-ui/react';

const Contact = () => (
  <Container maxW="container.md" py={5}>
    <Heading as="h1" size="xl" mb={4}>Contact</Heading>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input placeholder="Your name" />
      <FormLabel mt={4}>Email</FormLabel>
      <Input placeholder="Your email" />
      <FormLabel mt={4}>Message</FormLabel>
      <Textarea placeholder="Your message" />
      <Button mt={4} colorScheme="blue">Send</Button>
    </FormControl>
  </Container>
);

export default Contact;