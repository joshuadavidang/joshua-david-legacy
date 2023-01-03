import { useState } from "react";
import { ButtonIcon } from "../Button/ButtonIcon";
import Input from "./input";
import TextArea from "./textarea";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const color = useColorModeValue("blue", "gray");

  const sendForm = () => {
    if (form.name === "" || form.email === "" || form.message === "") {
      alert("Fill in the blanks");
    } else {
      alert(JSON.stringify(form));
    }
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl isRequired>
      <Box mb="5">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          size="md"
          placeholder="Joshua David"
          data={handleChange}
          value={form.email}
        />
      </Box>

      <Box mb="5">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          size="md"
          placeholder="joshuadavidang@outlook.sg"
          data={handleChange}
          value={form.email}
        />
      </Box>

      <Box mb="5">
        <FormLabel>Message</FormLabel>
        <TextArea
          name="message"
          size="md"
          placeholder="Leave a message..."
          rows={5}
          data={handleChange}
          value={form.message}
        />
      </Box>

      <Box mt="7">
        <ButtonIcon
          size="md"
          variant="solid"
          colorScheme={color}
          onClick={sendForm}
          rightIcon={<AiOutlineArrowRight />}
          isDisabled={true}
        >
          Send
        </ButtonIcon>
      </Box>
    </FormControl>
  );
};

export default Form;
