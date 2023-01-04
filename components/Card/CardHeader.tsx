import {
  CardHeader as ChakraCardHeader,
  useColorModeValue,
} from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardHeaderProps {
  children: any;
  fontSize: any;
}

const CardHeader = ({ children, fontSize }: CardHeaderProps) => {
  const color = useColorModeValue("brand.purple", "brand.purple");

  return (
    <ChakraCardHeader>
      <Text color={color} fontSize={fontSize}>
        {children}
      </Text>
    </ChakraCardHeader>
  );
};

export default CardHeader;
