import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const HeroSection = () => {
  const { searchInputRef } = useContext(SearchContext);
  const headingColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Box w="full" py={10} px={6} mt={40} textAlign="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" fontWeight="extrabold" color={headingColor}>
          BookMaven
        </Heading>
        <Text fontSize="xl" colorScheme="gray">
          Tell us what you like...
        </Text>
        <Text colorScheme="gray">
          ...and our AI will scour libraries to find your next reading
          adventure.
        </Text>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => {
            searchInputRef.current?.focus();
          }}
        >
          Start Your Journey
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
