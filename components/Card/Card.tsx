import { Card as ChakraCard } from "@chakra-ui/react";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
      <ChakraCard borderRadius="12px" maxW="xs" minH="md">
        {children}
      </ChakraCard>
    </div>
  );
};

export default Card;
