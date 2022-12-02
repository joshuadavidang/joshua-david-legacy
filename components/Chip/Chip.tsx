import { NextPage } from "next";

interface ChipProps {
  chipLabel: [];
}

const Chip: NextPage<ChipProps> = (props) => {
  const { chipLabel } = props;

  return (
    <div className="flex flex-row gap-2 overflow-scroll">
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
