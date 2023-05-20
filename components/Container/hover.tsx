import { useColorMode } from '@chakra-ui/react';

type HoverProps = {
  children: any;
  className?: string;
};

const Hover = ({ children, className }: HoverProps) => {
  const { colorMode } = useColorMode();

  return (
    <span
      className={`${
        colorMode === 'dark' ? 'hover:bg-gray' : 'hover:bg-lightGray'
      } p-2 rounded ${className}`}
    >
      {children}
    </span>
  );
};

export default Hover;
