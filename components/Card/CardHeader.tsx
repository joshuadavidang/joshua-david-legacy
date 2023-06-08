import { CardHeader as ChakraCardHeader } from '@chakra-ui/react';

interface CardHeaderProps {
  children: any;
  fontSize?: string;
  className?: string;
  padding?: string;
}

const CardHeader = ({
  children,
  fontSize,
  className,
  padding,
}: CardHeaderProps) => {
  return (
    <ChakraCardHeader
      fontSize={fontSize}
      className={className}
      padding={padding}
    >
      {children}
    </ChakraCardHeader>
  );
};

export default CardHeader;
