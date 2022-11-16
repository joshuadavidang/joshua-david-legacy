export default function Hover(props) {
  const { children, className } = props;

  return (
    <span
      className={`hover:bg-lightGray dark:hover:bg-gray p-2 rounded ${className}`}
    >
      {children}
    </span>
  );
}
