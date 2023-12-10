import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  VStack,
  Text,
} from "@chakra-ui/react";

interface Props {
  method: string;
  setMethod: (method: string) => void;
  topN: number;
  setTopN: (topN: number) => void;
}

const BookRecommenderSection = ({
  method,
  setMethod,
  topN,
  setTopN,
}: Props) => {
  return (
    <Box as="section" maxW="6xl" mx="auto" px={4} py={6} width="full">
      <VStack
        spacing={4}
        alignItems={{ base: "center", md: "stretch" }}
        width="full"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          textAlign={{ base: "center", md: "left" }}
        >
          Here's some books we think you'll also enjoy:
        </Text>
        <HStack
          spacing={4}
          justifyContent={{ base: "center", md: "flex-start" }}
          width="full"
          wrap={{ base: "wrap", md: "nowrap" }}
        >
          <Menu>
            <MenuButton as={Button} colorScheme="blue">
              Recommender: {method}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setMethod("Content-Based")}>
                Content-Based
              </MenuItem>
              <MenuItem onClick={() => setMethod("Collaborative")}>
                Collaborative
              </MenuItem>
              <MenuItem onClick={() => setMethod("Hybrid")}>Hybrid</MenuItem>
            </MenuList>
          </Menu>
          <Select
            ml={2}
            w="auto"
            value={topN.toString()}
            onChange={(e) => setTopN(parseInt(e.target.value, 10))}
          >
            <option value="5">5 Books</option>
            <option value="10">10 Books</option>
            <option value="15">15 Books</option>
          </Select>
        </HStack>
      </VStack>
    </Box>
  );
};

export default BookRecommenderSection;
