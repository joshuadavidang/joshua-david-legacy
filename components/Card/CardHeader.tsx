import { NextPage } from "next";

interface CardHeaderProps {
  children: any;
}

const CardHeader: NextPage<CardHeaderProps> = (props) => {
  const { children } = props;

  return (
    <p className="pb-2 pt-3 text-2xl text-white dark:text-blue1 text-left font-bold tracking-loose">
      <span className="hover:border-b-2 pb-0.5">{children}</span>
    </p>
  );
};

export default CardHeader;
