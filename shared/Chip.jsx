export default function Chip(props) {
  const { chipLabel } = props;

  return (
    <>
      {chipLabel.map((tech, index) => (
        <>
          <span
            className="rounded bg-lightGray text-gray p-2 w-fit text-sm m-1.5 font-sen"
            key={index}
          >
            {tech}
          </span>
        </>
      ))}
    </>
  );
}
