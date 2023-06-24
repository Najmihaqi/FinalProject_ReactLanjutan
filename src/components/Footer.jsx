import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box className="footer">
      <Flex
        align="center"
        justify="center"
        h="50px"
        bg="gray.200"
        borderTop="1px solid"
        borderColor="gray.300"
      >
        <Text className="studentName" mr={2}>
          Najmi Baihaqi
        </Text>
        <Text className="studentId">FE5544066</Text>
      </Flex>
    </Box>
    );
};

export default Footer;
