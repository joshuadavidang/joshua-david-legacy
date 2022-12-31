import { Button as ChakraButton, Stack } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  icon: any;
  children: string;
  variant: "solid" | "ghost" | "outline";
  size: "xs" | "sm" | "md" | "lg"
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
  icon,
  colorScheme,
  variant,
  children,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraButton
        leftIcon={icon}
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
