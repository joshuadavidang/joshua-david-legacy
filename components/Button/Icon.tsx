import { IconButton } from '@chakra-ui/react';

interface IconProps {
  onClick?: () => void;
  icon: any;
  label: any;
  variant: 'solid' | 'ghost' | 'outline';
  size: 'xs' | 'sm' | 'md' | 'lg';
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

export const Icon = ({ label, ...props }: IconProps) => {
  return <IconButton aria-label={label} {...props} />;
};
