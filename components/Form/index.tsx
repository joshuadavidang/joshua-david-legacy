import { useState } from "react";
import { ButtonIcon } from "../Button/ButtonIcon";
import Input from "./input";
import TextArea from "./textarea";
import { AiOutlineArrowRight } from "react-icons/ai";

interface FormProps {
  onChange?: string;
}

const Form = ({ onChange }: FormProps) => {
  const [form, setForm] = useState({ email: "", message: "" });

  const sendForm = () => {
    console.log(form);
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form>
        <div className="flex flex-col gap-y-4">
          <label className="text-left">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="name@email.com"
            data={handleChange}
            value={form.email}
          />
          <label className="text-left">Message</label>
          <TextArea
            name="message"
            placeholder="Leave a message..."
            rows={5}
            data={handleChange}
            value={form.message}
          />

          <div className="pt-4">
            <ButtonIcon
              size="md"
              variant="solid"
              colorScheme="gray"
              onClick={sendForm}
              icon={<AiOutlineArrowRight />}
            >
              Send Message
            </ButtonIcon>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
