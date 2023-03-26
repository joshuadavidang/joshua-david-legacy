import { Card as ChakraCard, useColorModeValue } from "@chakra-ui/react";

interface CardProps {
  children: any;
  borderRadius: any;
  maxW: any;
  minH: any;
  className?: any;
  align: string
}

const Card = ({ children, borderRadius, maxW, minH, className, align }: CardProps) => {
  const bg = useColorModeValue("brand.offwhite", "brand.midnight");

  return (
    <ChakraCard
      bg={bg}
      className={className}
      borderRadius={borderRadius}
      maxW={maxW}
      minH={minH}
      align={align}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
