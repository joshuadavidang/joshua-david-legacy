import { NextPage } from "next";

interface CardBodyProps {
  children: any;
}

const CardBody: NextPage<CardBodyProps> = (props) => {
  const { children } = props;
  return <div className="text-white dark:text-black">{children}</div>;
};

export default CardBody;
