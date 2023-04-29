import {
  CardHeader as ChakraCardHeader,
} from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardHeaderProps {
  children: any;
  fontSize: any;
}

const CardHeader = ({ children, fontSize }: CardHeaderProps) => {
  return (
    <ChakraCardHeader>
      <Text color={"brand.purple"} fontSize={fontSize}>
        {children}
      </Text>
    </ChakraCardHeader>
  );
};

export default CardHeader;
