import { NextPage } from "next";

interface ButtonProps {
  children: any;
}

const Button: NextPage<ButtonProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Button;
