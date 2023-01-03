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
  useToast,
} from "@chakra-ui/react";
import { supabase } from "../../superbase";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loadState, setLoadState] = useState(false);
  const toast = useToast();

  const color = useColorModeValue("blue", "gray");

  const postDB = async (uuid: any, name: any, email: any, message: any) => {
    await supabase
      .from("form")
      .insert({
        uuid: uuid,
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        const { error } = res;

        if (error == null) {
          console.log("sent to database");
        } else {
          console.log(error.message);
        }
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!validateDetails(name, email, message)) {
      const toast_id = email;

      setTimeout(() => {
        if (!toast.isActive(toast_id)) {
          toast({
            id: email,
            position: "top",
            title: "Error",
            description: "Please fill in all the fields.",
            status: "error",
            duration: 1000,
            isClosable: false,
          });
        }
      }, 10);
    } else {
      setLoadState(true);
      postDB(uuidv4(), name, email, message);
      setTimeout(() => {
        setLoadState(false);
        clearState();

        toast({
          position: "top",
          title: "Success",
          description: "Thanks for reaching out!",
          status: "success",
          duration: 3000,
          isClosable: false,
        });
      }, 1000);
    }
  };

  const validateDetails = (name: any, email: any, message: any) => {
    if (name === "" || email === "" || message === "") {
      return false;
    }

    return /\S+@\S+\.\S+/.test(email);
  };

  const clearState = () => {
    setForm({
      ...form,
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const { name, email, message } = form;

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
          value={name}
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
          value={email}
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
          value={message}
        />
      </Box>

      <Box mt="7">
        <ButtonIcon
          isLoading={loadState}
          loadingText="Sending..."
          size="md"
          variant="solid"
          colorScheme={color}
          onClick={(event: any) => handleSubmit(event)}
          leftIcon={<AiOutlineArrowRight />}
          isDisabled={false}
        >
          Send
        </ButtonIcon>
      </Box>
    </FormControl>
  );
};

export default Form;
