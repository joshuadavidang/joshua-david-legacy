import { NextPage } from "next";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "./input";
import TextArea from "./textarea";

interface FormProps {
  onChange?: string;
}

const Form: NextPage<FormProps> = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [submit, setSubmit] = useState(false);

  const sendForm = () => {
    setSubmit(true);
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {submit != true ? (
        <div>
          <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight pb-5">
            Leave a message
          </p>
          <form>
            <div className="flex flex-col gap-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                data={handleChange}
                value={form.email}
              />
              <TextArea
                name="message"
                placeholder="Leave a message..."
                rows={5}
                data={handleChange}
                value={form.message}
              />
              <Button btnMessage="Send" sendForm={sendForm} />
            </div>
          </form>
        </div>
      ) : (
        <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight">
          Get back to you soon!
        </p>
      )}
    </>
  );
};

export default Form;
