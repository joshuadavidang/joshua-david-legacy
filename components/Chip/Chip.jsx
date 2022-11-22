export default function Chip(props) {
  const { chipLabel } = props;

  return (
    <div className="flex flex-row gap-2 overflow-scroll">
      {chipLabel.map((tech, index) => (
        <div className="text-lightGray dark:text-gray text-xs font-sen" key={index}>
          {tech}
        </div>
      ))}
    </div>
  );
}
