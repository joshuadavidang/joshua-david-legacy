import { CardHeader as ChakraCardHeader } from '@chakra-ui/react';

interface CardHeaderProps {
  children: any;
  fontSize: string;
  className?: string;
}

const CardHeader = ({ children, fontSize, className }: CardHeaderProps) => {
  return (
    <ChakraCardHeader fontSize={fontSize} className={className}>
      {children}
    </ChakraCardHeader>
  );
};

export default CardHeader;
