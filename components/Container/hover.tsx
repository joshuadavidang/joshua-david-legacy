type HoverProps = {
  children: any;
  className?: string;
};

const Hover = ({ children, className }: HoverProps) => {
  return (
    <span
      className={`hover:bg-lightGray dark:hover:bg-gray p-2 rounded ${className}`}
    >
      {children}
    </span>
  );
};

export default Hover;
