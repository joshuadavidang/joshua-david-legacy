import {
  CardBody as ChakraCardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardBodyProps {
  children: any;
  paddingTop?: any;
}

const CardBody = ({ children, paddingTop }: CardBodyProps) => {
  const color = useColorModeValue("brand.midnight", "brand.white");

  return (
    <ChakraCardBody paddingTop={paddingTop}>
      <Text color={color}>{children}</Text>
    </ChakraCardBody>
  );
};

export default CardBody;
