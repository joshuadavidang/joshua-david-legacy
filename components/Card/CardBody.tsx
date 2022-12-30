interface CardBodyProps {
  children: any;
}

const CardBody = ({ children }: CardBodyProps) => {
  return <div className="text-white dark:text-black">{children}</div>;
};

export default CardBody;
