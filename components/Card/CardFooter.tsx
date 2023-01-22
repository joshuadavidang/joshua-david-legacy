import { CardFooter as ChakraCardFooter } from "@chakra-ui/react";

interface CardFooterProps {
  children: any;
}

const CardFooter = ({ children }: CardFooterProps) => {
  return <ChakraCardFooter>{children}</ChakraCardFooter>;
};

export default CardFooter;
