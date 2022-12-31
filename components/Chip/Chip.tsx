import Text from "../Text/Text";

interface ChipProps {
  chipLabel: string[];
}

const Chip = ({ chipLabel }: ChipProps) => {
  return (
    <Text className="flex flex-row gap-2 flex-wrap">
      {chipLabel.map((tech, index) => (
        <div
          className="text-xs font-sen"
          key={index}
        >
          {tech}
        </div>
      ))}
    </Text>
  );
};

export default Chip;
