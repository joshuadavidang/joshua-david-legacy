import { Text as ChakraText } from "@chakra-ui/react";

interface TextProps {
  children: any;
  className?: any;
  color?: any;
  onClick?: any;
  fontSize?: any;
  lineHeight?: number;
  mb?: any;
  align?: any;
}

const Text = ({
  children,
  className,
  color,
  fontSize,
  lineHeight,
  mb,
  align,
  ...props
}: TextProps) => {
  return (
    <ChakraText
      color={color}
      className={className}
      fontSize={fontSize}
      lineHeight={lineHeight}
      mb={mb}
      align={align}
      {...props}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
