import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: string;
  colorScheme: string;
}

export const Button = ({
  colorScheme,
  primary = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton colorScheme={colorScheme} {...props}>
      {children}
    </ChakraButton>
  );
};
