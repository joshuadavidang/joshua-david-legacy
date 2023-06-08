import { CardBody as ChakraCardBody } from '@chakra-ui/react';
import Text from '@/components/Text/Text';

interface CardBodyProps {
  children: any;
  fontSize: any;
  paddingTop?: any;
}

const CardBody = ({ children, paddingTop, fontSize }: CardBodyProps) => {
  return (
    <ChakraCardBody paddingTop={paddingTop}>
      <Text fontSize={fontSize} align="left">
        {children}
      </Text>
    </ChakraCardBody>
  );
};

export default CardBody;
