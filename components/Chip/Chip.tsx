import { useColorModeValue } from "@chakra-ui/react";
import Text from "../Text/Text";

interface ChipProps {
  chipLabel: string[];
}

const Chip = ({ chipLabel }: ChipProps) => {
  const color = useColorModeValue("brand.gray", "brand.gray");

  return (
    <Text color={color} className="mt-3 flex flex-row gap-1.5 flex-wrap">
      {chipLabel.map((tech, index) => (
        <div className=" text-xs font-sen" key={index}>
          {tech}
        </div>
      ))}
    </Text>
  );
};

export default Chip;
