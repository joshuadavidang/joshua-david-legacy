import { Card as ChakraCard } from '@chakra-ui/react';

interface CardProps {
  children: any;
  borderRadius: any;
  maxW?: string;
  minH?: string;
  minW?: any;
  className?: any;
  align: string
}

const Card = ({ children, borderRadius, maxW, minH, minW, className, align }: CardProps) => {

  return (
    <ChakraCard
      className={className}
      borderRadius={borderRadius}
      maxW={maxW}
      minH={minH}
      minW={minW}
      align={align}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
