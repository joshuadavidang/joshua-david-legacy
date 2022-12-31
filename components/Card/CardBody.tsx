import { useColorModeValue } from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardBodyProps {
  children: any;
}

const CardBody = ({ children }: CardBodyProps) => {
  const color = useColorModeValue("brand.white", "brand.midnight");

  return <Text color={color}>{children}</Text>;
};

export default CardBody;
