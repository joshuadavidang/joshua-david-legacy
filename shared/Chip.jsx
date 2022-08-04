export default function Chip(props) {
  const { chipLabel } = props;

  return (
    <>
      {chipLabel.map((tech, index) => (
        <>
          <span
            className="rounded bg-lightGray text-gray p-1.5 m-1.5 w-fit text-xs font-sen"
            key={index}
          >
            {tech}
          </span>
        </>
      ))}
    </>
  );
}
