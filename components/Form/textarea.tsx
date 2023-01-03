import { Textarea as ChakraTextarea } from "@chakra-ui/react";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  data: any;
  rows: number;
  size: "xs" | "sm" | "md" | "lg";
}

const TextArea = ({ placeholder, name, data, size, rows }: TextAreaProps) => {
  return (
    <ChakraTextarea
      variant="gray"
      id="message"
      size={size}
      placeholder={placeholder}
      name={name}
      onChange={data}
      resize="none"
      rows={rows}
    />
  );
};

export default TextArea;
