import { Card as ChakraCard } from "@chakra-ui/react";

interface CardProps {
  children: any;
  borderRadius: any;
  maxW: any;
  minH: any;
  className?: any;
  align: string
}

const Card = ({ children, borderRadius, maxW, minH, className, align }: CardProps) => {

  return (
    <ChakraCard
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
