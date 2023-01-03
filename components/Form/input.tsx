import { Input as ChakraInput } from "@chakra-ui/react";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  data: any;
  size: "xs" | "sm" | "md" | "lg";
}

const Input = ({ type, placeholder, data, name, size }: InputProps) => {
  return (
    <ChakraInput
      variant="gray"
      type={type}
      size={size}
      placeholder={placeholder}
      name={name}
      onChange={data}
    />
  );
};

export default Input;
