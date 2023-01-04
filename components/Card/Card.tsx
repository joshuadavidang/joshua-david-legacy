import { Card as ChakraCard, useColorModeValue } from "@chakra-ui/react";

interface CardProps {
  children: any;
  borderRadius: any;
  maxW: any;
  minH: any;
  className?: any;
}

const Card = ({ children, borderRadius, maxW, minH, className }: CardProps) => {
  const bg = useColorModeValue("brand.white", "");

  return (
    <ChakraCard
      bg={bg}
      className={className}
      borderRadius={borderRadius}
      maxW={maxW}
      minH={minH}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
