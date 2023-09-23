import { Text as ChakraText } from '@chakra-ui/react';

interface TextProps {
  children: any;
  className?: any;
  color?: any;
  onClick?: any;
  fontSize?: any;
  lineHeight?: number;
  mb?: any;
  align?: any;
  as?: any;
  cursor?: string;
}

const Text = ({ children, ...props }: TextProps) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};

export default Text;
