import { Button as ChakraButton, Stack } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  icon: any;
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
    | "messenger"
    | "telegram"
}

export const ButtonIcon = ({
  icon,
  colorScheme,
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraButton
        leftIcon={icon}
        colorScheme={colorScheme}
        variant={variant}
        {...props}
      >
        {children}
      </ChakraButton>
    </Stack>
  );
};
