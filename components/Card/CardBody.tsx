import {
  CardBody as ChakraCardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardBodyProps {
  children: any;
  fontSize: any;
  paddingTop?: any;
}

const CardBody = ({ children, paddingTop, fontSize }: CardBodyProps) => {
  const color = useColorModeValue("brand.midnight", "brand.white");

  return (
    <ChakraCardBody paddingTop={paddingTop}>
      <Text color={color} fontSize={fontSize} align="center">
        {children}
      </Text>
    </ChakraCardBody>
  );
};

export default CardBody;
