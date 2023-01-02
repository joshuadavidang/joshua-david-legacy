import { Text as ChakraText } from "@chakra-ui/react";

interface TextProps {
  children: any;
  className?: any;
  color?: any;
  onClick?: any;
  fontSize?: any;
}

const Text = ({ children, className, color, fontSize, ...props }: TextProps) => {
  return (
    <ChakraText color={color} className={className} fontSize={fontSize} {...props}>
      {children}
    </ChakraText>
  );
};

export default Text;
