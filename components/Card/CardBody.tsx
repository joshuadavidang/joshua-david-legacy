import { CardBody as ChakraCardBody } from '@chakra-ui/react';
import Text from '@/components/Text/Text';

interface CardBodyProps {
  children: any;
  fontSize: any;
  pt?: any;
}

const CardBody = ({ children, pt, fontSize }: CardBodyProps) => {
  return (
    <ChakraCardBody pt={pt}>
      <Text fontSize={fontSize} align="left">
        {children}
      </Text>
    </ChakraCardBody>
  );
};

export default CardBody;
