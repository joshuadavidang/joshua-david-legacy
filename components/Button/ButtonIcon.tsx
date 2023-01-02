import { Button as ChakraButton, Stack } from "@chakra-ui/react";

interface ButtonProps {
  onClick?: () => void;
  isDisabled?: true | false;
  leftIcon?: any;
  rightIcon?: any;
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

export const ButtonIcon = ({
  colorScheme,
  isDisabled,
  hover,
  variant,
  children,
  size,
  leftIcon,
  rightIcon,
  cursor,
  active,
  ...props
}: ButtonProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraButton
        cursor={cursor}
        _hover={hover}
        _active={active}
        isDisabled={isDisabled}
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
