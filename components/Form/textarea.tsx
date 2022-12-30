interface TextAreaProps {
  name: string;
  placeholder: string;
  data: any;
  rows: number;
  value: string;
}

const TextArea = ({ placeholder, name, data, rows }: TextAreaProps) => {
  return (
    <textarea
      id="message"
      rows={rows}
      className="p-2.5 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      name={name}
      onChange={data}
      required
    />
  );
};

export default TextArea;
