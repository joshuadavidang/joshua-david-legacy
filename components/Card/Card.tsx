import { Card as ChakraCard } from '@chakra-ui/react';

interface CardProps {
  children: any;
  borderRadius: any;
  align: string;
  maxW?: string;
  minH?: string;
  minW?: any;
  className?: any;
}

const Card = ({ children, ...props }: CardProps) => {
  return <ChakraCard {...props}>{children}</ChakraCard>;
};

export default Card;
