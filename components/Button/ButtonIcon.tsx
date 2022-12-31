import { Button as ChakraButton, Stack } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  leftIcon?: any;
  rightIcon?: any;
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

export const ButtonIcon = ({
  colorScheme,
  variant,
  children,
  size,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraButton
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        colorScheme={colorScheme}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </ChakraButton>
    </Stack>
  );
};
