import Text from "../Text/Text";

interface CardBodyProps {
  children: any;
}

const CardBody = ({ children }: CardBodyProps) => {
  return <Text>{children}</Text>;
};

export default CardBody;
