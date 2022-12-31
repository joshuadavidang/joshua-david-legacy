import { useState } from "react";
import { Button } from "../Button/Button";
import Input from "./input";
import TextArea from "./textarea";

interface FormProps {
  onChange?: string;
}

const Form = ({ onChange }: FormProps) => {
  const [form, setForm] = useState({ email: "", message: "" });

  const sendForm = () => {
    console.log("s");
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight pb-5 pt-4">
        leave a message
      </p>
      <form>
        <div className="flex flex-col gap-y-4">
          <Input
            type="email"
            name="email"
            placeholder="enter your email"
            data={handleChange}
            value={form.email}
          />
          <TextArea
            name="message"
            placeholder="leave a message..."
            rows={5}
            data={handleChange}
            value={form.message}
          />
          <Button colorScheme="green">Send Form</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
