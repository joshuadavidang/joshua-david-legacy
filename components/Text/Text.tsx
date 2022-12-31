import { Text as ChakraText } from "@chakra-ui/react";

interface TextProps {
  children: any;
  className?: any;
  color?: any;
  onClick?: any;
}

const Text = ({ children, className, color, ...props }: TextProps) => {
  return (
    <ChakraText color={color} className={className} {...props}>
      {children}
    </ChakraText>
  );
};

export default Text;
