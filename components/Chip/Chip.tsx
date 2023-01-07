import { useColorModeValue } from "@chakra-ui/react";
import Text from "../Text/Text";

interface ChipProps {
  chipLabel: string[];
}

const Chip = ({ chipLabel }: ChipProps) => {
  const color = useColorModeValue("brand.gray", "brand.gray");

  return (
    <Text color={color} className="mt-1 flex flex-row gap-1.5 flex-wrap">
      {chipLabel.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </Text>
  );
};

export default Chip;
