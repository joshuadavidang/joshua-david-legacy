import { NextPage } from "next";

type HoverProps = {
  children: any;
  className: string;
};

const Hover: NextPage<HoverProps> = (props) => {
  const { children, className } = props;

  return (
    <span
      className={`hover:bg-lightGray dark:hover:bg-gray p-2 rounded ${className}`}
    >
      {children}
    </span>
  );
};

export default Hover;
