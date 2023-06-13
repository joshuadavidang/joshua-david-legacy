import { Card as ChakraCard } from '@chakra-ui/react';

interface CardProps {
  children: any;
  backgroundColor: string;
  borderRadius: any;
  align: string;
  maxW?: string;
  minH?: string;
  minW?: any;
  className?: any;
}

const Card = ({ backgroundColor, children, ...props }: CardProps) => {
  return (
    <ChakraCard bg={backgroundColor} {...props}>
      {children}
    </ChakraCard>
  );
};

export default Card;
