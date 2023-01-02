import {
  CardBody as ChakraCardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardBodyProps {
  children: any;
}

const CardBody = ({ children }: CardBodyProps) => {
  const color = useColorModeValue("brand.midnight", "brand.white");

  return (
    <ChakraCardBody paddingTop="0">
      <Text color={color}>{children}</Text>
    </ChakraCardBody>
  );
};

export default CardBody;
