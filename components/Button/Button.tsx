import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  isDisabled?: true | false;
  hover?: any;
  active?: any;
  cursor?: any;
  isLoading?: true | false;
  children: string;
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
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      variant={variant}
      colorScheme={colorScheme}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
