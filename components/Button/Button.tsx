import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  isDisabled?: true | false;
  hover?: any;
  active?: any;
  children: string;
  cursor?: any;
  variant: "solid" | "ghost" | "outline";
  size: "xs" | "sm" | "md" | "lg";
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
    | "messenger"
    | "telegram";
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
