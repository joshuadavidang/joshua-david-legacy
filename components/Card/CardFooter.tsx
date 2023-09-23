import { CardFooter as ChakraCardFooter } from '@chakra-ui/react';

interface CardFooterProps {
  pt?: any;
  children: any;
}

const CardFooter = ({ pt, children }: CardFooterProps) => {
  return <ChakraCardFooter pt={pt}>{children}</ChakraCardFooter>;
};

export default CardFooter;
