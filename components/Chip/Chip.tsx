interface ChipProps {
  chipLabel: string[];
}

const Chip = ({ chipLabel }: ChipProps) => {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {chipLabel.map((tech, index) => (
        <div
          className="text-lightGray dark:text-gray text-xs font-sen"
          key={index}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Chip;
