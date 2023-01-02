import {
  CardHeader as ChakraCardHeader,
  Heading as ChakraHeading,
  useColorModeValue,
} from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardHeaderProps {
  children: any;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  const color = useColorModeValue("brand.purple", "brand.purple");

  return (
    <ChakraCardHeader>
      <Text color={color} fontSize="2xl">
        {children}
      </Text>
    </ChakraCardHeader>
  );
};

export default CardHeader;
