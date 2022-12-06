import { NextPage } from "next";

interface TextAreaProps {
  name: string;
  placeholder: string;
  data: any;
  rows: number;
  value: string;
}

const TextArea: NextPage<TextAreaProps> = (props) => {
  const { placeholder, name, data, rows } = props;

  return (
    <textarea
      id="message"
      rows={rows}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      name={name}
      onChange={data}
      required
    />
  );
};

export default TextArea;
