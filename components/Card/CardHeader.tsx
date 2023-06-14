import { CardHeader as ChakraCardHeader } from '@chakra-ui/react';

interface CardHeaderProps {
  children: any;
  fontSize?: any;
  className?: string;
  padding?: string;
}

const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return <ChakraCardHeader {...props}>{children}</ChakraCardHeader>;
};

export default CardHeader;
