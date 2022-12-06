import { NextPage } from "next";

interface ButtonProps {
  btnMessage: string;
  sendForm: any;
}

const Button: NextPage<ButtonProps> = (props) => {
  const { btnMessage, sendForm } = props;

  return (
    <div>
      <button
        type="button"
        onClick={sendForm}
        className="w-full text-white bg-blue1 hover:bg-blue font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
      >
        {btnMessage}
      </button>
    </div>
  );
};

export default Button;
