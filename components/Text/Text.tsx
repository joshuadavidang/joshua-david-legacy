import { Text as ChakraText, useColorModeValue } from "@chakra-ui/react";

interface TextProps {
  children: any;
  className?: any;
}

const Text = ({ children, className }: TextProps) => {
  const color = useColorModeValue("#ffffff", "#000000");
  return (
    <ChakraText color={color} className={className}>
      {children}
    </ChakraText>
  );
};

export default Text;
