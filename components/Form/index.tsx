import { useState } from "react";
import { ButtonIcon } from "../Button/ButtonIcon";
import Input from "./input";
import TextArea from "./textarea";
import { AiOutlineArrowRight } from "react-icons/ai";

interface FormProps {
  onChange?: string;
}

const Form = ({ onChange }: FormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendForm = () => {
    alert(JSON.stringify(form));
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
        <div className="flex flex-col gap-y-3">
          <label className="text-left">Name</label>
          <Input
            type="text"
            name="name"
            placeholder="Joshua David"
            data={handleChange}
            value={form.email}
          />

          <label className="text-left">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="joshuadavidang@outlook.sg"
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
              rightIcon={<AiOutlineArrowRight />}
              isDisabled={true}
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
