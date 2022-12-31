import { Box as ChakraBox, useColorModeValue } from "@chakra-ui/react";

interface BoxProps {
  children: any;
  className?: any;
}

const Box = ({ children, className }: BoxProps) => {
  const bg = useColorModeValue("brand.purple", "brand.white");

  return (
    <ChakraBox bg={bg} className={className}>
      {children}
    </ChakraBox>
  );
};

export default Box;
