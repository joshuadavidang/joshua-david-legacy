import { Text as ChakraText } from "@chakra-ui/react";

interface TextProps {
  children: any;
  className?: any;
  color?: any;
  onClick?: any;
  fontSize?: any;
  lineHeight?: number;
}

const Text = ({
  children,
  className,
  color,
  fontSize,
  lineHeight,
  ...props
}: TextProps) => {
  return (
    <ChakraText
      color={color}
      className={className}
      fontSize={fontSize}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
