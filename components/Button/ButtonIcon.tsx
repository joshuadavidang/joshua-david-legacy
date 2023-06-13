import { Button as ChakraButton, Stack } from '@chakra-ui/react';

interface ButtonIconProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: any) => void;
  className?: string;
  isDisabled?: true | false;
  leftIcon?: any;
  rightIcon?: any;
  hover?: any;
  active?: any;
  cursor?: any;
  isLoading?: true | false;
  loadingText?: string;
  children: string;
  variant: 'solid' | 'ghost' | 'outline';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  colorScheme:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'messenger'
    | 'telegram';
}

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <ChakraButton fontWeight="normal" {...props}>
        {children}
      </ChakraButton>
    </Stack>
  );
};
