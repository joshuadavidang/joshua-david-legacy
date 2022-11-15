export default function Hover(props) {
  const { children } = props;

  return (
    <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
      {children}
    </span>
  );
}
