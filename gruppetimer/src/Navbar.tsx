import { Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.900" p={4} color="white">
      <Flex align="center">
        <Text fontSize="3xl" fontWeight="bold" fontStyle="italic">
          SATS
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
