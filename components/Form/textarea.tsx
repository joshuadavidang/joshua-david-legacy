import { Textarea as ChakraTextarea } from "@chakra-ui/react";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: any;
  data: any;
  rows: number;
  size: "xs" | "sm" | "md" | "lg";
}

const TextArea = ({
  placeholder,
  data,
  name,
  size,
  value,
  rows,
}: TextAreaProps) => {
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
      value={value}
    />
  );
};

export default TextArea;
