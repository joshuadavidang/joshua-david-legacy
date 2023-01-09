import { Text as ChakraText } from "@chakra-ui/react";

interface TextProps {
  children: any;
  className?: any;
  color?: any;
  onClick?: any;
  fontSize?: any;
  lineHeight?: number;
  mb?: any;
}

const Text = ({
  children,
  className,
  color,
  fontSize,
  lineHeight,
  mb,
  ...props
}: TextProps) => {
  return (
    <ChakraText
      color={color}
      className={className}
      fontSize={fontSize}
      lineHeight={lineHeight}
      mb={mb}
      {...props}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
