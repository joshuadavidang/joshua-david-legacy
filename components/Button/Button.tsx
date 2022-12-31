import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  children: string;
  variant: "solid" | "ghost" | "outline";
  colorScheme:
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink"
    | "messenger";
}

export const Button = ({
  colorScheme,
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton variant={variant} colorScheme={colorScheme} {...props}>
      {children}
    </ChakraButton>
  );
};
