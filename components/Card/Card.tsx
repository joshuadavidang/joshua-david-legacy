import { Card as ChakraCard } from "@chakra-ui/react";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  return (
    <ChakraCard borderRadius="12px" maxW="xs" minH="md">
      {children}
    </ChakraCard>
  );
};

export default Card;
