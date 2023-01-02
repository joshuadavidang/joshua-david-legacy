import Box from "../Box/Box";
import { Card as ChakraCard, useColorModeValue } from "@chakra-ui/react";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  const bg = useColorModeValue("brand.white", "");

  return (
    <ChakraCard borderRadius="12px" maxW="xs" minH="md" bg={bg}>
      {children}
    </ChakraCard>
  );
};

export default Card;
