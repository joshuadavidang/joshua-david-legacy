import { NextPage } from "next";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  data: any;
  value: string;
}

const Input: NextPage<InputProps> = (props) => {
  const { type, placeholder, data, name } = props;

  return (
    <input
      type={type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      name={name}
      onChange={data}
      required
    />
  );
};

export default Input;
