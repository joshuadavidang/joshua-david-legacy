import { useColorModeValue } from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardHeaderProps {
  children: any;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  const color = useColorModeValue("brand.white", "brand.purple");

  return (
    <Text color={color} className="text-2xl pb-2 pt-3 font-bold tracking-loose">
      {children}
    </Text>
  );
};

export default CardHeader;
