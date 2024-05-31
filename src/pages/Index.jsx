import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "/images/smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "/images/laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet",
    image: "/images/tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">
            Electronics Store
          </Link>
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" fontSize="lg">
            Home
          </Link>
          <Link as={RouterLink} to="/products" fontSize="lg">
            Products
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="lg">
            Contact
          </Link>
        </HStack>
      </Flex>

      <Box as="section" textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={4}>
          Welcome to the Electronics Store
        </Heading>
        <Text fontSize="lg" mb={6}>
          Discover the latest and greatest in electronic devices.
        </Text>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;