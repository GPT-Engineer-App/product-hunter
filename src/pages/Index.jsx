import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Input, Stack, Grid, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaArrowUp, FaComment } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the first product",
    upvotes: 100,
    comments: 25,
    maker: "Maker 1",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZHVjdHxlbnwwfHx8fDE3MTIwNzg5MzN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the second product",
    upvotes: 80,
    comments: 15,
    maker: "Maker 2",
    image: "https://images.unsplash.com/photo-1697636979792-fb057f6cbe8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0fGVufDB8fHx8MTcxMjA3ODkzM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more products...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box maxWidth="960px" margin="auto" padding={4}>
      <Flex align="center" marginBottom={8}>
        <Heading as="h1" size="xl" color="orange.500">
          Product Hunt
        </Heading>
        <Spacer />
        <Input placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} width="300px" />
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" padding={4}>
            <Image src={product.image} alt={product.name} borderRadius="lg" />
            <Heading as="h2" size="md" marginTop={4}>
              {product.name}
            </Heading>
            <Text fontSize="sm" color="gray.500" marginTop={2}>
              {product.description}
            </Text>
            <Flex align="center" marginTop={4}>
              <Button leftIcon={<FaArrowUp />} colorScheme="orange" variant="outline" size="sm">
                Upvote ({product.upvotes})
              </Button>
              <Spacer />
              <Link href="#" fontSize="sm">
                <FaComment /> {product.comments} comments
              </Link>
            </Flex>
            <Text fontSize="sm" marginTop={2}>
              Made by {product.maker}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
