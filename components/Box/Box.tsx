import { Box as ChakraBox } from "@chakra-ui/react";

interface BoxProps {
  children: any;
  className?: any;
  bg: any;
}

const Box = ({ children, className, bg }: BoxProps) => {
  return (
    <ChakraBox bg={bg} className={className}>
      {children}
    </ChakraBox>
  );
};

export default Box;
